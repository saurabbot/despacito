import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useIsIntersecting } from "@/lib/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isVisible = useRef(null);
  const isCardVisible = useIsIntersecting(isVisible);
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
        <span className="dark:bg-black cursor-pointer  p-3 dark:text-white rounded-md mx-3  ">
          Get Started
        </span>
        <span className="dark:bg-slate-300 cursor-pointer  p-3 dark:text-black rounded-md mx-3  ">
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
        <div className="grid grid-cols-2 gap-5 w-2/3 p-5">
          <Card
            className={`hover:-translate-y-3  ${
              isCardVisible ? "animate-fade-in-up-slow" : ""
            } `}
            ref={isVisible}
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
            className={`hover:-translate-y-3  ${
              isCardVisible ? "animate-fade-in-up-slow" : ""
            } `}
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
            className={`hover:-translate-y-3 ${
              isCardVisible ? "animate-fade-in-up-slow" : ""
            } `}
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
      </div>
    </main>
  );
}
