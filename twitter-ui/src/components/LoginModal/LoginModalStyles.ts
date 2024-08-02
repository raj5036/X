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
	gap: ${theme.spacing(2)};

	& .login-next-button {
		width: ${theme.spacing(40)} !important;
		color: black !important;
		background-color: white !important;
		text-transform: none;
		font-size: ${theme.spacing(2)};
		font-weight: 700;
		border-radius: ${theme.spacing(3)};
	}

	& .forgot-password-button {
		width: ${theme.spacing(40)};
		color: white;
		background-color: black;
		text-transform: none;
		font-size: ${theme.spacing(2)};
		font-weight: 700;
		border: 1px solid rgb(29, 155, 240);
		border-radius: ${theme.spacing(3)};
		margin-top: ${theme.spacing(1.8)};
	}
`)