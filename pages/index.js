import { Button, Flex, Heading, Input } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        background="gray.100"
        p={12}
        rounded={6}
        position="relative"
      >
        <Heading mb={6}>Log In</Heading>
        <Input 
          placeholder="your email..."
          variant="filled"
          mb={3}
          type="email"
        />
        <Input
          placeholder="*****"
          variant="filled"
          type="password"
          mb={6}
        />

        <Button colorScheme="teal">
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home;