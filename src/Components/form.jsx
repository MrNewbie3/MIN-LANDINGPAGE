import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DataAlamat from "./Data_Alamat";
import DataBerkas from "./Data_Berkas";
import DataOrtu from "./Data_OrangTua";
import DataPrestasi from "./Data_Prestasi";
import DataUmum from "./Data_Umum";

const FormRegis = () => {
  return (
    <div className="wrapper mt-6">
      <Tabs>
        <TabList className={"flex flex-row flex-wrap justify-center gap-x-2 font-semibold p-2 bg-grey w-fit rounded-xl lg:rounded-full "}>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              {" "}
              <p>Data Umum</p>
            </button>
          </Tab>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              <p>Data Berkas</p>
            </button>
          </Tab>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              {" "}
              <p>Data Orang Tua</p>
            </button>
          </Tab>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              <p>Data Alamat</p>
            </button>
          </Tab>
          <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
            <button className="flex flex-row items-center gap-x-2">
              <p>Data Prestasi</p>
            </button>
          </Tab>
        </TabList>
        <TabPanel>
          <DataUmum />
        </TabPanel>
        <TabPanel>
          <DataBerkas />
        </TabPanel>
        <TabPanel>
          <DataOrtu />
        </TabPanel>
        <TabPanel>
          <DataAlamat />
        </TabPanel>
        <TabPanel>
          <DataPrestasi />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FormRegis;
