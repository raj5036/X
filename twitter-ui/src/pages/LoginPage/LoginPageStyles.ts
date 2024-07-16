import styled from "styled-components";

export const LoginPageStyles = {
	Container: styled("div")({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	}),
	ImageContainer: styled("div")({
		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	}),
	LoginContainer: styled("div")({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
}