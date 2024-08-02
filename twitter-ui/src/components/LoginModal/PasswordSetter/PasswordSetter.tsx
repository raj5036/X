import React from "react";

type ComponentProps = {
	password: string,
	setPassword: React.Dispatch<React.SetStateAction<string>>
}

const PasswordSetter: React.FC<ComponentProps> = ({ password, setPassword }) => {
	return <></>
}

export default PasswordSetter