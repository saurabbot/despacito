/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "@/utils/trpc";
import * as z from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Switch } from "@/components/ui/switch";

type Props = {};
const signUpSchema = z.object({
  username: z
    .string()
    .min(9)
    .refine((val) => !val.includes("+"), {
      message: "Username shouldnt include a + sign",
    }),
  email: z.string().email(),
  password: z.string().min(8),
  is_candidate: z.boolean(),
  is_employer: z.boolean(),
});
type FormValues = z.infer<typeof signUpSchema>;
const signup = (props: Props) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      is_candidate: false,
      is_employer: true,
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const { isSuccess, data, error, isLoading, mutate } =
    trpc.viewer.auth.signUpUser.useMutation();
  const signUp: SubmitHandler<FormValues> = async (data) => {
    console.log(data, "h");
    try {
      await mutate({
        username: data.username,
        email: data.email,
        password: data.password,
        is_candidate: data.is_candidate,
        is_employer: data.is_employer,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const isCandidate = watch("is_candidate");
  console.log(isSubmitSuccessful, "issubmit");
  return (
    <main className="flex dark:bg-white dark:text-black">
      <div
        className={`w-1/2 duration-500 flex flex-col justify-between h-screen`}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="flex flex-col w-1/2 items-center  rounded-md p-3 ">
          <span className="font-bold  m-2 text-5xl animate-fade-in-up ">
            Ophelia
          </span>
          <span className="font-bold">Welcome Back!</span>
          {Object.keys(errors).length > 0 ? (
            <Alert
              variant="default"
              className="border text-red-500 duration-300 border-red-600"
            >
              <AlertTitle>Error</AlertTitle>
              {Object.keys(errors)?.map((error: any) => (
                <AlertDescription key={errors[error]?.message}>
                  {error}:{errors[error]?.message}
                </AlertDescription>
              ))}
            </Alert>
          ) : null}

          <div className="w-full flex flex-col items-end m-3">
            <FormProvider {...methods}>
              <form className="w-full" onSubmit={handleSubmit(signUp)}>
                <Input
                  {...register("email")}
                  placeholder="Enter Email"
                  name="email"
                  className="animate-fade-in-up my-1"
                />
                <Input
                  {...register("username")}
                  placeholder="Enter Username"
                  name="username"
                  className="animate-fade-in-up my-1"
                />
                <Input
                  {...register("password")}
                  placeholder="Enter Password"
                  className="animate-fade-in-up my-1"
                  type="password"
                />
                <div className="flex justify-center items-center">
                  <span>I am a Candidate</span>
                  <Switch
                    // checked={true}
                    className=" bg-slate-600"
                    onCheckedChange={(val) => {
                      methods.setValue("is_candidate", val);
                      if (val) {
                        methods.setValue("is_employer", false);
                      } else {
                        methods.setValue("is_employer", true);
                      }
                    }}
                  />
                </div>

                <Button
                  className="dark:bg-black  animate-fade-in-up  bg-white text-black w-full dark:text-white my-2"
                  variant={"outline"}
                  type="submit"
                  loading={isLoading}
                >
                  Create Account{" "}
                  {isCandidate ? "as a Candidate" : "as an Employer"}
                </Button>
              </form>
            </FormProvider>
            <span className=" font-normal text-sm">
              Already have an Account?<Button variant={"link"}>Login</Button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default signup;
