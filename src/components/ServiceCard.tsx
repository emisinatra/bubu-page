import { CustomArrow } from "@/icons/CustomArrow";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Center,
} from "@chakra-ui/react";
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
        width={["85vw", "80vw", "75vw", "70vw", "65vw", "60vw"]}
        color={"white"}
      >
        <CardHeader
          display={"flex"}
          gap={["1.5rem", "1.65rem", "1.75rem", "1.85rem", "2rem"]}
          padding={"0"}
        >
          <Center>
            <CustomArrow
              boxSize={[
                "1.5rem",
                "1.8rem",
                "2.1rem",
                "2.2rem",
                "2.3rem",
                "2.5rem",
              ]}
            />
          </Center>

          <Heading
            fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem", "2rem", "2rem"]}
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
              fontSize={[
                "1.15rem",
                "1.3rem",
                "1.35rem",
                "1.4rem",
                "1.45rem",
                "1.25rem",
              ]}
              fontFamily={"Lora"}
              fontWeight={600}
            >
              {subtitle}
            </Heading>
            <Text
              fontSize={["1rem", "1.25rem", "1.3rem", "1.1rem", "1rem", "1rem"]}
            >
              {body}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
