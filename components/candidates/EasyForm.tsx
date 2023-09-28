import React from "react";
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import TechNexP from "./TechNexP";
import FileUploader from "../FileUploader";
import OrganisationTracker from "./OrganisationTracker";
import { Button } from "../ui/button";

type Props = {};

const BasicDetailsSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().min(10, { message: 'Must be a valid mobile number' }),
});

type BasicDetailsType = z.infer<typeof BasicDetailsSchema>;

const EasyForm = (props: Props) => {
  const methods = useForm<BasicDetailsType>({
    resolver: zodResolver(BasicDetailsSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: ''
    }
  });

  const handleEasyFormSubmit: SubmitHandler<BasicDetailsType> = async (data) => {
    console.log(data);
  }

  const { handleSubmit, register } = methods;

  return (
    <div>
      <div className="m-1 border border-black rounded-md">
        <FormProvider {...methods}>
          <form className="w-full" onSubmit={handleSubmit(handleEasyFormSubmit)}>
            <div className="m-5">
              <Label htmlFor="full_name" className="m-1">
                Full Name
              </Label>
              <Input {...register('fullName')} name="fullName" placeholder="Enter name" id="full_name" />
            </div>
            <div className="m-5">
              <Label className="m-1">Email Address</Label>
              <Input {...register('email')} name="email" placeholder="Enter email" />
            </div>
            <div className="m-5">
              <Label className="m-1">Phone Number</Label>
              <Input {...register('phone')} name="phone" placeholder="Enter phone" />
              <span className=" text-xs p-3">
                We won't be bugging you with phone calls, trust us.
              </span>
            </div>

            <div className="mt-2">
              <div className="m-5">
                <FileUploader />
              </div>
              <div className="m-5">
                <TechNexP />
              </div>
              <div className="m-5">
                <OrganisationTracker />
              </div>
            </div>
            <div className="flex justify-end m-2">
              <Button type="submit" className="dark:bg-black dark:text-white" disabled={true}>
                Create User
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>

    </div>
  );
};

export default EasyForm;
