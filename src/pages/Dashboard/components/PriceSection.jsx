import { Button, Card, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard";
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const PriceSection = () => {

    const timestapms = ["7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM"];

    return (
        <CustomCard>
            <Flex justify={"space-between"} align={"start"}>
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>Wallet Balance</Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <HStack spacing={12}>
                        <HStack>
                            <Text textStyle={"h2"} fontWeight={"medium"}>22.39401000</Text>
                            <HStack color={"green"} fontWeight={"medium"}>
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize={"sm"}>22%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
                    <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
                </HStack>
            </Flex>

            <Tabs variant='soft-rounded'>
                <Flex justify={"end"}>
                    <TabList bg={"black.5"} p={"3px"}>
                        {
                            ["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab _selected={{ bg: "white" }} key={tab} p={"6px"} borderRadius={4}>{tab}</Tab>
                            ))
                        }
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image src="./Graph.png" width={"100%"} mt={"4rem"} />
                        <HStack justify={"space-between"}>
                            {
                                timestapms.map((timestamp) => (
                                    <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                                        {timestamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <Image src="./Graph.png" width={"100%"} mt={"4rem"} />
                        <HStack justify={"space-between"}>
                            {
                                timestapms.map((timestamp) => (
                                    <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                                        {timestamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <Image src="./Graph.png" width={"100%"} mt={"4rem"} />
                        <HStack justify={"space-between"}>
                            {
                                timestapms.map((timestamp) => (
                                    <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                                        {timestamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <Image src="./Graph.png" width={"100%"} mt={"4rem"} />
                        <HStack justify={"space-between"}>
                            {
                                timestapms.map((timestamp) => (
                                    <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                                        {timestamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </CustomCard>
    );
};

export default PriceSection;