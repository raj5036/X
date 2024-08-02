import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

export const LoginModalContent = styled(Box)(({ theme }) => `
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

export const LoginFormControls = styled(Box)(({ theme }) => `
	padding: ${theme.spacing(2)} ${theme.spacing(7)} 0;
	margin-bottom: ${theme.spacing(5)};
`)

export const ButtonsContainer = styled(Stack)(({ theme }) => `
	gap: ${theme.spacing(4)};

	& .login-next-button {
		width: ${theme.spacing(40)} !important;
		color: black !important;
		background-color: white !important;
		text-transform: none;
		font-size: ${theme.spacing(2)};
		font-weight: 700;
		border-radius: ${theme.spacing(3)};

		:disabled {
			cursor: not-allowed;
			pointer-events: auto;
			background-color: gray !important;
		}
	}

	& .forgot-password-button {
		width: ${theme.spacing(40)};
		color: white !important;
		background-color: black !important;
		text-transform: none;
		font-size: ${theme.spacing(2)};
		font-weight: 700;
		border: 1px solid rgb(29, 155, 240);
		border-radius: ${theme.spacing(3)};
	}
`)