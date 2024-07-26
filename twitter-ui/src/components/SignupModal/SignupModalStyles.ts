import { Box, Modal, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalWrapper = styled(Modal)(({ theme }) => `
	height: ${theme.spacing(65)};
	width: ${theme.spacing(70)};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	background-color: black;
	padding: ${theme.spacing(1)};
	border: 1px solid white;
	border-radius: ${theme.spacing(1.5)};
	box-shadow: 24;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	& .MuiPaper-root {
		color: white;
		background-color: black;
		margin: 0;
		padding: 0;
	}

	& .MuiBackdrop-root: {
            backgroundColor: rgba(0, 0, 0, 0.5);
	}
`)

export const ModalHeaderControls = styled(Stack)(() => ``) 

export const XLogo = styled("img")(({ theme }) => `
	height: ${theme.spacing(3)};
	width: ${theme.spacing(3)};
`)

export const ModalContent = styled(Box)(({ theme }) => `
	padding: ${theme.spacing(2)} ${theme.spacing(7)} 0;

	& .title {
		font-size: ${theme.spacing(3.5)};
		font-weight: 700;
		margin-bottom: ${theme.spacing(3)};
	}

	& .signup-mode-text {
		cursor: pointer;
		position: relative;
		right: 0;
		margin-top: ${theme.spacing(1)};
		color: #1D9BF0;
		:hover {
			text-decoration: underline;
		}
	}
`)

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