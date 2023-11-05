/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <div className=" grid grid-cols-3 gap-3 p-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Fill the job form
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Take approximately not more than 5 minutes by easily filling up
                the job form and put yourself on the global market
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                The form details will be completly private and will be shared
                only with companies interested in your profile. We do not sell
                any of your data
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Make sure your profile is complete
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Completion of the profile is very important for us to find you
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                The form details will be completly private and will be shared
                only with companies interested in your profile. We do not sell
                any of your data
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Wait Patiently for the right job
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                We will find you the right job based on your skills
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                Good things take time. We will find you the right job based on
                your skills and experienceP
              </p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className=" grid grid-cols-3 gap-3 p-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Fill the job form
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Take approximately not more than 5 minutes by easily filling up
                the job form and put yourself on the global market
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                The form details will be completly private and will be shared
                only with companies interested in your profile. We do not sell
                any of your data
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Make sure your profile is complete
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Completion of the profile is very important for us to find you
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                The form details will be completly private and will be shared
                only with companies interested in your profile. We do not sell
                any of your data
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Wait Patiently for the right job
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                We will find you the right job based on your skills
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                Good things take time. We will find you the right job based on
                your skills and experienceP
              </p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="flex justify-between">
          <span>We make sure you find the right job based on your skills</span>
          <div>Famous colleges dont work here</div>
        </div>
      </div>
    </main>
  );
};

export default index;
