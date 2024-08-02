import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormContainer = styled(Box)(({ theme }) => `
	text-align: center;

	& .title {
		font-weight: 600;
		margin-bottom: ${theme.spacing(3)};
	}

	& .MuiDivider-root {
		margin-top: ${theme.spacing(2)};
		width: ${theme.spacing(35)};

		& .MuiDivider-wrapper {
			font-size: ${theme.spacing(2.6)};
		}
	}

	& .user-input {
		margin-top: ${theme.spacing(2.5)};
		width: ${theme.spacing(40)};
	}
`)