"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {};
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type loginValues = z.infer<typeof loginSchema>;
const login = (props: Props) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session]);
  const router = useRouter();
  const [dimension, setDimension] = useState("down");
  const methods = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, watch } = methods;
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
  const handleLogin: SubmitHandler<loginValues> = async (data) => {
    try {
      const res = await signIn("credentials", {
        callbackUrl: "/login",
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    }
  };
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
      <div className="w-1/2 flex items-center justify-center ">
        <div className="flex flex-col w-1/2 items-center  rounded-md p-3 ">
          <span className="font-bold  m-2 text-5xl animate-fade-in-up ">
            Ophelia
          </span>
          <span className="font-bold">Welcome Back!</span>
          <span
            onClick={() => {
              signOut();
            }}
          >
            logout
          </span>
          <div className="w-full flex flex-col items-end m-3">
            <FormProvider {...methods}>
              <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
                <Input
                  placeholder="Enter Email"
                  {...register("email")}
                  name="email"
                  className="animate-fade-in-up"
                />
                <Link href={"/forgot_password"}>Forgot?</Link>
                <Input
                  {...register("password")}
                  placeholder="Enter Password"
                  className="animate-fade-in-up"
                  type="password"
                />
                <Button
                  className="dark:bg-black  animate-fade-in-up  bg-white text-black w-full dark:text-white my-2"
                  variant={"outline"}
                  type="submit"
                >
                  Login
                </Button>
                <span className=" font-normal text-sm">
                  Dont have an account?<Button variant={"link"}>Signup</Button>
                </span>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default login;
