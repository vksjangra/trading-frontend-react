import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack spacing={"80px"}>
        <SupportCard leftComponent={<ContactCard />} icon={IoMdMail} title="Contact Us" text={"Have a question or just want to know more? Feel free to reach out to us."} />
        <SupportCard leftComponent={
          <InfoCard inverted tagText={"Contact"} imgUrl={"./Visual2.png"} text={"Learn more about our real estate, mortgage, and corporate account services"} />
        } icon={AiTwotoneMessage} title="Live Chat" text={"Don't have time to wait for the answer? Chat with us now."} />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;