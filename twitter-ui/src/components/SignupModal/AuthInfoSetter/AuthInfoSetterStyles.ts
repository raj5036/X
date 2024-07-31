import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ReCAPTCHAContainer = styled(Box)(({ theme }) => `
	margin: ${theme.spacing(5)} auto ${theme.spacing(2)};
	display: flex;
	justify-content: center;
	align-items: center;
`)