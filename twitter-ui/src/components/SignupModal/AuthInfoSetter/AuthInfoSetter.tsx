import { Box } from "@mui/material";
import React from "react";
import { ReCAPTCHAContainer } from "./AuthInfoSetterStyles";
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../../../config/config";

type ComponentProps = {
	setCaptchaValue: React.Dispatch<React.SetStateAction<string>>
}

const AuthInfoSetter: React.FC<ComponentProps> = ({ setCaptchaValue }) => {
	const handleCaptchaSubmit = (val: string | null) => {
		if (!val) {
			return
		}

		setCaptchaValue(val)
	}
	return (
		<Box>
			<h3>AuthInfoSetter</h3>
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