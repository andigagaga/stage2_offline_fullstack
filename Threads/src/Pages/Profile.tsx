import { Box, Image, Text, Button } from "@chakra-ui/react";
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
            <Image
              src={
                "https://id.images.search.yahoo.com/images/view;_ylt=Awrx.wz0b0RlYS4FnHbNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2NlMDgxYmY5ZWM5MjU3MDM1YzRlMTM3YWE2YTM4NGRmBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%26type%3DE210ID91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=5797&h=3261&imgurl=my.alfred.edu%2Fzoom%2F_images%2Ffoster-lake.jpg&rurl=https%3A%2F%2Fmy.alfred.edu%2Fzoom%2Findex.cfm&size=1446.7KB&p=image&oid=ce081bf9ec9257035c4e137aa6a384df&fr2=piv-web&fr=mcafee&tt=Background+Images+%7C+My+Alfred+University&b=0&ni=21&no=1&ts=&tab=organic&sigr=B_fJkoCfeaqW&sigb=J9M6CvQ4T6JK&sigi=W7MA4M_JeZnP&sigt=nhVjUsUCVx1P&.crumb=IFeCHIB8YgZ&fr=mcafee&fr2=piv-web&type=E210ID91215G0"
              }
              alt="Profile"
              width="30px"
              height="14"
              borderRadius="50%"
              marginLeft={4}
            />
          </Box>
          <Box backgroundColor={"green"} padding={1} borderRadius={4} marginTop={2}>
            <Text fontWeight="bold" color={"white"} marginTop={2}>
              {user.fullName}
            </Text>
            <Text color="white" fontSize="sm">
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
