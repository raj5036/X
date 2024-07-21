package router

import (
	"github.com/gorilla/mux"
	"github.com/raj5036/x/controllers"
)

func Router() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	// Auth routes
	router.HandleFunc("/register", controllers.RegisterUser).Methods("POST")
	router.HandleFunc("/login", controllers.LoginUser).Methods("POST")

	return router
}
