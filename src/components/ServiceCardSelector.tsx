import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCard } from "./ServiceCard";
import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ServiceCardInfo } from "@/utils/ServiceCardInfo";

export default class ServiceCardSelector extends Component {
  render() {
    return (
      <Center paddingTop={"2rem"}>
        <Tabs variant="solid-rounded" colorScheme="gray" align="center">
          <Box width={"100%"}>
            <TabList
              gap={["0.5rem", "2rem"]}
              display={"flex"}
              width={"max-content"}
              whiteSpace={"nowrap"}
            >
              {ServiceCardInfo.map((item, key) => {
                return (
                  <Tab
                    key={key}
                    textColor={"white"}
                    _hover={{
                      backgroundColor: "rgba(15, 48, 67)",
                      color: "white",
                      transition: "ease-in-out",
                      transitionDuration: "0.1s",
                    }}
                    _selected={{
                      bg: "rgba(242, 149, 105)",
                      transition: "ease-in-out",
                      transitionDuration: "0.1s",
                    }}
                    fontSize={"1rem"}
                  >
                    {item.title}
                  </Tab>
                );
              })}
            </TabList>
          </Box>

          <TabPanels>
            {ServiceCardInfo.map((item, key) => {
              return (
                <TabPanel key={key}>
                  <ServiceCard
                    key={key}
                    title={item.title}
                    subtitle={item.subtitle}
                    body={item.body}
                  />
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Center>
    );
  }
}
