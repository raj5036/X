import { Box, Modal, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomModal = styled(Modal)(() => `
	& .MuiBackdrop-root: {
		backgroundColor: rgba(0, 0, 0, 0.5);
	}

	& ul: {
		color: white;
		background-color: black;
		border: solid 1px white;
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

export const ModalHeaderControls = styled(Stack)(() => `
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`) 

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

export const ButtonsContainer = styled(Box)(({ theme }) => `
	height: ${theme.spacing(10)};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${theme.spacing(2)};

	& .next-button {
		padding: ${theme.spacing(0.5)};
		color: black !important;
		background-color: white !important;
		height: ${theme.spacing(8)};
		width: ${theme.spacing(55)};
		border-radius: ${theme.spacing(5)};
		text-transform: none;
		font-size: ${theme.spacing(2.5)};
		font-weight: 700;

		:hover {
			background-color: gray;
		}

		:disabled {
			background-color: gray !important;
		}
	}

	& .auth-button {
		padding: ${theme.spacing(0.5)};
		height: ${theme.spacing(7)};
		width: ${theme.spacing(28)};
		border-radius: ${theme.spacing(5)};
		text-transform: none;
		font-size: ${theme.spacing(2.5)};
		font-weight: 700;
	}

	& .back-button {
		color: black !important;
		background-color: white !important;
	}

	& .submit-button {
		color: white !important;
		background-color: #0288D1 !important;

		:disabled {
			background-color: gray !important;
		}
	}

	.MuiButtonBase-root:disabled {
  		cursor: not-allowed;
  		pointer-events: auto;
	}

`)