import React from "react";
import Navbar from "@/components/Navbar";
import EasyForm from "@/components/candidates/EasyForm";
import Carousel from "@/components/ui/carousel";
type Props = {};

const register = (props: Props) => {
  return (
    <main className="flex dark:bg-white dark:text-black  flex-col items-center">
      <Navbar />
      <div className="w-1/2 m-2 top-14 left-1 min-h-screen  fixed flex flex-col justify-between bg-black text-white font-bold text-5xl p-3 rounded-xl">
        <div>Fill the form in 5 minutes and get hired within a few days</div>
        <Carousel variant="default" childrenLength={6}>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            We are we pecuiliar about the candidate and his culture fitnes in
            the organisation
          </div>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            We make sure that your transfer from the current organisation to the
            next one is an extremely hastle-free process
          </div>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            You can get hired for the company in the remotest of places on this
            earth
          </div>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            We are we pecuiliar about the candidate and his culture fitnes in
            the organisation
          </div>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            We make sure that your transfer from the current organisation to the
            next one is an extremely hastle-free process
          </div>
          <div className=" p-2 rounded-lg bg-white text-black text-base ">
            You can get hired for the company in the remotest of places on this
            earth
          </div>
        </Carousel>
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
