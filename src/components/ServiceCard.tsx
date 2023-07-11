import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
  Heading,
  Stack,
  StackDivider,
  Icon,
  Center,
} from "@chakra-ui/react";
interface Props {
  title: string;
  subtitle: string;
  body: string;
}

export const ServiceCard: React.FC<Props> = ({ title, subtitle, body }) => {
  return (
    <Center id="services">
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
      >
        <CardHeader
          display={"flex"}
          gap={["1.5rem", "1.65rem", "1.75rem", "1.85rem", "2rem"]}
          padding={"0"}
        >
          <Center>
            <Icon
              boxSize={["1.5rem", "2rem", "3rem", "4rem", "5rem"]}
              viewBox="	0 0 75 75"
            >
              <path
                d="M12.2261 73.1348L61.3167 24.0442L61.3167 56.3458C61.3129 57.2623 61.4907 58.1704 61.8396 59.0179C62.1886 59.8653 62.702 60.6353 63.35 61.2833C63.9981 61.9314 64.768 62.4447 65.6155 62.7937C66.4629 63.1427 67.3711 63.3204 68.2875 63.3167C70.1216 63.3112 71.879 62.5802 73.1759 61.2833C74.4728 59.9864 75.2038 58.229 75.2093 56.3949L75.1602 14.2261C75.1712 10.5495 73.7235 7.01866 71.1348 4.40798C68.5282 1.84919 65.0184 0.420557 61.3658 0.431644L19.197 0.382549C18.2848 0.385772 17.3821 0.568633 16.5406 0.920696C15.6991 1.27276 14.9351 1.78713 14.2924 2.43443C13.6496 3.08174 13.1407 3.84931 12.7946 4.69331C12.4484 5.53731 12.272 6.44121 12.2752 7.35341C12.2784 8.26561 12.4613 9.16825 12.8133 10.0098C13.1654 10.8513 13.6798 11.6153 14.3271 12.258C14.9744 12.9008 15.7419 13.4097 16.5859 13.7558C17.4299 14.1019 18.3338 14.2784 19.246 14.2752L51.4986 14.2261L2.40798 63.3167C1.10602 64.6186 0.374584 66.3845 0.374584 68.2257C0.374584 70.067 1.10602 71.8328 2.40799 73.1348C3.70995 74.4367 5.47578 75.1682 7.31704 75.1682C9.15829 75.1682 10.9241 74.4367 12.2261 73.1348Z"
                fill="white"
              />
            </Icon>
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
