import Image from "next/image";
import {Box} from "@chakra-ui/react";
type ClientProps = {
    name: string;
    pathToLogo: string;
}

export const Client: React.FC<ClientProps> = ({name, pathToLogo}) => {
    return (
        <Box>

            <Image src={pathToLogo} alt={name} height={150} width={150} color="#FFF"/>
        </Box>
    )
}