/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
type Props = {};

const index = (props: Props) => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    const isLegit = z.string().email().safeParse(email);
    if (!isLegit.success) {
      toast({
        variant: "destructive",
        title: "Enter Valid Email",
        description: "There was a problem with your request.",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      toast({
        variant: "default",
        title: "Reset link has been sent",
        description: "Please check the spam folder too,",
      });
      setLoading(false);
    } catch (reason) {
      setLoading(false);
      console.error(reason);
      toast({
        variant: "destructive",
        title: "Server Error",
        description: "Try again later.",
      });
    }
  };
  return (
    <main className="dark:bg-white dark:text-black h-screen">
      <Navbar />
      <div className="flex justify-center flex-col bg-slate-200 h-full items-center">
        <div className=" border border-black p-5 bg-white rounded-lg">
          <h1 className=" font-extrabold text-5xl">Forgot Password?</h1>
          <div className=" rounded-md p-2">
            <span>Email Address</span>
            <Input
              className=" w-full"
              placeholder="Enter email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              onClick={handleSubmit}
              className="w-full my-2 hover:bg-black dark:bg-white bg-black  dark:text-black text-white"
              variant={"outline"}
            >
              {loading ? "loading" : "Reset Password"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
