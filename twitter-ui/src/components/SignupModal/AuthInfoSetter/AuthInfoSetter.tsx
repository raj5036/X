import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { ReCAPTCHAContainer } from "./AuthInfoSetterStyles";
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../../../config/config";
import { TextFieldContainer } from "../BasicInfoSetter/BasicInfoSetterStyles";

type ComponentProps = {
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	password: string,
	setPassword: React.Dispatch<React.SetStateAction<string>>,
	setCaptchaValue: React.Dispatch<React.SetStateAction<string>>
}

const AuthInfoSetter: React.FC<ComponentProps> = ({ 
	username, 
	setUsername, 
	password, 
	setPassword, 
	setCaptchaValue 
}) => {
	const handleCaptchaSubmit = (val: string | null) => {
		if (!val) {
			return
		}

		setCaptchaValue(val)
	}
	return (
		<Box component={"div"}>
			<Typography className="title">Set Account Credentials</Typography>
			<TextFieldContainer>
				<TextField 
					className="username-input"
					label="Username"
					type="text"
					variant="outlined"
					required
					fullWidth
					color="info"
					value={username} 
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField 
					className="password-input"
					label="Password"
					type="password"
					variant="outlined"
					required
					fullWidth
					color="info"
					value={password} 
					onChange={(e) => setPassword(e.target.value)}
				/>
			</TextFieldContainer>
			<ReCAPTCHAContainer>
				<ReCAPTCHA
					sitekey={config.GOOGLE_RECAPTCHA_CREDENTIALS.SITE_KEY}
					theme="dark"
					onChange={handleCaptchaSubmit}
				/>
			</ReCAPTCHAContainer>
		</Box>
	);
}

export default AuthInfoSetter