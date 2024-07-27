import { Box, Modal, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomModal = styled(Modal)(() => `
	& .MuiBackdrop-root: {
            backgroundColor: rgba(0, 0, 0, 0.5);
	}
`)

export const ModalContent = styled(Box)(({ theme }) => `
	height: ${theme.spacing(61)};
	width: ${theme.spacing(70)};
	color: white;
	background-color: black;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: ${theme.spacing(1)};
`)

export const ModalHeaderControls = styled(Stack)(() => ``) 

export const XLogo = styled("img")(({ theme }) => `
	height: ${theme.spacing(3)};
	width: ${theme.spacing(3)};
`)

export const SignupFormControls = styled(Box)(({ theme }) => `
	padding: ${theme.spacing(2)} ${theme.spacing(7)} 0;
	height: ${theme.spacing(45)};
	overflow-y: scroll;

	& .title {
		font-size: ${theme.spacing(3.5)};
		font-weight: 700;
		margin-bottom: ${theme.spacing(3)};
	}

	& .signup-mode-container {
		position: relative;
	}

	& .signup-mode-text {
		width: fit-content;
		cursor: pointer;
		position: absolute;
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

export const DOBContainer = styled(Box)(({ theme }) => `
	margin-top: ${theme.spacing(7)};
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

export const ButtonContainer = styled(Box)(({ theme }) => `
	height: ${theme.spacing(10)};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& .next-button {
		padding: ${theme.spacing(0.5)};
		color: black;
		background-color: white;
		height: ${theme.spacing(8)};
		width: ${theme.spacing(55)};
		border-radius: ${theme.spacing(5)};
		text-transform: none;
		font-size: ${theme.spacing(2.5)};
		font-weight: 700;
	}
`)