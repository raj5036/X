import { Dialog, DialogTitle } from "@mui/material"
import React from "react"

type ComponentProps = {
	open: boolean,
	onClose: () => void
}

const SignupModal: React.FC<ComponentProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Setup your account</DialogTitle>
		</Dialog>
	)
}

export default SignupModal