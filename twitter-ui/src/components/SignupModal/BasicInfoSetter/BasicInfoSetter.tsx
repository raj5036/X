import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { DOBContainer, TextFieldContainer } from "./BasicInfoSetterStyles";
import { UserSignUpMode, USER_SIGNUP_MODES} from "../../../utils/Constants";

type ComponentProps = {
	name: string,
	setName: React.Dispatch<React.SetStateAction<string>>,
	email: string,
	setEmail: React.Dispatch<React.SetStateAction<string>>,
	phoneNumber: string,
	setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
	month: string,
	setMonth: React.Dispatch<React.SetStateAction<string>>,
	day: string,
	setDay: React.Dispatch<React.SetStateAction<string>>,
	year: string,
	setYear: React.Dispatch<React.SetStateAction<string>>,
	signupMode: UserSignUpMode,
	setSignupMode: React.Dispatch<React.SetStateAction<UserSignUpMode>>,
}

const BasicInfoSetter: React.FC<ComponentProps> = ({
	name,
	setName,
	signupMode,
	setSignupMode,
	email,
	setEmail,
	phoneNumber,
	setPhoneNumber,
	month,
	setMonth,
	day,
	setDay,
	year,
	setYear
}) => {
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

	return (<>
		<Typography className="title">Create your account</Typography>
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
			<Box component={"div"} className="signup-mode-container"> 
				{signupMode === USER_SIGNUP_MODES.PHONE && <TextField
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

				{signupMode === USER_SIGNUP_MODES.EMAIL && <TextField
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
				<Typography 
					className="signup-mode-text"
					variant="body2"
					onClick={() => setSignupMode(signupMode == USER_SIGNUP_MODES.PHONE 
						? USER_SIGNUP_MODES.EMAIL 
						: USER_SIGNUP_MODES.PHONE
					)}
				>
					{signupMode == "phone" ? "Use email instead" : "Use phone instead"}
				</Typography>
			</Box>
		</TextFieldContainer>
		<DOBContainer>
			<Typography variant="body1" fontWeight={"bold"}>Date of Birth</Typography>
			<Typography variant="caption">
				This will not be shown publicly. Confirm your own age, even if this account is for a business,
				a pet, or something else.
			</Typography>
			<Stack direction={"row"} spacing={2}>
				<TextField
					className="month-input"
					label="Month"
					fullWidth
					select
					color="info"
					required
					value={month}
					onChange={(e) => setMonth(e.target.value)}
					sx={{
						color: "white"
					}}
				>
					{getMonths().map((month) => <MenuItem 
						key={month + 'month-input'} 
						value={month}
					>{month}</MenuItem>)}
				</TextField>

				<TextField
					className="day-input"
					label="Day"
					fullWidth
					select
					color="info"
					required
					value={day}
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
					className="year-input"
					label="Year"
					select
					fullWidth
					color="info"
					required
					value={year}
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
	</>);
};

export default BasicInfoSetter;