import { gql } from "@apollo/client";

export const ADD_USER = gql`
	mutation createUser ($input:CreateUserInput!){
		createUser (input:$input) {
			name,
			DOB,
			password
		}
	}
`