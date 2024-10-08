import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/images/themes/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
