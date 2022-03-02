import type { NextPage } from "next";
import {
  Center,
  Box,
  Text,
  VStack,
  Image as ChackraImage,
  Heading,
} from "@chakra-ui/react";

import QrCodeContainer from "../components/QrCodeContainer";

const Home: NextPage = () => {
  return (
    <>
      <QrCodeContainer />
    </>
  );
};

export default Home;
