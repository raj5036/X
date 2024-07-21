package controllers

import (
	"context"
	"fmt"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/raj5036/x/utils"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const DATABASE string = "X"
const COLLECTION string = "users"

var Users *mongo.Collection

func init() {
	err := godotenv.Load()
	utils.HandleError(err)

	connectionString := utils.GetMongoConnectionString()
	clientOptions := options.Client().ApplyURI(connectionString)

	//connect to mongodb
	client, err := mongo.Connect(context.TODO(), clientOptions)
	utils.HandleError(err)
	fmt.Println("Connected to MongoDB!")

	Users = client.Database(DATABASE).Collection(COLLECTION)
	fmt.Println("Collection instance is ready!")
}

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Content-Type", "application/json")
}

func LoginUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Content-Type", "application/json")
}
