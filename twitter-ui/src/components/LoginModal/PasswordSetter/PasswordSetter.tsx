import React from "react";
import { PasswordSetterContainer } from "./PasswordSetterStyles";
import { Stack, TextField, Typography } from "@mui/material";

type ComponentProps = {
	user: string,
	password: string,
	setPassword: React.Dispatch<React.SetStateAction<string>>
}

const PasswordSetter: React.FC<ComponentProps> = ({ user, password, setPassword }) => {
	return <PasswordSetterContainer>
		<Typography variant="h4" className="title">Enter your password</Typography>
		<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
			<TextField 
				className="user-input"
				label="Phone, email or username"
				type="text"
				variant="outlined"
				required
				// disabled
				color="info"
				value={user} 
			/>

			<TextField 
				className="password-input"
				label="Password"
				type="password"
				variant="outlined"
				required
				color="info"
				value={password}
				onChange={(e) => setPassword(e.target.value)} 
			/>
		</Stack>
	</PasswordSetterContainer>
}

export default PasswordSetter