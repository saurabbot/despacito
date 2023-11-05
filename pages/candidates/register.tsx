import React from "react";
import Navbar from "@/components/Navbar";
import EasyForm from "@/components/candidates/EasyForm";
type Props = {};

const register = (props: Props) => {
  return (
    <main className="flex dark:bg-white dark:text-black  flex-col items-center">
      <Navbar />
      <div className="w-1/2 m-2 top-14 left-1 h-screen   fixed flex flex-col justify-between bg-black text-white font-bold text-5xl p-3 rounded-xl">
        <div>Fill the form in 5 minutes and get hired within a few days</div>
      </div>
      <div className="flex justify-end w-full">
        <div className="w-1/2 p-9">
          <EasyForm />
        </div>
      </div>
    </main>
  );
};

export default register;
