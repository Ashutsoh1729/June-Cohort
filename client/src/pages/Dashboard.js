import React from "react";
import { FaSearch } from "react-icons/fa";
import AnalyticsCard from "../components/Analytics";
import Message from "../components/Message";
import Firstcard from "../components/Firstcard";
const Dashboard = () => {
  return (
    <div className="w-full h-[100vh] bg-[#F5F8FA]">
      <div className="flex justify-between items-center p-4 shadow-md  bg-white border rounded-2xl m-3">
        <h1
          className="text-2xl font-semibold leading-9 "
          style={{ color: "#657494" }}
        >
          Home
        </h1>
        <div className="flex items-center bg-[#F5F8FA] border border-gray-300 rounded-2xl px-4 py-2 ml-4 w-[560px] ">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search appointments, patients etc."
            className="outline-none bg-transparent flex-1"
          />
        </div>
      </div>
      <div className="mx-3 p-4">
        <h2
          className="text-5xl font-semibold leading-[150%]"
          style={{ color: "#303746" }}
        >
          Overview
        </h2>
        <p className="text-slate-500 text-lg font-semibold leading-[150%] opacity-70">
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
      <div className="mx-5 grid grid-cols-[361fr_492fr_639fr] h-[430px] gap-6">
        <Firstcard/>
        <Message/>
        <AnalyticsCard/>
      </div>
    </div>
  );
};

export default Dashboard;
