import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {

    const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname === link;
    }

    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions"
        }
    ]

    return (
        <Stack bg={"white"} justify={"space-between"} boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "16rem" }} h={"100vh"}>
            <Box>
                <Heading textAlign={"center"} fontSize={"20px"} pt={"56px"} as={"h1"}>@MyTradingApp</Heading>
                <Box mt={6} mx={3}>
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack borderRadius={"10px"} py={3} px={4} color={isActiveLink(nav.link) ? "#171717" : "#797E82"} _hover={{
                                bg: "#f3f3f7",
                                color: "#171717"
                            }} bg={isActiveLink(nav.link) ? "#f3f3f7" : "transparent"}>
                                <Icon as={nav.icon} />
                                <Text fontSize={"14px"} fontWeight={"medium"}>{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>

            <Box mt={6} mx={3} mb={6}>
                <Link to={"/support"}>
                    <HStack borderRadius={"10px"} py={3} px={4} _hover={{
                        bg: "#f3f3f7",
                        color: "#171717"
                    }} bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"} color={isActiveLink("/support") ? "#171717" : "#797E82"}>
                        <Icon as={BiSupport} />
                        <Text fontSize={"14px"} fontWeight={"medium"}>Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    );
};

export default SideNav;