import React from "react";
import Sidebar from "./Sidebar";
import FeedCard from "@/components/FeedCard";


export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-44">
        <div className="col-span-3  justify-start pt-8 px-4">
          <Sidebar />
        </div>
        <div className="col-span-6 h-screen overflow-scroll border-r-[0.2px] border-l-[0.2px] border-black">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
