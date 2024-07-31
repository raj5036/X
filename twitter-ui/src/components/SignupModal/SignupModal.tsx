import {  
	IconButton, 
	useTheme,
	Button
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { 
	ButtonContainer,
	CustomModal,  
	ModalContent, 
	ModalHeaderControls, 
	ReCAPTCHAContainer, 
	SignupFormControls, 
	XLogo
} from "./SignupModalStyles"
import CloseIcon from '@mui/icons-material/Close'
import XWhiteLogo from '../../assets/images/logo-white.png'
import ReCAPTCHA from 'react-google-recaptcha'
import { config } from "../../config/config"
import BasicInfoSetter from "./BasicInfoSetter/BasicInfoSetter"
import { UserSignUpMode, UserSignUpModes } from "../../utils/Constants"

type ComponentProps = {
	open: boolean,
	onClose: () => void
}

const SignupModal: React.FC<ComponentProps> = ({ open, onClose }) => {
	const [signupMode, setSignupMode] = useState<UserSignUpMode>(UserSignUpModes.EMAIL)
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [month, setMonth] = useState<string>("")
	const [day, setDay] = useState<string>("")
	const [year, setYear] = useState<string>("")
	const [captchaValue, setCaptchaValue] = useState<string>("")
	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true)

	useEffect(() => {
		if (name && (phoneNumber || email) && month && day && year && captchaValue) {
			setNextButtonDisabled(false)
		} else {
			setNextButtonDisabled(true)
		}
	}, [name, phoneNumber, email, month, day, year, captchaValue])

	const handleModalClose = () => {
		setName(() => {
			setEmail("")
			setPhoneNumber("")
			setMonth("")
			setDay("")
			setYear("")
			return ""
		})
		onClose()
	}

	const handleCaptchaSubmit = (val: string | null) => {
		if (!val) {
			return
		}

		setCaptchaValue(val)
	}

	const handleNextClick = () => {
		console.log("Next clicked")

		const dob = `${year}-${month}-${day}`
		console.log(dob)
		// Perform createUser mutation
		
		// Close modal
	}

	// const CREATE_USER = gql`
	// 	mutation createUser(
	// 		$name: String!, 
	// 		$email: String, 
	// 		$phoneNumber: String, 
	// 		$username: String!, 
	// 		$password: String!, 
	// 		$DOB: String!
	// 	) {
	// 		createUser (input:$input) {
	// 			name,
	// 			DOB,
	// 			password
	// 		}
	// 	}
	// `

	const theme = useTheme()

	return (
		<CustomModal 
			open={open}
			onClose={handleModalClose}
			aria-labelledby="signup-modal"
		>
			<ModalContent component="div">
				<ModalHeaderControls 
					direction={"row"} 
					justifyContent={"flex-start"} 
					alignItems={"center"}
					gap={theme.spacing(28)}
				>
					<IconButton
						aria-label="close"
						onClick={handleModalClose}
							sx={{
								color: (theme) => theme.palette.grey[500],
							}}
					>
						<CloseIcon />
					</IconButton>
					<XLogo
						src={XWhiteLogo}
						alt="x-logo"
					/>
				</ModalHeaderControls>
				<SignupFormControls>
					<BasicInfoSetter
						name={name}
						setName={setName}
						email={email}
						setEmail={setEmail}
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
						month={month}
						setMonth={setMonth}
						day={day}
						setDay={setDay}
						year={year}
						setYear={setYear}
						signupMode={signupMode}
						setSignupMode={setSignupMode}
					/>
					<ReCAPTCHAContainer>
						<ReCAPTCHA
							sitekey={config.GOOGLE_RECAPTCHA_CREDENTIALS.SITE_KEY}
							theme="dark"
							onChange={handleCaptchaSubmit}
						/>
					</ReCAPTCHAContainer>
				</SignupFormControls>
				<ButtonContainer component={"div"}>	
					<Button
						className="next-button"
						variant="contained"
						disabled={nextButtonDisabled}
						onClick={handleNextClick}
					>Next</Button>
				</ButtonContainer>
			</ModalContent>
		</CustomModal>
	)
}

export default SignupModal