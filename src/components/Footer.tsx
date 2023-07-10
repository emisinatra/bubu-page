import { CustomArrow } from "@/icons/CustomArrow";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Icon,
  Image,
  Center,
  Box,
  Square,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
interface Props {
  leftDescription: string;
  social: { icon: React.JSX.Element; url: string }[];
}

export const Footer: React.FC<Props> = ({ leftDescription, social }) => {
  return (
    <Stack
      padding={["2rem", "2rem", "2.5rem", "3rem", "4rem", "5rem"]}
      gap={"1.5rem"}
    >
      <Center justifyContent={"space-between"}>
        <Text
          display={{ base: "none", md: "block" }}
          color={"white"}
          fontFamily={"Montserrat"}
          fontSize={["0.75rem", "1rem", "1rem", "1rem", "1rem", "1rem"]}
        >
          {leftDescription}
        </Text>
        <Box>
          <Image src={"logo.png"} height={["2.5rem", "3.5rem"]} />
        </Box>

        <Stack direction={"row"}>
          {social.map((item, key) => {
            return (
              <Link href={item.url} key={key}>
                <Square
                  size={["3.25rem", "3.5rem", "4rem"]}
                  bg="rgba(22, 25, 27, 0.5)"
                  color="white"
                  borderRadius={["0.8rem", "0.9rem", "1rem"]}
                  key={key}
                  _hover={{
                    bg: "rgba(22, 25, 27,0.75)",
                    transition: "ease-in",
                  }}
                >
                  {item.icon}
                </Square>
              </Link>
            );
          })}
        </Stack>
      </Center>
      <Center>
        <Text
          display={{ base: "block", md: "none" }}
          color={"white"}
          fontFamily={"Montserrat"}
          fontSize={["0.75rem", "1rem", "1rem", "1rem", "1rem", "1rem"]}
        >
          {leftDescription}
        </Text>
      </Center>
    </Stack>
  );
};
