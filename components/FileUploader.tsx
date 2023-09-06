import React from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
type Props = {};

const FileUploader = (props: Props) => {
  return (
    <div className="p-1 text-center">
      <Label>Upload your resume</Label>
      <Input
        type="file"
        placeholder="Choose a file"
        className="bg-black w-1/2 focus:border justify-center focus-visible:bg-slate-400 focus:border-red-50 text-white rounded-lg"
      />
    </div>
  );
};

export default FileUploader;
