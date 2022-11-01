import { Input, Select } from "antd";
import { Button } from "../Button";
import Navbar from "../navbar";

const { Option } = Select;
export const Banner = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="bg-bannerBackground bg-cover bg-no-repeat bg-center w-full lg:h-screen">
      <div className="h-full ">
        <div className="xxs:w-11/12 lg:w-4/5  mx-auto h-full">
          <Navbar />
          <div className="h-full flex justify-center flex-col">
            <h3 className="md:text-6xl xxs:text-3xl lg:text-white font-bold text-center">
              Find a mental help resource.
            </h3>
            <p className="md:py-4 xxs:py-2 md:text-lg xxs:text-md font-medium text-white lg:w-5/12 mx-auto text-center">
              Search below to find a therapist treatment center. support group.
              or other resources that meet your needs.
            </p>
            <div className="xxs:py-6 lg:py-0">
              <form>
                <div className="flex gap-2.5 xxs:flex-col lg:flex-row">
                  <div className="w-full border border-white">
                    <input
                      type="text"
                      placeholder="Search by City"
                      className="shadow-none py-2 px-4 focus-visible:outline-0 back bg-transparent placeholder-white"
                    />
                  </div>
                  <div className="w-full  border border-white">
                    <input
                      type="text"
                      placeholder="Search by Zip Code"
                      className="shadow-none py-2 px-4 focus-visible:outline-0 back bg-transparent placeholder-white"
                    />
                  </div>
                  <div className="w-full border border-white">
                    <Select
                      placeholder="Select Issues"
                      className="w-full h-full placeholder-white shadow-none  focus-visible:outline-0"
                      onChange={handleChange}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled">Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>
                  <div className="w-full border border-white">
                    <Select
                      placeholder="Select Age"
                      className="w-full h-full placeholder-white shadow-none  focus-visible:outline-0"
                      onChange={handleChange}
                    >
                      <Option value="jack">18 +</Option>
                      <Option value="lucy">40 +</Option>
                      <Option value="disabled">60 +</Option>
                      <Option value="Yiminghe">70 +</Option>
                    </Select>
                  </div>
                  <button className="text-white bg-[#EDB331] text-sm font-extrabold py-1.5 px-7">
                    Serach
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
