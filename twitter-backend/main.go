package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/raj5036/x/router"
)

func main() {
	fmt.Println("X server is running...")

	// Setup routers
	port := os.Getenv("PORT")
	fmt.Println("Listening on port " + port)
	router := router.Router()
	log.Fatal(http.ListenAndServe(":"+port, router))
}
