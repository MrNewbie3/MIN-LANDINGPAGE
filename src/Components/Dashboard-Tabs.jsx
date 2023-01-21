import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ErrorAlert from "./Error_Alert";
import RegisFlow from "./Regis_Flow";
import FormRegis from "./form";
function TabsBtn() {
  return (
    <div className="mt-28">
      <Tabs>
        <TabList className={"flex flex-wrap justify-center w-full flex-row gap-x-2 font-semibold p-2 bg-grey lg:w-fit rounded-full "}>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              {" "}
              <HomeRoundedIcon />
              <p>Dashboard</p>
            </button>
          </Tab>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              <PersonRoundedIcon />
              <p>Identitas Diri</p>
            </button>
          </Tab>
        </TabList>
        <TabPanel>
          <ErrorAlert />
          <RegisFlow />
        </TabPanel>
        <TabPanel>
          <FormRegis />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsBtn;
