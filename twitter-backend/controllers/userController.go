package controllers

import (
	"context"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/raj5036/x/twitter-backend/graph/model"
	"github.com/raj5036/x/twitter-backend/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
)

var DatabaseUri string = utils.GetDatabaseHost()
var Users *mongo.Collection
var secretKey = []byte("secret")

func init() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(DatabaseUri))
	utils.HandleError(err, "Error connecting to MongoDB")

	Users = client.Database("x").Collection("users")
	fmt.Println("Connected to MongoDB!")
}

func CreateUser(userInput model.CreateUserInput) (*model.AuthPayload, error) {
	inputEmail := userInput.Email
	inputPhoneNumber := userInput.PhoneNumber
	inputUsername := userInput.Username

	if (inputEmail == nil && inputPhoneNumber == nil) || inputUsername == "" {
		return nil, fmt.Errorf("email or phone number and username are required")
	}

	// Check if user with same username already exists
	userExists := findUser(bson.M{"username": inputUsername})
	if userExists.Name != "" {
		return nil, fmt.Errorf("user with same username already exists")
	}

	// Check if User with same email already exists
	if inputEmail != nil {
		userExists := findUser(bson.M{"email": inputEmail})
		fmt.Println("userExists", userExists)
		if userExists.Name != "" {
			return nil, fmt.Errorf("user with same email already exists")
		}
	}

	// Check if User with same phone number already exists
	if inputPhoneNumber != nil {
		userExists := findUser(bson.M{"phoneNumber": inputPhoneNumber})
		if userExists.Name != "" {
			return nil, fmt.Errorf("user with same phone number already exists")
		}
	}

	// Hash Password
	userInput.Password = hashPassword(userInput.Password)

	// Create new User
	inserted, err := Users.InsertOne(context.Background(), userInput)
	utils.HandleError(err, "Error creating new User")

	fmt.Println("Created new User with ID: ", inserted.InsertedID)

	// Create JWT Token
	user := model.User{
		Name:        userInput.Name,
		Email:       userInput.Email,
		PhoneNumber: userInput.PhoneNumber,
		Username:    userInput.Username,
		Password:    userInput.Password,
	}
	tokenString := createUserToken(user)

	return &model.AuthPayload{Token: tokenString}, nil
}

func LoginUser(loginInput model.LoginUserInput) (*model.AuthPayload, error) {
	user := findUser(bson.M{"email": loginInput.Email})
	if user.Name == "" {
		return nil, fmt.Errorf("user with given email doesn't exist")
	}

	passwordMatch := comparePassword(loginInput.Password, user.Password)
	if !passwordMatch {
		return nil, fmt.Errorf("incorrect password")
	}

	tokenString := createUserToken(user)
	return &model.AuthPayload{Token: tokenString}, nil
}

func GetAllUsers() ([]*model.User, error) {
	Users, err := Users.Find(context.Background(), bson.M{})
	utils.HandleError(err, "Error getting all Users")

	var users []*model.User
	for Users.Next(context.Background()) {
		var user model.User
		err := Users.Decode(&user)
		utils.HandleError(err, "Error decoding User")
		users = append(users, &user)
	}
	return users, nil
}

func hashPassword(password string) string {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	utils.HandleError(err, "Error hashing password")
	return string(bytes)
}

func comparePassword(password string, hashedPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err == nil
}

func createUserToken(user model.User) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"name":        user.Name,
		"email":       user.Email,
		"phoneNumber": user.PhoneNumber,
		"username":    user.Username,
		"exp":         time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString(secretKey)
	utils.HandleError(err, "Error signing token")

	return tokenString
}

func findUser(filter primitive.M) model.User {
	var user model.User

	err := Users.FindOne(context.Background(), filter).Decode(&user)
	if err != nil {
		return user
	}

	return user
}
