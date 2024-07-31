import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldContainer = styled(Stack)(({ theme }) => `
	& .MuiInputBase-input {
		color: white;
	}

	& .username-input {
		margin-top: ${theme.spacing(2.5)};
		margin-bottom: ${theme.spacing(3)};
	}

	& .password-input {
		margin-bottom: ${theme.spacing(1.5)};
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