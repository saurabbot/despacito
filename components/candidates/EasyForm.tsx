import React from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
type Props = {};
const InputWrapper = (props: JSX.IntrinsicElements["div"]) => (
  <div className="m-5">{props.children}</div>
);
const EasyForm = (props: Props) => {
  return (
    <div>
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
        <Label>Upload your resume</Label>
        <Input type="file" placeholder="Choose a file" className="bg-slate-500 focus:border focus-visible:bg-slate-400 focus:border-red-50 text-white rounded p-1 text-center m-4" />
      </InputWrapper>
    </div>
  );
};

export default EasyForm;
