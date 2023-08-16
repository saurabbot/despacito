/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {};

const login = (props: Props) => {
  const [dimension, setDimension] = useState("down");
  useEffect(() => {
    const interval = setInterval(() => {
      setDimension((prevDimension) =>
        prevDimension === "down" ? "up" : "down"
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="flex dark:bg-white dark:text-black">
      <div
        className={`w-1/2 duration-500 flex flex-col justify-between h-screen ${
          dimension === "down" ? "bg-white" : "bg-black"
        } `}
      >
        <div
          className={` border h-1/6 duration-700  transform ${
            dimension === "down" ? "skew-y-12 bg-black" : "-skew-y-12 bg-white"
          }`}
        >
          s
        </div>
        <div
          className={` border h-1/6 duration-700  transform ${
            dimension === "down" ? "-skew-y-12 bg-black" : "skew-y-12 bg-white"
          }`}
        >
          s
        </div>

        <div
          className={`border h-1/6 duration-700  transform ${
            dimension === "down" ? "skew-y-12 bg-black" : "-skew-y-12 bg-white"
          }`}
        >
          s
        </div>
        <div
          className={`bg-black border h-1/6 duration-700  transform ${
            dimension === "down" ? "-skew-y-12 bg-black" : "skew-y-12 bg-white"
          }`}
        >
          s
        </div>
        <div
          className={`bg-black border h-1/6 duration-700  transform ${
            dimension === "down" ? " bg-black" : " bg-white"
          }`}
        >
          s
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="flex flex-col w-1/2 items-center  rounded-md p-3 ">
          <span className="font-bold  m-2 text-5xl animate-fade-in-up ">
            Ophelia
          </span>
          <span className="font-bold">Welcome Back!</span>
          <div className="w-full flex flex-col items-end m-3">
            <Input placeholder="Enter Email" name="email" className="animate-fade-in-up" />
            <span className=" font-normal text-sm m-1 ">Reset Password</span>
            <Input
              placeholder="Enter Password"
              className="animate-fade-in-up"
              type="password"
            />
            <Button
              className="dark:bg-black  animate-fade-in-up  bg-white text-black w-full dark:text-white my-2"
              variant={"outline"}
            >
              Submit
            </Button>
            <span className=" font-normal text-sm">
              Dont have an account?<Button variant={"link"}>Signup</Button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default login;
