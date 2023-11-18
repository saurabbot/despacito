import React, { FC } from "react";
import Menubar from "@/components/employer/Menubar";
const JobsLedger: FC<{}> = () => {
  return (
    <main className="dark:bg-white  p-4 dark:text-black bg-black">
      <span className=" mx-3 font-bold text-4xl animate-fade-in-up">
        Jobs Ledger
      </span>
      <div className="flex justify-between h-screen items-center invert p-2 ">
        <Menubar />
        <div className=" border-gray-500 border rounded-md w-3/4 h-1/2 p-3   dark:text-white">
          Choose type of job
        </div>
      </div>
    </main>
  );
};

export default JobsLedger;
