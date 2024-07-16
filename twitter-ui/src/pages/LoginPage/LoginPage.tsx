import React from "react";
import { LoginPageStyles } from "./LoginPageStyles";
import XLogo from '../../assets/images/logo-white.png'

const LoginPage: React.FC = () => {
	return (
		<React.Fragment>
			<LoginPageStyles.Container>
				<LoginPageStyles.ImageContainer>
					<img
						src={XLogo}
						alt="Logo"
					/>
				</LoginPageStyles.ImageContainer>
				<LoginPageStyles.LoginContainer>
					Form
				</LoginPageStyles.LoginContainer>
			</LoginPageStyles.Container>
		</React.Fragment>
	)
};

export default LoginPage