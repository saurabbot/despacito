import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useIsIntersecting } from "@/lib/hooks";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const { isSuccess, data, error, isLoading, mutate, ...otherMutationProps } =
    trpc.viewer.leads.addNewsLetterSubscriber.useMutation();

  const addNewLead = async () => {
    try {
      const result = await mutate({ email: newsletterEmail });
    } catch (error) {}
  };
  const isVisible = useRef(null);
  const isCardVisible = useIsIntersecting(isVisible);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const newsLetterRef = useRef(null);
  const isStep1Visible = useIsIntersecting(step1Ref);
  const isStep2Visible = useIsIntersecting(step2Ref);
  const isStep3Visible = useIsIntersecting(step3Ref);
  const isStep4Visible = useIsIntersecting(step4Ref);
  const isNewsLetterVisible = useIsIntersecting(newsLetterRef);
  const [move, setMove] = useState<string>("left");
  const [secondStepMove, setSecondStepMove] = useState<string>("right");
  const [thirdStepMove, setThirdStepMove] = useState<string>("left");
  const [fourthStepMove, setFourthStepMove] = useState<string>("right");
  const [newsletterEmail, setNewsLetterEmail] = useState<string>("");

  useEffect(() => {
    if (isStep2Visible) {
      setMove("right");
    }
    if (isStep3Visible) {
      setSecondStepMove("left");
    }
    if (isStep4Visible) {
      setThirdStepMove("right");
    }
    if (isNewsLetterVisible) {
      setFourthStepMove("left");
    }
  }, [isStep2Visible, isStep3Visible, isStep4Visible, isNewsLetterVisible]);

  return (
    <main
      className={`flex dark:bg-white dark:text-black  flex-col items-center ${inter.className}`}
    >
      <Navbar />
      <div className=" font-semibold flex">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mx-4 "
          src="/note.png"
          alt="Next.js Logo"
          width={30}
          height={14}
          priority
        />
        Try OpheliaAI for 14 days for free
      </div>
      <div className="font-bold text-6xl p-8 my-5 animate-fade-in-up">
        Recruitment on AutoPilot with OpheliaAI
      </div>
      <span className=" text-lg animate-fade-in-up">
        Ophelia is one of the leading recruitment platforms out there
      </span>
      <div className="my-5 animate-fade-in-up font-semibold">
        <span className="dark:bg-black bg-white text-black cursor-pointer  p-3 dark:text-white rounded-md mx-3  ">
          Get Started
        </span>
        <span className="dark:bg-blue-300 bg-blue-400 cursor-pointer  p-3 dark:text-black text-black rounded-md mx-3  ">
          Try Live Demo
        </span>
      </div>
      <div>Culture fit is our topmost priority</div>
      <video
        class="elementor-video animate-fade-in-up"
        src="./ophelia_landing_fix.mp4"
        autoplay=""
        loop
        controls=""
        muted="muted"
        playsinline=""
        controlslist="nodownload"
        height={600}
        width={900}
        style={{
          borderRadius: "10px",
          margin: "10px",
        }}
      ></video>
      <div>
        <h1 className="text-6xl text-slate-400 animate-fade-in-up font-semibold a p-3">
          We are partnered with some amazing clients
        </h1>
        <div className="flex justify-between p-5">
          <img src="./google_svg.svg" className="w-16" />
          <img src="./microsoft_svg.svg" className="w-16" />
          <img src="./mcdonald_svg.svg" className="w-16" />
        </div>
      </div>
      <div className="flex flex-col items-center my-5">
        <span className="font-semibold text-xl">For Recruiters</span>
        <span className="font-bold text-6xl p-3 my-2 animate-fade-in-up">
          Scale your Team Blazingly Fast
        </span>
        <span className="font-semibold text-xl">
          Shortlist candindates within minutes and culture-fit check with 3
          clicks
        </span>
        <div className="grid grid-cols-2 gap-5 w-2/3 p-5" ref={isVisible}>
          <Card
            className={` ${isCardVisible ? "animate-fade-in-up-slow" : ""} `}
          >
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Candidate analyser
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Analyse your candidates yourself with their introduction videos
                and make sure theres a cultural fit{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                Analyse your candidates yourself with their introduction videos
                and make sure there's a cultural fit" means that you should
                evaluate potential candidates for a job position by watching
                their introduction videos. This approach allows you to directly
                assess their communication skills, personality, and demeanor.
              </p>
            </CardContent>
          </Card>
          <Card
            className={` ${isCardVisible ? "animate-fade-in-up-slow" : ""} `}
          >
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Tune your Shortlist
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Make specfic selections of candidates based on your thinking
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                Analyse your candidates yourself with their introduction videos
                and make sure there's a cultural fit" means that you should
                evaluate potential candidates for a job position by watching
                their introduction videos. This approach allows you to directly
                assess their communication skills, personality, and demeanor.
              </p>
            </CardContent>
          </Card>
          <Card
            className={` ${isCardVisible ? "animate-fade-in-up-slow" : ""} `}
          >
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Remote Talent
              </CardTitle>
              <CardDescription className="dark:text-slate-500 text-xs">
                Get your job on the global radar and find talent that fits your
                team and budget
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl">
              <p>
                Get your job on the global radar and find talent that fits your
                team and budget" means promoting and publicizing your job
                opening to attract potential candidates from all around the
                world. This approach leverages the power of the internet and
                various online platforms to reach a broader audience of
                qualified individuals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
        <span className="font-bold text-lg">Step by step guide</span>
        <span className="font-bold text-3xl m-3">How does it work?</span>
        <span className="font-normal text-3xl">
          Find a candidate succesfully in 2 minutes, Hassell Free.
        </span>
        <div className="flex flex-col w-full">
          <div
            className="flex justify-between items-center my-16"
            ref={step1Ref}
          >
            <div
              className={`w-1/2  duration-1000 ${
                isStep2Visible
                  ? move === "right"
                    ? "translate-x-full"
                    : "fixed"
                  : ""
              }`}
            >
              <img src="./step.svg" />
            </div>

            <div className=" flex flex-col p-2 ">
              <span className=" font-bold text-sm text-yellow-300">Step 1</span>
              <div className="font-normal text-xl">
                Effortlessly create a job post.
              </div>
              <span className="text-xs m-1 ">
                The job must compusorily have required experience, job location
                preferences, etc
              </span>
            </div>
          </div>
          <div
            className="flex justify-between items-center my-2"
            ref={step2Ref}
          >
            <div className=" flex flex-col p-2 mx-10">
              <span className=" font-bold text-sm text-yellow-300">Step 1</span>
              <div className="font-normal text-lg">
                Effortlessly create a job post.
              </div>
              <span className="text-xs m-1 ">
                The job must compusorily have required experience, job location
                preferences, etc
              </span>
            </div>
            <img
              src="./step.svg"
              className={`w-1/2  duration-1000 ${
                isStep3Visible
                  ? secondStepMove === "left"
                    ? "-translate-x-full"
                    : "fixed"
                  : ""
              }  `}
            />
          </div>
          <div
            className="flex justify-between items-center my-2"
            ref={step3Ref}
          >
            <img
              src="./step.svg"
              className={`w-1/2  duration-1000 ${
                isStep4Visible
                  ? thirdStepMove === "right"
                    ? "translate-x-full"
                    : "fixed"
                  : ""
              }`}
            />
            <div className=" flex flex-col p-2 mx-10">
              <span className=" font-bold text-sm text-yellow-300">Step 1</span>
              <div className="font-normal text-lg">
                Effortlessly create a job post.
              </div>
              <span className="text-xs m-1 ">
                The job must compusorily have required experience, job location
                preferences, etc
              </span>
            </div>
          </div>
          <div
            className="flex justify-between items-center my-2"
            ref={step4Ref}
          >
            <div className=" flex flex-col p-2 mx-10">
              <span className=" font-bold text-sm text-yellow-300">Step 1</span>
              <div className="font-normal text-lg">
                Effortlessly create a job post.
              </div>
              <span className="text-xs m-1 ">
                The job must compusorily have required experience, job location
                preferences, etc
              </span>
            </div>
            <img
              src="./step.svg"
              className={`w-1/2  duration-1000  ${
                isNewsLetterVisible
                  ? fourthStepMove === "left"
                    ? "-translate-x-full"
                    : "fixed"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className="dark:bg-black bg-white text-black dark:text-white w-1/2 flex flex-col items-center  m-5 p-8 rounded-xl"
        ref={newsLetterRef}
      >
        {!isSuccess ? (
          <>
            <span className="font-bold text-2xl m-4">Join our Newsletter</span>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setNewsLetterEmail(e.target.value);
                }}
              />
              <Button
                type="submit"
                onClick={addNewLead}
                loading={isLoading}
                variant={"outline"}
                className="dark:bg-white hover:bg-black bg-black  dark:text-black text-white  "
              >
                Subscribe
              </Button>
            </div>
          </>
        ) : (
          <span className="font-bold text-2xl m-4">Thanks for subscribing</span>
        )}
      </div>
      <div className=" flex justify-between w-full border border-sky-100 p-3 items-center shadow-md m-1 rounded-md">
        <div className="w-1/4 flex flex-col">
          <span className="font-bold  text-3xl animate-fade-in-up ">
            Ophelia
          </span>
          <span className="font-bold text-sm">business@ophelia.app</span>
          <p className=" font-medium text-sm">
            Ophelia is a leading recruitment platform which helps recruiters
            reduce their efforts of finding the right candidates by a long way.
          </p>
        </div>
        <div className="flex font-bold text-gray-400 flex-col items-end">
          @2023 Ophelia LLC Wilson Garden, Bangalore
        </div>
      </div>
    </main>
  );
}
