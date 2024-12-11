
import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { IoMdHome, IoIosNotifications, IoIosPerson } from "react-icons/io";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaHashtag, FaBookmark } from "react-icons/fa";
import { MdMessage } from "react-icons/md";


interface TwiterSidebarButton {
    title: string;
    icon: React.ReactNode;
}

const sidebarMenuItems: TwiterSidebarButton[] = [
    {
        title: "Home",
        icon: <IoMdHome />
    }, {
        title: "Explore",
        icon: < FaHashtag />
    }, {
        title: "Notification",
        icon: <IoIosNotifications />
    }
    , {
        title: "Messages",
        icon: <MdMessage />
    }, {
        title: "Bookmarks",
        icon: < FaBookmark />
    }, {
        title: "Profile",
        icon: <IoIosPerson />
    }, {
        title: "More",
        icon: < HiOutlineDotsCircleHorizontal />
    }
]

const Sidebar = () => {
    return (
        <div>
            <div className="text-4xl h-fit w-fit  hover:bg-gray-500 rounded-full p-4 cursor-pointer transition-all" >
                <BsTwitter />
            </div>
            <div className="mt-4 text-lg font-bold pr-4">
                <ul>
                    {sidebarMenuItems.map(item =>
                        <li
                            className="flex justify-start items-center gap-2 hover:bg-gray-500 rounded-full px-5 py-2 w-fit mt-1"
                            key={item.title}>
                            <span>{item.icon}</span><span>{item.title}</span>
                        </li>)}
                </ul>
                <button className="bg-[#1d9bf0] p-2 text-sm rounded-full w-full mt-5">Tweet</button>
            </div>


        </div>
    )
}

export default Sidebar;
