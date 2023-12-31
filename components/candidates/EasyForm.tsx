import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import TechNexP from "./TechNexP";
import FileUploader from "../FileUploader";
import OrganisationTracker from "./OrganisationTracker";
import { Button } from "../ui/button";
import { trpc } from "@/utils/trpc";
import { OrgState, TSkill } from "@/utils/types";

type Props = {};

const BasicDetailsSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Must be a valid mobile number" }),
  resumeUrl: z.string(),
  skills: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  experience: z.array(
    z.object({
      name: z.string(),
      years: z.number(),
    })
  ),
  current_organization: z.string(),
});

type BasicDetailsType = z.infer<typeof BasicDetailsSchema>;

const EasyForm = (props: Props) => {
  const { mutate } = trpc.viewer.candidateForm.addNewCandidate.useMutation();

  const methods = useForm<BasicDetailsType>({
    resolver: zodResolver(BasicDetailsSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      resumeUrl: "",
      skills: [],
      experience: [],
      current_organization: "",
    },
  });
  const handleEasyFormSubmit: SubmitHandler<BasicDetailsType> = async (
    data
  ) => {
    console.log(data);
    const response = await mutate({
      email: data.email,
      full_name: data.fullName,
      phone: data.phone,
      skills: data.skills,
      resume_url: data.resumeUrl,
      experience: data.experience,
      current_organization: data.current_organization,
    });
    console.log(response);
  };
  const handleUploadedFile = (resumeUrl: string) => {
    console.log(resumeUrl, 'resumeUrl')
    methods.setValue("resumeUrl", resumeUrl);
  };
  const handleSkillChange = (skills: TSkill[]) => {
    methods.setValue("skills", skills);
  };
  const handlePreviousOrganisations = (exps: OrgState[]) => {
    methods.setValue("experience", exps);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = methods;
  return (
    <div>
      <div className="m-1 border border-black rounded-md">
        <FormProvider {...methods}>
          <form
            className="w-full"
            onSubmit={handleSubmit(handleEasyFormSubmit)}
          >
            <div className="m-5">
              <Label htmlFor="full_name" className="m-1">
                Full Name
              </Label>
              <Input
                {...register("fullName")}
                name="fullName"
                placeholder="Enter name"
                id="full_name"
              />
            </div>
            <div className="m-5">
              <Label htmlFor="current_organization" className="m-1">
                Current Organization
              </Label>
              <Input
                {...register("current_organization")}
                name="current_organization"
                placeholder="name of organization"
                id="current_organization"
              />
            </div>
            <div className="m-5">
              <Label className="m-1">Email Address</Label>
              <Input
                {...register("email")}
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div className="m-5">
              <Label className="m-1">Phone Number</Label>
              <Input
                {...register("phone")}
                name="phone"
                placeholder="Enter phone"
              />
              <span className=" text-xs p-3">
                We won't be bugging you with phone calls, trust us.
              </span>
            </div>

            <div className="mt-2">
              <div className="m-5">
                <FileUploader onFileUpdate={handleUploadedFile} />
              </div>
              <div className="m-5">
                <TechNexP onSkillsChange={handleSkillChange} />
              </div>
              <div className="m-5">
                <OrganisationTracker
                  onExperienceChange={handlePreviousOrganisations}
                />
              </div>
            </div>
            <div className="flex justify-end m-2">
              <Button type="submit" className="dark:bg-black dark:text-white">
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
