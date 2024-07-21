package utils

import (
	"fmt"
	"os"
	"strings"
)

func HandleError(err error) {
	if err != nil {
		panic(err)
	}
}

func GetMongoConnectionString() string {
	dbHost := os.Getenv("DB_HOST")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")

	connectionString := strings.Replace(dbHost, "<username>", dbUser, 1)
	connectionString = strings.Replace(connectionString, "<password>", dbPassword, 1)

	fmt.Println(connectionString)

	return connectionString
}
