import {
  Center,
  Box,
  Text,
  VStack,
  Image as ChackraImage,
  Heading,
} from "@chakra-ui/react";

export const QrCodeContainer = () => {
  return (
    <Center h="100vh" bg="#d5e1ef">
      <VStack bg="white" p={22} borderRadius="20px" spacing="0">
        <Box>
          <ChackraImage
            borderRadius={10}
            objectFit="contain"
            height={325}
            width={325}
            src="/images/image-qr-code.png"
            alt="QR code"
          ></ChackraImage>
        </Box>
        <Box w={325} p={10}>
          <Heading color="#222d42" textAlign="center" fontSize={25}>
            Improve you front-end skills by building projects
          </Heading>
          <Text color="#919097" textAlign="center" fontSize={18}>
            Scan the QR code to visit Frontend Mentor and take you coding skills
            to the next level
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default QrCodeContainer;
