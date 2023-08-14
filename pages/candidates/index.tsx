/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  return (
    <main className="flex dark:bg-white dark:text-black  flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="font-bold text-6xl p-8 my-2 animate-fade-in-up">
          Your Dream Job Only A Click Away
        </div>
        <div className="p-1  flex justify-center items-center">
          <span
            onClick={() => router.push("/candidates/register")}
            className="dark:bg-black bg-white text-black cursor-pointer  p-3 dark:text-white rounded-full mx-3  "
          >
            Get Started
          </span>
        </div>
        <div className="font-bold text-2xl p-3 my-2 animate-fade-in-up">
          Work remotely from anywhere
        </div>
        <div className="font-bold text-5xl p-1">
          How to a job with Ophelia ?{" "}
        </div>
        <span className=" text-slate-500 font-semibold">
          We will find you good job but first you need to
        </span>
      </div>
    </main>
  );
};

export default index;
