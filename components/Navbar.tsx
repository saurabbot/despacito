import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
type Props = {};

const Navbar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const route = useRouter();
  return (
    <div className=" w-full p-4 dark:text-black">
      <div className="flex justify-between text-center items-center">
        <div className="w-1/3 flex justify-between text-center items-center">
          <span className="font-bold  text-3xl animate-fade-in-up ">
            Ophelia
          </span>
          <Button variant={"ghost"} color="primary">
            For Candidates
          </Button>
          <Button variant={"ghost"}>For Employer</Button>
        </div>
        <div className="flex justify-between w-1/5">
          <Button
            variant={"ghost"}
            color="primary"
            onClick={() => {
              route.push("/login");
            }}
          >
            Login
          </Button>
          <Button variant={"ghost"}>Sign up</Button>

          <img
            src="https://img.icons8.com/?size=512&id=26031&format=png"
            className={`w-9 h-9 dark:bg-white p-1 rounded-full invert`}
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
