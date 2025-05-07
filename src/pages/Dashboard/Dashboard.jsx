import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortifolioSection from "./components/PortifolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
    return (
        <DashboardLayout title={"Dashboard"}>
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                xl: "repeat(2, 1fr)"
            }} gap={6}>
                <GridItem colSpan={{base: 1, xl: 2}}>
                    <PortifolioSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <PriceSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard tagText={"Loan"} imgUrl={"./Visual1.png"} text={"Learn more about Loans - Keep your Bitcoin, access it's value without selling it"} />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard inverted tagText={"Contact"} imgUrl={"./Visual2.png"} text={"Learn more about our real estate, mortgage, and corporate account services"} />
                </GridItem>
            </Grid>
        </DashboardLayout>
    );
};

export default Dashboard;