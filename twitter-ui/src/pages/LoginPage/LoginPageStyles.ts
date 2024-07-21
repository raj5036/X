import { Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";


export const LoginPageStyles = {
	Container: styled("div")(() => {
		return {
			display: 'flex',
			justifyContent: "space-around",
			alignItems: 'center',
			height: '100%',
			width: '100%',
			color: "white",
			backgroundColor: "black",
		}
	}),
	TwitterLogo: styled("img")(({ theme }) => {
		return {
			height: theme.spacing(35),
			width: theme.spacing(35),
		}
	}),
	LoginFormContainer: styled("div")(() => {
		return {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
		}
	}),
	FormDivider: styled(Divider)(({ theme }) => {
		return {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			width: theme.spacing(35),
		}
	}),
	SignUpButton: styled(Button)(({ theme }) => {
		return {
			marginTop: theme.spacing(2),
			padding: theme.spacing(0.5),
			color: "white",
			backgroundColor: "rgb(29, 155, 240)",
			height: theme.spacing(5),
			width: theme.spacing(35),
			borderRadius: theme.spacing(3),
			textTransform: "none",

			"&:hover": {
				backgroundColor: "rgb(26, 140, 216)",
			}
		}
	}),
}