// import { IThreadPost } from "../../../types/threadTypes";
import { API } from "../../../libs/Api";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { IThreadCard } from "../../../types/threadTypes";
import { IThreadsPost } from "../../../types/threadTypes";
export function useThreads() {
	// const [threads, setThreads] = useState<IThreadPost[]>();
	const [form, setForm] = useState<IThreadsPost>({
		content: "",
		image: "",
	});

	const { data: getThreads, refetch } = useQuery<IThreadCard[]>({
		queryKey: ["getThread"],
		queryFn: async () => await API.get("/threads")
		.then((res) => res.data),
	})

	async function handlePost(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData();
		formData.append("content", form.content);
		if (form.image == null || "") {
			formData.append("image", "");
		} else {
			formData.append("image", form.image as File);
		}
		await API.post("/thread", formData);

			setForm({
				content: "",
				image: "",
			});
			refetch();
		}

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

	function handleButtonClick() {
		fileInputRef.current?.click();
	}

	const fileInputRef = useRef<HTMLInputElement>(null);
	return {
		form,
		handleChange,
		fileInputRef,
		getThreads,
		handlePost,
		refetch,
		handleButtonClick
	};
}
