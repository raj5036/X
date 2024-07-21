import React from "react";
import XLogo from '../../assets/images/logo-white.png'
import { LoginPageStyles } from "./LoginPageStyles";
import { Stack, Typography, useTheme } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
	const theme = useTheme()

	const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
		console.log(credentialResponse);
	}

	const handleGoogleLoginFailure = () => {
		console.log('Login Failed');
	}

	const handleSignUpClick = () => {
		console.log('Sign up clicked');
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
				
				<LoginPageStyles.FormDivider 
					textAlign="center"
				>Or</LoginPageStyles.FormDivider>

				<LoginPageStyles.SignUpButton
					onClick={handleSignUpClick}
				>
					<Typography 
						variant="h6" 
						fontWeight={"bold"}
						fontSize={theme.spacing(2)}
					>Create account</Typography>
				</LoginPageStyles.SignUpButton>
				<Typography variant="caption">
					By signing up, you agree to the 
					<Link to={"https://x.com/en/tos"}>
						Terms of Service
					</Link> and 
					<Link to={"https://x.com/en/privacy"}>
						Privacy Policy
					</Link>
					, including 
					<Link to={"https://x.com/en/cookies"}>
						Cookie Use.
					</Link>
				</Typography>
				
				</LoginPageStyles.LoginFormContainer>
			</Stack>
		</LoginPageStyles.Container>
	)
};

export default LoginPage