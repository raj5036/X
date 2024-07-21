import GoogleIcon from "../../assets/svgs/Google.svg";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginStyles } from "./GoogleLoginButtonStyles"
import { Typography } from "@mui/material";

const GoogleLoginButton: React.FC = () => {
	const login = useGoogleLogin({
		onSuccess: tokenResponse => console.log(tokenResponse),
	});

	return (
		<GoogleLoginStyles.Box 
			onClick={() => login()}
		>
			<img src={GoogleIcon} alt="logo" />
			<Typography variant="body1">Sign up with Google</Typography>
		</GoogleLoginStyles.Box>
	)
}

export default GoogleLoginButton