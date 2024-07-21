package router

import "github.com/gorilla/mux"

func Router() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)

	// Auth routes

	return router
}
