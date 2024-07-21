import React from "react";
import XLogo from '../../assets/images/logo-white.png'
import { 
	Caption, 
	FormContainer, 
	FormDivider, 
	Header, 
	LoginContainer, 
	Logo, 
	SignUpButton, 
	SubHeader 
} from "./LoginPageStyles";
import { Typography, useTheme } from "@mui/material";
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
		<LoginContainer>
				<Logo src={XLogo} alt="x-logo" />
				<FormContainer>
					<Header variant="h2" fontWeight={"bolder"}>Happening now</Header>
					<SubHeader variant="h4">Join today.</SubHeader>
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
				
				<FormDivider textAlign="center">or</FormDivider>

				<SignUpButton
					onClick={handleSignUpClick}
				>
					<Typography 
						variant="h6" 
						fontWeight={"bold"}
						fontSize={theme.spacing(2)}
					>Create account</Typography>
				</SignUpButton>
				<Caption variant="caption">
					By signing up, you agree to the {" "}
					<Link to={"https://x.com/en/tos"}>
						Terms of Service{" "}
					</Link> and {" "}
					<Link to={"https://x.com/en/privacy"}>
						Privacy Policy
					</Link>
					, including {" "}
					<Link to={"https://x.com/en/cookies"}>
						Cookie Use.
					</Link>
				</Caption>
				
				</FormContainer>
		
		</LoginContainer>
	)
};

export default LoginPage