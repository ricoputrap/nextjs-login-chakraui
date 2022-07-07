import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const Home = () => {

  const { toggleColorMode } = useColorMode();
  const formBackgroundColor = useColorModeValue("gray.100", "gray.700");
  const [isLightMode, setIsLightMode] = useState(true);

  const variant = useMemo(() => isLightMode ? "outline" : "filled", [isLightMode]);

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        background={ formBackgroundColor }
        p={12}
        rounded={6}
        position="relative"
      >
        <Heading mb={6}>Log In</Heading>
        <Input 
          placeholder="your email..."
          variant={ variant }
          mb={3}
          type="email"
        />
        <Input
          placeholder="*****"
          variant={ variant }
          type="password"
          mb={6}
        />

        <Button colorScheme="teal">
          Login
        </Button>

        <Box
          position="absolute"
          top={2}
          right={2}
          cursor="pointer"
          onClick={() => {
            toggleColorMode();
            setIsLightMode(!isLightMode);
          }}
        >
          {isLightMode ? <IoSunny /> : <IoMoon />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home;