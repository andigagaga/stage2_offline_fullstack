import { IThreadPost } from "../../../types/threadTypes";
import { API } from "../../../libs/Api";
import { ChangeEvent, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { formThreads } from "../../../types/formThread";


export function useThreads() {
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
		user: "3",
	});

	const { data: getThreads, refetch } = useQuery<IThreadPost[]>({
		queryKey: ["getThreads"],
		queryFn: async () => await API.get("/threads").then((res) => res.data.data),
	});

	const handlePost = useMutation({
		mutationFn: async () => await API.post("/thread", form),
        onError:(error)=>{
            alert(error)
        },
		onSuccess: () => refetch(),
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	return { form, getThreads, handleChange, handlePost };
}