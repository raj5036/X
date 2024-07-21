import React from "react";
import XLogo from '../../assets/images/logo-white.png'
import { LoginPageStyles } from "./LoginPageStyles";
import { Stack, Typography } from "@mui/material";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";

const LoginPage: React.FC = () => {
	return (
		<LoginPageStyles.Container>
			<Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
				<LoginPageStyles.TwitterLogo src={XLogo} alt="logo" />
				<LoginPageStyles.LoginFormContainer>
					<Typography variant="h2" fontWeight={"bold"}>Happening now</Typography>
					<Typography variant="h4">Join today.</Typography>
					<GoogleLoginButton />
				</LoginPageStyles.LoginFormContainer>
			</Stack>
		</LoginPageStyles.Container>
	)
};

export default LoginPage