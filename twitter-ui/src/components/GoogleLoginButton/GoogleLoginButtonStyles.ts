import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const GoogleLoginStyles = {
	Box: styled(Box)(({ theme }) => {
		return {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: theme.spacing(1),
			padding: theme.spacing(0.5),
			color: "black",
			backgroundColor: "white",
			height: theme.spacing(5),
			width: theme.spacing(30),
			borderRadius: theme.spacing(3),

			'& img': {
				height: "25px",
				width: "25px",
			},
		};
	}),
}