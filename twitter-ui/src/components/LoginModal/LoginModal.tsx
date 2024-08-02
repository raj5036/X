import React, { useEffect, useState } from "react"
import { CustomModal, ModalHeaderControls, XLogo } from "../SignupModal/SignupModalStyles"
import { ButtonsContainer, LoginFormControls, LoginModalContent } from "./LoginModalStyles"
import { Button, IconButton, useTheme } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import XWhiteLogo from '../../assets/images/logo-white.png'
import UserSetter from "./UserSetter/UserSetter"
import PasswordSetter from "./PasswordSetter/PasswordSetter"

type ComponentProps = {
	open: boolean,
	onClose: () => void
}
const LoginModal: React.FC<ComponentProps> = ({open, onClose}) => {
	const [activeStep, setActiveStep] = useState<number>(1)
	const [user, setUser] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true)

	useEffect(() => {
		if (user) {
			setNextButtonDisabled(false)
		} else {
			setNextButtonDisabled(true)
		}
	}, [user])

	const onForgotPassword = () => {
		console.log("Forgot password")
	}

	const onLoginClick = () => {
		console.log("Login clicked")
	}

	const theme = useTheme()

	return (
		<CustomModal
			open={open}
			onClose={onClose}
			aria-labelledby="login-modal"
		>
			<LoginModalContent component={"div"}>
				<ModalHeaderControls 
					direction={"row"} 
					justifyContent={"flex-start"} 
					alignItems={"center"}
					gap={theme.spacing(28)}
				>
					<IconButton
						aria-label="close"
						onClick={onClose}
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
				<LoginFormControls>
					{activeStep === 0 
						? <UserSetter user={user} setUser={setUser}/> 
						: <PasswordSetter user={user} password={password} setPassword={setPassword}/>
					}
				</LoginFormControls>
				<ButtonsContainer direction={"column"} justifyContent={"center"} alignItems={"center"}>
					{activeStep === 0 ? (<>
						<Button 
							className="login-next-button"
							variant="contained"
							color="info"
							disabled={nextButtonDisabled}
							onClick={() => setActiveStep(1)}
						>Next</Button>
						<Button
							className="forgot-password-button"
							variant="contained"
							onClick={onForgotPassword}
						>Forgot password</Button>
					</>) : (<>
						<Button
							className="login-button"
							variant="contained"
							onClick={onLoginClick}
						>Log in</Button>
					</>)}
				</ButtonsContainer>
			</LoginModalContent>
		</CustomModal>
	)
}

export default LoginModal