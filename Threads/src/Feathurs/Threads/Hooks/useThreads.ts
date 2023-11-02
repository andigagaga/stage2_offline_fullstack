import { IThreadPost } from "../../../types/threadTypes";
import { API } from "../../../libs/Api";
import { ChangeEvent, useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { formThreads } from "../../../types/formThread";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useThreads() {
	const [threads, setThreads] = useState<IThreadPost[]>();
	const [form, setForm] = useState<formThreads>({
		content: "",
		image: "",
	});

	async function getThreads() {
		const response = await API.get("/threads");
		console.log("ini threads", response.data.data);
		setThreads(response.data.data);
	}

	const QueryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: () => {
			const formData = new FormData();
			formData.append("content", form.content);
			formData.append("image", form.image);
			return API.post("/thread", formData);
		},

		onSuccess() {
			QueryClient.invalidateQueries({ queryKey: ["thread"] });
			setForm({
				content: "",
				image: "",
			});
		},
	});

	useEffect(() => {
		getThreads();
	}, []);

	useEffect(() => {
		setThreads(threads);
	}, [threads]);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { name, value, files } = event.target;

		if (files) {
			setForm({
				...form,
				[name]: files[0],
			});
		} else {
			setForm({
				...form,
				[name]: value,
			});
		}
	}

	const fileInputRef = useRef<HTMLInputElement>(null);
	return {
		form,
		threads,
		handleChange,
		fileInputRef,
		mutate,
		isPending,
	};
}