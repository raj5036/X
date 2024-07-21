import { Divider } from "@mui/material";
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
	})
}