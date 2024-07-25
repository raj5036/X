import { Dialog, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DialogWrapper = styled(Dialog)(({ theme }) => `
	height: ${theme.spacing(50)};
	width: ${theme.spacing(80)};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	background-color: black;
	border: 1px solid white;

	& .MuiPaper-root {
		color: white;
		background-color: black;
		margin: 0;
		padding: 0;
	}
`)

export const ChangeSignupMode = styled(Typography)(() => `
	cursor: pointer;
`)