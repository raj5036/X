import { DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { ChangeSignupMode, DialogWrapper } from "./SignupModalStyles"
import CloseIcon from '@mui/icons-material/Close'

type ComponentProps = {
	open: boolean,
	onClose: () => void
}

type UserSignUpModes = "phone" | "email"

const SignupModal: React.FC<ComponentProps> = ({ open, onClose }) => {
	const [signupMode, setSignupMode] = useState<UserSignUpModes>("phone")
	return (
		<DialogWrapper open={open} onClose={onClose} aria-labelledby="signup-modal">
			<DialogTitle id="signup-modal">Create your account</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
				>
				<CloseIcon />
			</IconButton>
			<DialogContent>
				<TextField 
					id="name-input"
					label="Name"
					type="text"
					variant="outlined"
					required
				/>
				{signupMode == "phone" && <TextField
					id="phone-input"
					label="Phone"
					variant="outlined"
					type="number"
					required
				/>}

				{signupMode == "email" && <TextField
					id="email-input"
					label="Email"
					type="email"
					variant="outlined"
					required
				/>}
				<ChangeSignupMode 
					variant="body2"
					onClick={() => setSignupMode(signupMode == "phone" ? "email" : "phone")}
				>
					{signupMode == "phone" ? "Use email instead" : "Use phone instead"}
				</ChangeSignupMode>

				<Typography variant="body1" fontWeight={"bold"}>Date of Birth</Typography>
				<Typography variant="caption">
					This will not be shown publicly. Confirm your own age, even if this account is for a business,
					a pet, or something else.
				</Typography>
			</DialogContent>
		</DialogWrapper>
	)
}

export default SignupModal