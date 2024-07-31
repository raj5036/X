import {  
	IconButton, 
	useTheme,
	Button,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { 
	ButtonsContainer,
	CustomModal,  
	ModalContent, 
	ModalHeaderControls,  
	SignupFormControls, 
	XLogo
} from "./SignupModalStyles"
import CloseIcon from '@mui/icons-material/Close'
import XWhiteLogo from '../../assets/images/logo-white.png'
import BasicInfoSetter from "./BasicInfoSetter/BasicInfoSetter"
import { UserSignUpMode, UserSignUpModes } from "../../utils/Constants"
import AuthInfoSetter from "./AuthInfoSetter/AuthInfoSetter"

type ComponentProps = {
	open: boolean,
	onClose: () => void
}

const SignupModal: React.FC<ComponentProps> = ({ open, onClose }) => {
	const [activeStep, setActiveStep] = useState<number>(0)
	const [signupMode, setSignupMode] = useState<UserSignUpMode>(UserSignUpModes.EMAIL)
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [month, setMonth] = useState<string>("")
	const [day, setDay] = useState<string>("")
	const [year, setYear] = useState<string>("")
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [captchaValue, setCaptchaValue] = useState<string>("")
	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true)
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState<boolean>(true)

	useEffect(() => {
		if (name && (phoneNumber || email) && month && day && year) {
			setNextButtonDisabled(false)
		} else {
			setNextButtonDisabled(true)
		}
	}, [name, phoneNumber, email, month, day, year])

	useEffect(() => {
		if (username && password && captchaValue && !nextButtonDisabled) {
			setSubmitButtonDisabled(false)
		} else {
			setSubmitButtonDisabled(true)
		}
	}, [nextButtonDisabled, username, password, captchaValue]) 

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

	const handleNextClick = () => {
		console.log("Next clicked")

		const dob = `${year}-${month}-${day}`
		console.log(dob)
		setActiveStep(step => step + 1)
		// Perform createUser mutation
		
		// Close modal
	}

	const handleBackClick = () => {
		setActiveStep(step => step - 1)
	}

	const handleSubmitClick = () => {
		console.log("Submit clicked")
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
					{activeStep == 0 
						? (
							<BasicInfoSetter
								name={name}
								email={email}
								phoneNumber={phoneNumber}
								month={month}
								day={day}
								year={year}
								setName={setName}
								setEmail={setEmail}
								setPhoneNumber={setPhoneNumber}
								setMonth={setMonth}
								setDay={setDay}
								setYear={setYear}
								signupMode={signupMode}
								setSignupMode={setSignupMode}
							/>
						) : (
						<AuthInfoSetter
							setCaptchaValue={setCaptchaValue}
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
						/>
					)}
					
				</SignupFormControls>
				<ButtonsContainer component={"div"}>	
					{activeStep == 0 
						? (
							<Button
								className="next-button"
								variant="contained"
								disabled={nextButtonDisabled}
								onClick={handleNextClick}
							>Next</Button>)
						: (<>
							<Button
								className="auth-button back-button"
								variant="contained"
								onClick={handleBackClick}
								>Back</Button>
							<Button
								className="auth-button submit-button"
								variant="contained"
								disabled={submitButtonDisabled}
								onClick={handleSubmitClick}
							>Submit</Button>
						</>)}
				</ButtonsContainer>
			</ModalContent>
		</CustomModal>
	)
}

export default SignupModal