"use client";

import React, { Fragment, ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { PiNewspaperClippingBold, PiStudentBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineAutoStories,
  MdOutlinePeopleOutline,
  MdSettings,
} from "react-icons/md";
import StyledButton from "../common/StyledButton";
import { IoIosArrowDropdownCircle, IoMdBook } from "react-icons/io";
import Link from "next/link";
import classNames from "classnames";
import { RiAppsLine, RiPagesLine } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { IoAnalyticsSharp } from "react-icons/io5";
import Logout from "@/app/admin/Logout";

function AdminNavigation() {
  const pathname = usePathname();

  interface Items {
    title: string;
    url: string;
    icon: ReactNode;
    subNav: any;
  }
  const NAV_ITEMS = [
    {
      title: "Dashboard",
      url: "/home",
      icon: <RiAppsLine />,
    },
    {
      title: "Pages",
      url: "/pages",
      icon: <RiPagesLine />,
    },
    {
      title: "Students",
      url: "/students",
      icon: <PiStudentBold />,
    },
    {
      title: "Employees",
      icon: <MdOutlinePeopleOutline />,
      subNav: [
        {
          title: "Teachers",
          url: "/teachers",
          icon: <PiNewspaperClippingBold />,
        },
        {
          title: "Drivers",
          url: "/drivers",
          icon: <MdOutlineAutoStories />,
        },
        {
          title: "Staff",
          url: "/staff",
          icon: <MdOutlineAutoStories />,
        },
      ],
    },
    {
      title: "Academic",
      icon: <IoMdBook />,
      subNav: [
        {
          title: "Exams",
          url: "/exams",
          icon: <PiNewspaperClippingBold />,
        },
        {
          title: "Attendance",
          url: "/attendance",
          icon: <MdOutlineAutoStories />,
        },
        {
          title: "Grades",
          url: "/grades",
          icon: <MdOutlineAutoStories />,
        },
        {
          title: "Schedule",
          url: "/schedule",
          icon: <MdOutlineAutoStories />,
        },
      ],
    },
    {
      title: "Finance",
      url: "/finance",
      icon: <LuWallet />,
    },
    {
      title: "Report",
      url: "/report",
      icon: <IoAnalyticsSharp />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <MdSettings />,
    },
  ];
  const [drop, setDrop] = useState<any>();
  return (
    <div className="flex flex-1 bg-darkblue">
      <div className="hidden md:flex md:w-72 md:flex-col">
        <div className="flex flex-col flex-grow overflow-y-auto  md:w-72 fixed h-screen">
          <div className="flex items-center justify-center flex-shrink-0 py-6 ">
            <h1 className="text-white text-xl font-bold">Admin</h1>
          </div>

          {/* <div className="px-10 mt-6">
            <hr className="border-violet-600/90" />
          </div> */}

          <div className="flex flex-col flex-1 px-7 mt-20">
            <div className="space-y-1">
              {NAV_ITEMS.map((item: any, index: number) => (
                <Fragment key={index}>
                  <Link
                    onClick={() =>
                      setDrop(drop === index + 1 ? null : index + 1)
                    }
                    href={`/admin/${item.url}`}
                    className={classNames({
                      "flex  rounded-lg items-center px-4 py-3 justify-between group":
                        true,
                      "text-sm font-medium transition-all duration-300 cursor-pointer":
                        true,
                      "text-white  bg-primaryblue": pathname.includes(item.url),
                      " text-white hover:bg-zinc-500/10": item.url !== pathname,
                    })}
                  >
                    <div className="flex items-center">
                      <div className="text-xl flex-shrink-0 w-5 h-5 mr-4">
                        {item.icon}
                      </div>
                      <StyledButton text={item.title} type="bold" />
                    </div>

                    {item?.subNav && (
                      <>
                        <IoIosArrowDropdownCircle
                          className={`text-xl text-white ${
                            drop === index + 1 ? "rotate-180" : ""
                          } duration-300`}
                        />
                      </>
                    )}
                  </Link>
                  {item?.subNav && (
                    <ul
                      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        drop === index + 1 ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item?.subNav.map((subItem: any, subIndex: any) => (
                        <Link
                          href={subItem.url ?? ""}
                          key={subIndex}
                          className="cursor-pointer p-2 px-7 text-white gap-2 flex items-center rounded-xl  hover:bg-zinc-200/10 duration-200 "
                        >
                          <span className="text-lg ">
                            <MdKeyboardDoubleArrowRight />
                          </span>
                          {subItem.title}
                        </Link>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default AdminNavigation;
