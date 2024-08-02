import { Divider, Stack, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { FormContainer } from "./UserSetterStyles";
import { GoogleLogin } from "@react-oauth/google";

type ComponentProps = {
	user: string,
	setUser: React.Dispatch<React.SetStateAction<string>>
}

const UserSetter: React.FC<ComponentProps> = ({user, setUser}) => {

	const theme = useTheme()

	return <FormContainer>
		<Typography variant="h4" className="title">Sign in to ShareSpace</Typography>
		<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
			<GoogleLogin
				size="large"
				shape="pill"
				logo_alignment="center"
				theme="outline"
				width={theme.spacing(35)}
				cancel_on_tap_outside={true}
				onSuccess={tokenResponse => console.log(tokenResponse)}	
			/>

			<Divider text-align="center">or</Divider>

			<TextField 
				className="user-input"
				label="Phone, email or username"
				type="text"
				variant="outlined"
				required
				color="info"
				value={user} 
				onChange={(e) => setUser(e.target.value)}
			/>
		</Stack>
	</FormContainer>;
};

export default UserSetter