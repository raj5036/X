export const CommonUtils = {
	setItemInLocalstorage: (key: string, value: unknown) => {
		localStorage.setItem(key, JSON.stringify(value))
	},
	getItemFromLocalstorage: (key: string) => {
		return JSON.parse(localStorage.getItem(key) as string)
	},
	removeItemFromLocalStorage: (key: string) => {
		localStorage.removeItem(key)
	}
}