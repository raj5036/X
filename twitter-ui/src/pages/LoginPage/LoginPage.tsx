import React from "react";
import XLogo from '../../assets/images/logo-white.png'
import { LoginPageStyles } from "./LoginPageStyles";
import { Stack, Typography, useTheme } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const LoginPage: React.FC = () => {
	const theme = useTheme()

	const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
		console.log(credentialResponse);
	}

	const handleGoogleLoginFailure = () => {
		console.log('Login Failed');
	}

	return (
		<LoginPageStyles.Container>
			<Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
				<LoginPageStyles.TwitterLogo src={XLogo} alt="logo" />
				<LoginPageStyles.LoginFormContainer>
					<Typography variant="h2" fontWeight={"bold"}>Happening now</Typography>
					<Typography variant="h4">Join today.</Typography>
					<GoogleLogin
						size="large"
						shape="pill"
						logo_alignment="center"
						theme="outline"
						width={theme.spacing(35)}
						cancel_on_tap_outside={true}
						onSuccess={handleGoogleLoginSuccess}
						onError={handleGoogleLoginFailure}
				/>
				</LoginPageStyles.LoginFormContainer>
			</Stack>
		</LoginPageStyles.Container>
	)
};

export default LoginPage