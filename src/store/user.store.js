import create from "zustand";

const useUserStore = create((set) => ({
	name: "",
	email: "",
	password: "",
	setCredentials: ({ name, email, password }) =>
		set(() => ({
			name,
			email,
			password,
		})),
}));

export default useUserStore;
