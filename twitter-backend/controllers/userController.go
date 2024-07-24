package controllers

import (
	"context"
	"fmt"
	"time"

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

func init() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(DatabaseUri))
	utils.HandleError(err, "Error connecting to MongoDB")

	Users = client.Database("x").Collection("users")
	fmt.Println("Connected to MongoDB!")
}

func CreateUser(userInput model.CreateUserInput) (*model.User, error) {
	inputEmail := userInput.Email
	inputPhoneNumber := userInput.PhoneNumber

	if inputEmail == nil && inputPhoneNumber == nil {
		return nil, fmt.Errorf("either email or phone number is required")
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
	user := model.User{
		ID:          inserted.InsertedID.(primitive.ObjectID).Hex(),
		Name:        userInput.Name,
		Email:       userInput.Email,
		PhoneNumber: userInput.PhoneNumber,
		Dob:         userInput.Dob,
	}
	return &user, nil
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

func findUser(filter primitive.M) model.User {
	var user model.User

	err := Users.FindOne(context.Background(), filter).Decode(&user)
	if err != nil {
		return user
	}

	return user
}
