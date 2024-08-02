export const PAGE_TITLES = {
	LOGIN: {
		DEFAULT: "X. It's what's happening / X",
		SIGNUP_FLOW: "Sign up for X / X",
	}
}

export const USER_SIGNUP_MODES = {
	PHONE: "phone",
	EMAIL: "email",
}

export const LOCALSTORAGE_KEYS = {
	USER_TOKEN: "user_token",
}

export type UserSignUpMode = typeof USER_SIGNUP_MODES[keyof typeof USER_SIGNUP_MODES]