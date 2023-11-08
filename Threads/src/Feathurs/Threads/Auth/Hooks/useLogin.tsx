import { IUserlogin } from "../../../../types/userType";
import { useState, ChangeEvent } from "react";
import { API, setAuthToken } from "../../../../libs/Api";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "../../../../Store/rootReducer";


export function useLogin() {
    const navigate = useNavigate();
    

    const [form, setForm] = useState<IUserlogin>({
		email: "",
		password: "",
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	const disPatch = useDispatch();
	async function authcheck() {
		try {
			setAuthToken(localStorage.token);
			const response = await API.get("/auth/check");
			disPatch(AUTH_CHECK(response.data));
		} catch (error) {
			console.log(error);
			disPatch(AUTH_ERROR())
			return <Navigate to={"/auth/login"} />;
			
		}
	}

	async function handleLogin() {
		try {
			const response = await API.post("/auth/login", form);
			localStorage.setItem("token", response.data.token);
			authcheck();
			navigate("/");
		} catch (error) {
			console.log(error);
			
		}
	}


	

	// }

	return { form, handleChange, handleLogin };
    
}