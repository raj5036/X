import { Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginContainer = styled("div")(() => `
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100vh;
	width: 100%;
	color: white;
	background-color: black;
`)

export const FormContainer = styled("div")(() => `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`)

export const Logo = styled("img")(({ theme }) => `
	height: ${theme.spacing(35)};
	width: ${theme.spacing(35)};
`)

export const Header = styled(Typography)(({ theme }) => `
	margin-bottom: ${theme.spacing(4)};
`)

export const SubHeader = styled(Typography)(({ theme }) => `
	margin-bottom: ${theme.spacing(2.5)};
`)

export const FormDivider = styled(Divider)(({theme}) => `
	margin-top: ${theme.spacing(2)};
	margin-bottom: 0;
	width: ${theme.spacing(35)};
`)

export const Caption = styled(Typography)(({ theme }) => `
	color: #71767B;
	width: ${theme.spacing(38)};
	text-align: left;
	margin-top: ${theme.spacing(2)};

	& a {
		text-decoration: none;
		cursor: pointer;
		color: #1D9BF0
	}
`)

export const SignUpButton = styled(Button)(({ theme }) => `
	margin-top: ${theme.spacing(2)};
	padding: ${theme.spacing(0.5)};
	color: white;
	background-color: rgb(29, 155, 240);
	height: ${theme.spacing(5)};
	width: ${theme.spacing(35)};
	border-radius: ${theme.spacing(3)};
	text-transform: none;

	:hover {
		background-color: rgb(26, 140, 216);
	}
`)