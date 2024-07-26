import { Box, Dialog, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DialogWrapper = styled(Dialog)(({ theme }) => `
	height: ${theme.spacing(70)};
	width: ${theme.spacing(80)};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	background-color: black;
	border: 1px solid white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	& .MuiPaper-root {
		color: white;
		background-color: black;
		margin: 0;
		padding: 0;
	}
`)
		
		// margin-top: -${theme.spacing(18)};
export const TextFieldContainer = styled(Stack)(() => `
	& .MuiInputBase-input {
		color: white;
	}
`)

export const SignupMode = styled(Box)(() => `
	text-align: right;
	width: 100%;

	& .MuiTextField-root {
	}
`)

export const ChangeSignupMode = styled(Typography)(({ theme }) => `
	cursor: pointer;
	position: relative;
	right: 0;
	margin-top: ${theme.spacing(1)};
	color: #1D9BF0;
	:hover {
		text-decoration: underline;
	}
`)

export const DOBContainer = styled(Box)(({ theme }) => `
	margin-top: ${theme.spacing(2)};
	color: white;

	& .MuiTypography-body1 {
		margin-bottom: ${theme.spacing(1.2)};
	}

	& .MuiTypography-caption {
		color: gray;
	}

	& .MuiStack-root {
		margin-top: ${theme.spacing(2.5)};
	}

	& .MuiInputBase-root {
		color: white;
	}

	& .month-input {
		width: ${theme.spacing(26)};
	}

	& .day-input {
		width: ${theme.spacing(10)};
	}

	& .year-input {
		width: ${theme.spacing(27)};
	}
`)