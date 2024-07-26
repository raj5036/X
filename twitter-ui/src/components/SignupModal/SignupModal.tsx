import { 
	DialogContent, 
	DialogTitle, 
	IconButton, 
	MenuItem,
	Stack, 
	TextField, 
	Typography, 
} from "@mui/material"
import React, { useState } from "react"
import { ChangeSignupMode, DialogWrapper, DOBContainer, SignupMode, TextFieldContainer } from "./SignupModalStyles"
import CloseIcon from '@mui/icons-material/Close'

type ComponentProps = {
	open: boolean,
	onClose: () => void
}

type UserSignUpModes = "phone" | "email"

const SignupModal: React.FC<ComponentProps> = ({ open, onClose }) => {
	const [signupMode, setSignupMode] = useState<UserSignUpModes>("phone")
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [month, setMonth] = useState<string>("Month")
	const [day, setDay] = useState<string>("")
	const [year, setYear] = useState<string>("")

	const getMonths = () => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		return months
	}

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

	return (
		<DialogWrapper open={open} onClose={handleModalClose} aria-labelledby="signup-modal">
			<DialogTitle id="signup-modal">Create your account</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={handleModalClose}
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
				<TextFieldContainer direction={"column"} spacing={2}>
					<TextField 
						id="name-input"
						label="Name"
						type="text"
						variant="outlined"
						required
						fullWidth
						color="info"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<SignupMode> 
						{signupMode === "phone" && <TextField
							id="phone-input"
							label="Phone"
							variant="outlined"
							type="number"
							required
							fullWidth
							color="info"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>}

						{signupMode === "email" && <TextField
							id="email-input"
							label="Email"
							type="email"
							variant="outlined"
							required
							fullWidth
							color="info"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>}
						<ChangeSignupMode 
							variant="body2"
							onClick={() => setSignupMode(signupMode == "phone" ? "email" : "phone")}
						>
							{signupMode == "phone" ? "Use email instead" : "Use phone instead"}
						</ChangeSignupMode>
					</SignupMode>
				</TextFieldContainer>
				<DOBContainer>
					<Typography variant="body1" fontWeight={"bold"}>Date of Birth</Typography>
					<Typography variant="caption">
						This will not be shown publicly. Confirm your own age, even if this account is for a business,
						a pet, or something else.
					</Typography>

					<Stack direction={"row"} spacing={2}>
						<TextField
							label="Month"
							value={month}
							onChange={(e) => setMonth(e.target.value)}
							select
							fullWidth
						>
							{getMonths().map((month) => <MenuItem key={month + 'month-input'} value={month}>{month}</MenuItem>)}
						</TextField>

						<TextField
							id="day-input"
							label="Day"
							fullWidth
							value={day}
							select
							onChange={(e) => setDay(e.target.value)}
						>
							{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => <MenuItem 
								key={day + 'day-input'}
								value={day}
							>
								{day}
							</MenuItem>)}
						</TextField>

						<TextField
							id="year-input"
							label="Year"
							value={year}
							select
							fullWidth
							onChange={(e) => setYear(e.target.value)}
						>
							{Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => <MenuItem 
								key={year + 'year-input'}
								value={year}>
									{year}
								</MenuItem>)}
						</TextField>
					</Stack>
				</DOBContainer>
			</DialogContent>
		</DialogWrapper>
	)
}

export default SignupModal