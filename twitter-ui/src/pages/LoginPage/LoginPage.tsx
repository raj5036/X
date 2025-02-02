import React, { useEffect, useState } from "react";
import XLogo from '../../assets/images/logo-white.png'
import { 
	Caption, 
	FormContainer, 
	FormDivider, 
	Header, 
	LoginContainer, 
	Logo, 
	SignInButton, 
	SignInContainer, 
	SignUpButton, 
	SubHeader 
} from "./LoginPageStyles";
import { Typography, useTheme } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import SignupModal from "../../components/SignupModal/SignupModal";
import { PAGE_TITLES } from "../../utils/Constants";
import LoginModal from "../../components/LoginModal/LoginModal";

const LoginPage: React.FC = () => {
	const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false)
	const [loginModalOpen, setLoginModalOpen] = useState<boolean>(true)

	const theme = useTheme()

	useEffect(() => {
		if (signUpModalOpen) {
			document.title = PAGE_TITLES.LOGIN.SIGNUP_FLOW
		} else {
			document.title = PAGE_TITLES.LOGIN.DEFAULT
		}
	}, [signUpModalOpen])

	const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
		console.log(credentialResponse);
	}

	const handleGoogleLoginFailure = () => {
		console.log('Login Failed');
	}

	const handleSignUpClick = () => {
		console.log('Sign up clicked');
		setSignUpModalOpen(true)
	}

	const handleSignInClick = () => {
		console.log('Sign in clicked');
		setLoginModalOpen(true)
	}

	const handleSignupModalClose = () => {
		setSignUpModalOpen(false)
	}

	const handleLoginModalClose = () => {
		setLoginModalOpen(false)
	}

	return (
		<React.Fragment>
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

					<SignInContainer component={"div"}>
						<Typography fontWeight={"bold"}>Already have an account?</Typography>
						<SignInButton onClick={handleSignInClick}>Sign in</SignInButton>
					</SignInContainer>
				</FormContainer>
			</LoginContainer>
			<SignupModal 
				open={signUpModalOpen}
				onClose={handleSignupModalClose}
			/>
			<LoginModal
				open={loginModalOpen}
				onClose={handleLoginModalClose}
			/>
		</React.Fragment>
	)
};

export default LoginPage