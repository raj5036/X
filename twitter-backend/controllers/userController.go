package controllers

import (
	"context"
	"fmt"
	"time"

	"github.com/raj5036/x/twitter-backend/graph/model"
	"github.com/raj5036/x/twitter-backend/utils"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DatabaseUri string = "mongodb+srv://root:root@cluster0.dzz8o1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
var Users *mongo.Collection

func init() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	fmt.Println("DatabaseUri", DatabaseUri)

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(DatabaseUri))
	utils.HandleError(err, "Error connecting to MongoDB")

	Users = client.Database("x").Collection("users")
	fmt.Println("Connected to MongoDB!")
}

func CreateUser(userInput model.CreateUserInput) *model.User {
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
	return &user
}
