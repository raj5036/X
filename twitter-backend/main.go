package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/raj5036/x/router"
)

func main() {
	fmt.Println("X server is running...")

	// Setup routers
	router := router.Router()
	log.Fatal(http.ListenAndServe(":8080", router))
	fmt.Println("Listening on port 8080")
}
