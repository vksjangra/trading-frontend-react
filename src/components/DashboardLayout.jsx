import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children}) => {
    
    const {isOpen, onClose, onOpen} = useDisclosure();

    return (
        <Flex>
            <Box  display={{
                        base: "none",
                        lg: "flex"
                    }}>
                <SideNav/>
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Box flexGrow={1}>
                <TopNav onOpen={onOpen} title={title}/>
                <Container overflowX={"hidden"} overflowY={"auto"} height={"calc(100vh - 88px)"} mt={6} maxW={"70rem"}>{children}</Container>
            </Box>
        </Flex>
    );
};

export default DashboardLayout;