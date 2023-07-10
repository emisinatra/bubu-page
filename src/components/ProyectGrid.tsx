import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ProyectCard } from "./ProyectCard";
import { ProyectCardInfo } from "@/utils/ProyectCardInfo";

export const ProyectGrid = () => {
  return (
    <Center margin={["2rem", "3.5rem", "5rem", "7rem", "10rem"]}>
      <SimpleGrid
        columns={[1, 1, 1, 2, 2, 2]}
        gap={["2rem", "3rem", "3rem", "2rem", "4rem", "5rem"]}
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
