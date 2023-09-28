import React, { ChangeEvent } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
type Props = {};

const FileUploader = (props: Props) => {
  const onFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const form = new FormData();
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    form.append('file', files[0]);
  };
  return (
    <div className="text-center">
      <Label>Upload your resume</Label>
      <Input
        type="file"
        placeholder="Choose a file"
        onChange={onFileUpload}
        className="bg-black w-1/2 focus:border justify-center focus-visible:bg-slate-400 focus:border-red-50 text-white rounded-lg"
      />
    </div>
  );
};

export default FileUploader;
