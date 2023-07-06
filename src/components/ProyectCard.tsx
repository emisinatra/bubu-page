import { CustomArrow } from "@/icons/CustomArrow";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
  Icon,
  Center,
  Circle,
  Link,
} from "@chakra-ui/react";
interface Props {
  imagePath: string;
  title: string;
  subtitle: string;
  tags: string[];
  redirectUrl: string;
}

export const ProyectCard: React.FC<Props> = ({
  title,
  subtitle,
  tags,
  imagePath,
  redirectUrl,
}) => {
  return (
    <Center>
      <Card
        padding={["3rem", "4rem", "5rem", "6rem"]}
        display={"flex"}
        flexDirection={"column"}
        background={"rgba(22, 25, 27, 0.5)"}
        backgroundImage={imagePath}
        bgPosition="center"
        bgSize={"cover"}
        bgBlendMode={"darken"}
        borderRadius={"2rem"}
        backdropFilter={"blur(25px)"}
        textAlign={"left"}
        gap={["1rem", "1.25rem", "1.5rem", "2rem"]}
        color={"white"}
        width={["40rem", "50rem", "60rem"]}
        height={["25rem", "30rem"]}
      >
        <Link href={redirectUrl} isExternal>
          <Circle
            background={"rgba(22, 25, 27, 0.5)"}
            backdropFilter={"blur(25px)"}
            color="white"
            position={"absolute"}
            top={0}
            right={0}
            margin={["1.5rem", "2.25rem", "3rem"]}
            size={["4rem", "5rem", "6rem"]}
            cursor={"pointer"}
          >
            <CustomArrow
              boxSize={["1.25rem", "1.65rem", "2rem"]}
              viewBox="	0 0 75 75"
            />
          </Circle>
        </Link>

        <CardHeader
          display={"flex"}
          flexDirection={"column"}
          gap={["1.5rem", "1.65rem", "1.75rem", "1.85rem", "2rem"]}
          padding={"0"}
          marginRight={"3rem"}
        >
          <Heading fontSize={["2rem", "3rem", "4rem"]} fontWeight={700}>
            {title}
          </Heading>
        </CardHeader>

        <CardBody padding={"0"} display={"flex"}>
          <Stack gap={"2rem"} justifyContent={"space-between"}>
            <Text
              fontSize={["1rem", "1.2rem", "1.2rem", "1.35rem", "1.5rem"]}
              fontWeight={400}
            >
              {subtitle}
            </Text>
            <Stack direction={"row"} gap={["0.5rem", "1rem", "2rem"]}>
              {tags.map((item, key) => {
                return (
                  <Center
                    bg={"#F2F2F2"}
                    color={"#0F3043"}
                    fontFamily={"Montserrat"}
                    fontWeight={"medium"}
                    padding={"0.5rem 1rem"}
                    borderRadius={"2rem"}
                    width={["6rem", "8rem", "10rem"]}
                    key={key}
                  >
                    <Text fontSize={["0.8rem", "1.2rem", "1.5rem"]}>
                      {item}
                    </Text>
                  </Center>
                );
              })}
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
