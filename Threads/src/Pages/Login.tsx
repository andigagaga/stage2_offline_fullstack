import FormLoginU from "../Feathurs/Threads/Auth/FormLogin";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import React from "react";

export default function LoginU() {
	const navigate = useNavigate();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"white"}>
			<FormLoginU />
			<Box display={"flex"} gap={2}>
				<Text>Don't have an account yet?</Text>
				<Text
					color={"green"}
					cursor={"pointer"}
					onClick={() => navigate("/auth/register")}>
					Create account
				</Text>
			</Box>
		</Box>
	);
}