package utils

import (
	"fmt"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

func HandleError(err error, msg string) {
	if err != nil {
		panic(fmt.Sprintf("%s: %s", msg, err))
	}
}

func GetDatabaseHost() string {
	err := godotenv.Load()
	HandleError(err, "Error loading .env file")

	dbHost := os.Getenv("DB_HOST")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")

	dbHost = strings.Replace(dbHost, "<username>", dbUser, 1)
	dbHost = strings.Replace(dbHost, "<password>", dbPassword, 1)

	return dbHost
}
