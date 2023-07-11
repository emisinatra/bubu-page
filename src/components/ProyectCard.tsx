import { CustomArrow } from "@/icons/CustomArrow";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
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
        padding={["3rem", "4rem", "4rem", "2.5rem", "2.5rem", "3.5rem"]}
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
        color={"white"}
        width={["80vw", "75svw", "60vw", "50vw", "40vw", "35vw"]}
        height={["45vh", "45vh", "45vh", "35vh", "32.5vh", "30vh"]}
      >
        <Link href={redirectUrl} isExternal>
          <Circle
            background={"rgba(22, 25, 27, 0.5)"}
            backdropFilter={"blur(25px)"}
            color="white"
            position={"absolute"}
            top={0}
            right={0}
            margin={["3vh", "3vh", "3vh", "2.5vh", "2.5vh", "2.5vh"]}
            size={["4rem", "5rem", "5rem", "4rem", "4.25rem", "4.5rem"]}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "rgba(22, 25, 27,0.75)",
              color: "white",
              transition: "ease-in-out",
              transitionDuration: "0.1s",
            }}
          >
            <CustomArrow
              boxSize={[
                "1.25rem",
                "1.65rem",
                "2rem",
                "1.65rem",
                "2rem",
                "2rem",
              ]}
              viewBox="	0 0 75 75"
            />
          </Circle>
        </Link>

        <CardHeader
          display={"flex"}
          flexDirection={"column"}
          gap={["1.5rem", "1.65rem", "1.75rem", "1.85rem", "2rem"]}
          padding={"0"}
          marginRight={["2.5rem", "3rem", "2rem", "3.5rem", "3rem"]}
        >
          <Heading fontSize={"1.5rem"} fontWeight={700}>
            {title}
          </Heading>
        </CardHeader>

        <CardBody padding={"0"} display={"flex"} paddingTop={"2vh"}>
          <Stack justifyContent={"space-between"}>
            <Text fontSize={"1rem"} fontWeight={400}>
              {subtitle}
            </Text>
            <Stack
              direction={"row"}
              gap={[
                "0.5rem",
                "1rem",
                "1.25rem",
                "0.5rem",
                "1.25rem",
                "1.25rem",
              ]}
            >
              {tags.map((item, key) => {
                return (
                  <Center
                    bg={"#F2F2F2"}
                    color={"#0F3043"}
                    fontFamily={"Montserrat"}
                    fontWeight={"medium"}
                    padding={"0.5rem 1rem"}
                    borderRadius={"2rem"}
                    key={key}
                    _hover={{
                      backgroundColor: "rgba(22, 25, 27, 0.5)",
                      color: "white",
                      transition: "ease-in-out",
                      transitionDuration: "0.1s",
                    }}
                  >
                    <Text fontSize={"0.8rem"}>{item}</Text>
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
