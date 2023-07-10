import Image from "next/image";
import { Center } from "@chakra-ui/react";
type ClientProps = {
  name: string;
  pathToLogo: string;
};

export const Client = ({ name, pathToLogo }: ClientProps) => {
  return (
    <Center height={150}>
      <Image
        src={pathToLogo}
        alt={name}
        height={200}
        width={200}
        color="#FFF"
      />
    </Center>
  );
};
