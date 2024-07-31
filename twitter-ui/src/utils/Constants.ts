export const PAGE_TITLES = {
	LOGIN: {
		DEFAULT: "X. It's what's happening / X",
		SIGNUP_FLOW: "Sign up for X / X",
	}
}

export const UserSignUpModes = {
	PHONE: "phone",
	EMAIL: "email",
}

export type UserSignUpMode = typeof UserSignUpModes[keyof typeof UserSignUpModes]