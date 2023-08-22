import React from "react";
import Navbar from "@/components/Navbar";
import EasyForm from "@/components/candidates/EasyForm";
type Props = {};

const register = (props: Props) => {
  return (
    <main className="flex dark:bg-white dark:text-black  flex-col items-center">
      <Navbar />
      <div className="flex w-full">
        <div className="w-1/2">
          Hi, we would love to get to know more about you
        </div>
        <div className="w-1/2 p-9">
          <EasyForm />
        </div>
      </div>
    </main>
  );
};

export default register;
