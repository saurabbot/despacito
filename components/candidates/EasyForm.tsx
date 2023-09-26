import React from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import TechNexP from "./TechNexP";
import FileUploader from "../FileUploader";
import OrganisationTracker from "./OrganisationTracker";
type Props = {};
const InputWrapper = (props: JSX.IntrinsicElements["div"]) => (
  <div className="m-5">{props.children}</div>
);
const EasyForm = (props: Props) => {
  return (
    <div>
      <div className="m-1 border border-black rounded-md">
        <InputWrapper>
          <Label htmlFor="full_name" className="m-1">
            Full Name
          </Label>
          <Input name="name" placeholder="Enter name" id="full_name" />
        </InputWrapper>
        <InputWrapper>
          <Label className="m-1">Email Address</Label>
          <Input name="name" placeholder="Enter email" />
        </InputWrapper>
        <InputWrapper>
          <Label className="m-1">Phone Number</Label>
          <Input name="name" placeholder="Enter phone" />
          <span className=" text-xs p-3">
            We wont be bugging you with phone calls, trust us.
          </span>
        </InputWrapper>
      </div>
      <div className="m-1 border border-black rounded-md">
        <InputWrapper>
          <FileUploader />
        </InputWrapper>
        <InputWrapper>
          <TechNexP />
        </InputWrapper>
        <InputWrapper>
          <OrganisationTracker />
        </InputWrapper>
      </div>


    </div>
  );
};

export default EasyForm;
