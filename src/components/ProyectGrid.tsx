import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ProyectCard } from "./ProyectCard";
import { ProyectCardInfo } from "@/utils/ProyectCardInfo";

export const ProyectGrid = () => {
  return (
    <Center margin={["2vw", "4vw", "6vw", "8vw", "10vw"]}>
      <SimpleGrid
        columns={[1, 1, 1, 2, 2, 2]}
        gap={["4vh", "3vh", "3vw", "4vw", "4vw", "5vw"]}
      >
        {ProyectCardInfo.map((item, key) => {
          return (
            <GridItem key={key}>
              <ProyectCard
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
                imagePath={item.imagePath}
                redirectUrl={item.redirectUrl}
              />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
