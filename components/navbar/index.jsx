/* eslint-disable react/jsx-key */
import { Drawer } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { Logo, Menu, Phone } from "../../assets";
import { Button } from "../Button";

const NavbarLink = [
  {
    name: "about",
    link: "/",
  },
  {
    name: "Eduction",
    link: "/",
  },
  {
    name: "resources",
    link: "/",
  },
  {
    name: "hope",
    link: "/",
  },
  {
    name: "get involved",
    link: "/",
  },
  {
    name: "call us: 346-703-0051",
    link: "/",
    icon: Phone,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="py-6 flex items-center">
        <div className="w-1/4 ">
          <Image src={Logo} alt="logo" className="w-16 h-auto" />
        </div>
        <div className="w-3/4 flex justify-end xxs:hidden lg:block">
          <ul className="flex flex-row gap-9 items-center m-0">
            {NavbarLink.map((item, index) => {
              return (
                <a
                  href={item.link}
                  className="flex items-center font-bold	text-black text-[13px] hover:text-black whitespace-nowrap uppercase"
                >
                  <div className="flex items-center">
                    {item?.icon ? (
                      <Image
                        src={item?.icon}
                        alt="logo"
                        className="w-4 h-auto mr-1"
                      />
                    ) : null}
                  </div>
                  <li>
                    <p className="text-black hover:text-black  m-0">
                      {item.name}
                    </p>
                  </li>
                </a>
              );
            })}
            <Button ButtonText="Donate" />
          </ul>
        </div>
        <div className="lg:hidden w-3/4 flex justify-end">
          <button type="primary" onClick={showDrawer} className="">
            <Image src={Menu} alt="menu" className="w-10 h-auto" />
          </button>
          <Drawer
            title={<Image src={Logo} alt="logo" className="w-12 h-auto" />}
            placement="right"
            onClose={onClose}
            open={open}
          >
            <ul className="flex flex-col gap-9 items-start m-0">
              {NavbarLink.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    className="flex items-center font-bold	text-black text-[13px] hover:text-black whitespace-nowrap uppercase"
                  >
                    <div className="flex items-center">
                      {item?.icon ? (
                        <Image
                          src={item?.icon}
                          alt="logo"
                          className="w-4 h-auto mr-1"
                        />
                      ) : null}
                    </div>
                    <li>
                      <p className="text-black hover:text-black  m-0">
                        {item.name}
                      </p>
                    </li>
                  </a>
                );
              })}
              <Button ButtonText="Donate" />
            </ul>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
