package utils

import (
	"fmt"
	"os"
	"strings"
)

func HandleError(err error, msg string) {
	if err != nil {
		panic(fmt.Sprintf("%s: %s", msg, err))
	}
}

func GetDatabaseHost() string {
	dbHost := os.Getenv("DB_HOST")
	fmt.Println("dbHost", dbHost)
	dbUser := os.Getenv("DB_USER")
	fmt.Println("dbUser", dbUser)
	dbPassword := os.Getenv("DB_PASSWORD")

	dbHost = strings.Replace(dbHost, "<username>", dbUser, 1)
	dbHost = strings.Replace(dbHost, "<password>", dbPassword, 1)

	return dbHost
}
