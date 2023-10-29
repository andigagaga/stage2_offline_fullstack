import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";
import { useRegister } from "../Components/Hooks/useRegiter";

export default function FormRegister() {
	const { handleChange, handleRegister,form } = useRegister();

	return (
		<Box backgroundColor={"gray.800"}>
			<FormControl
				isRequired
				display={"flex"}
				flexDirection={"column"}
				gap={3}
				width={"350px"}
				bg={"transparent"}
				color={"white"}
				border={"1px solid white"}
				borderRadius={10}
				padding={5}
			>
				<Text color={"brand.green"} fontSize={"2xl"} fontWeight={"bold"}>
					Connect
				</Text>
				<Text fontSize={"2xl"} fontWeight={"bold"}>
					Create Account Connect
				</Text>
				<Input
					placeholder="First name"
					name="fullName"
					onChange={handleChange}
					
				/>
				<Input placeholder="Username" name="userName" onChange={handleChange} value={form.userName}/>
				<Input placeholder="Email" name="email" onChange={handleChange}/>
				<Input
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
				/>
				<Button
					backgroundColor={"green"}
					colorScheme="green"
					color={"white"}
					onClick={handleRegister}
				>
					Create
				</Button>
			</FormControl>
		</Box>
	);
}
