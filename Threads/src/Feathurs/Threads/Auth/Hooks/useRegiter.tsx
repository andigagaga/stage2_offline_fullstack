import { useState, ChangeEvent } from "react";
import { IUserRegister } from "../../../../types/userType";
import { API } from "../../../../libs/Api";
import {useNavigate} from "react-router-dom"

export function useRegister() {
	const navigate = useNavigate();

	const [form, setForm] = useState<IUserRegister>({
		fullName: "",
		userName: "",
		email: "",
		password: "",
		
	});



	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	async function handleRegister() {
		try {
			const response = await API.post("/auth/register", form);
			navigate("/auth/login");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return { form, handleChange, handleRegister };
}