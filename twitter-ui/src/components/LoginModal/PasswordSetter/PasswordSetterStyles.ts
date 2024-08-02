import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const PasswordSetterContainer = styled(Box)(({ theme }) => `
	text-align: center;

	& .title {
		font-weight: 600;
		margin-bottom: ${theme.spacing(3)};
	}

	& .user-input {
		width: ${theme.spacing(40)};
		
		& .MuiInputBase-root {
			color: white;
		}
	}

	& .password-input {
		margin-bottom: ${theme.spacing(1.5)};
		width: ${theme.spacing(40)};
	}
`)