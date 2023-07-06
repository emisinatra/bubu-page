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
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  title: string;
  subtitle: string;
  body: string;
}

export const ServiceCard: React.FC<Props> = ({ title, subtitle, body }) => {
  return (
    <Center>
      <Card
        padding={["2rem", "3rem", "4rem"]}
        display={"flex"}
        flexDirection={"column"}
        background={"rgba(22, 25, 27, 0.5)"}
        borderRadius={"2rem"}
        backdropFilter={"blur(25px)"}
        textAlign={"left"}
        gap={["0.5rem", "1rem", "1.5rem", "2rem"]}
        width={["90vw", "85vw", "80vw"]}
        color={"white"}
        cursor={"grab"}
      >
        <CardHeader
          display={"flex"}
          gap={["1.5rem", "1.65rem", "1.75rem", "1.85rem", "2rem"]}
          padding={"0"}
        >
          <Center>
            <CustomArrow boxSize={["1.5rem", "2rem", "3rem", "4rem", "5rem"]} />
          </Center>

          <Heading
            fontSize={["1.5rem", "1.75rem", "2rem", "3rem", "4rem"]}
            fontWeight={700}
          >
            {title}
          </Heading>
        </CardHeader>

        <CardBody padding={"0"}>
          <Stack
            divider={
              <StackDivider borderWidth={"0.2rem"} borderColor="#ffffff81" />
            }
            spacing={["3", "4"]}
          >
            <Heading
              fontSize={["1.25rem", "1.5rem", "1.75rem", "2rem"]}
              fontFamily={"Lora"}
              fontWeight={600}
            >
              {subtitle}
            </Heading>
            <Text fontSize={["1rem", "1.25rem", "1.5rem"]}>{body}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
