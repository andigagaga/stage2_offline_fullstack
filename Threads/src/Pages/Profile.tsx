import { Box,  Text, Button } from "@chakra-ui/react";
import Footer from "../Feathurs/Threads/Components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Type/rootState";

function MyProfile() {
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <Box marginLeft={36}>
      <Box
        display="flex"
        alignItems="center"
        width={72}
        height={40}
        flexDirection={"column"}
        marginTop={8}
        padding={8}
      >
        <Text
          marginBottom={8}
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          fontSize={50}
          color="white"
        >
          PROFILE
        </Text>
        <Box padding={2} borderRadius={4} width={72} height={72}>
          <Box
            bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
            paddingTop={6}
            rounded={4}
          >
             <img
              src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?w=360&t=st=1698054382~exp=1698054982~hmac=4f5dda55004e0af0fb6f27a532d0a2749014e4a566512e41471a16f7bc8647c9"
              alt="Follows"
              width="50"
              height="50"
              style={{ borderRadius: "50%", marginRight: "10px", marginLeft: "25px" }}
            />
          </Box>
          <Box backgroundColor={"green"} padding={1} borderRadius={4} marginTop={2}>
            <Text fontWeight="extrabold" color={"white"} marginTop={2}>
              {user.fullName}
            </Text>
            <Text color="grey">
              {user.email}
            </Text>
            <Text color={"white"}>{user.userName}</Text>
          </Box>

          <Box>
            <Button
              backgroundColor={"green"}
              width={36}
              height={8}
              marginTop={8}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        <Box
          marginTop={8}
          color={"white"}
          fontWeight={"bold"}
          padding={4}
          marginBottom={8}
          width={72}
          height={72}
        >
          <Text>Suggested For You</Text>
          <Box padding={4} display={"flex"}>
            <img
              src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?w=360&t=st=1698054382~exp=1698054982~hmac=4f5dda55004e0af0fb6f27a532d0a2749014e4a566512e41471a16f7bc8647c9"
              alt="Follows"
              width="20"
              height="10"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <Text>Guswandi</Text>
            <Button width={20} height={5} marginLeft={4}>
              Follows
            </Button>
          </Box>
          <Box padding={4} display={"flex"}>
            <img
              src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?w=360&t=st=1698054382~exp=1698054982~hmac=4f5dda55004e0af0fb6f27a532d0a2749014e4a566512e41471a16f7bc8647c9"
              alt="Follows"
              width="20"
              height="10"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <Text>Guswandi</Text>
            <Button width={20} height={5} marginLeft={4}>
              Follows
            </Button>
          </Box>
          <Box padding={4} display={"flex"} marginBottom={2}>
            <img
              src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?w=360&t=st=1698054382~exp=1698054982~hmac=4f5dda55004e0af0fb6f27a532d0a2749014e4a566512e41471a16f7bc8647c9"
              alt="Follows"
              width="20"
              height="10"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <Text>Guswandi</Text>
            <Button width={20} height={5} marginLeft={4}>
              Follows
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default MyProfile;
