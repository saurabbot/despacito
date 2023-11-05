import React, { ChangeEvent } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import axios from "axios";
import AWS from "aws-sdk";
type Props = {
  onFileUpdate: (resumeUrl: string) => void;
};
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: "AKIA4AAOZTNFG5OOVZ5S",
    secretAccessKey: "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",
  },
  signatureVersion: "v4",
});
const FileUploader = (props: Props) => {
  const onFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const fileType = encodeURIComponent(file.type);
    const { data } = await axios.get(`/api/upload?fileType=${fileType}`);
    const { url, key } = data;
    const params = {
      Bucket: "ophelia-bucket",
      Key: key,
      Body: file,
      ContentType: file.type,
    };

    try {
      await s3.upload(params).promise();
      const signedUrl = s3.getSignedUrl("getObject", {
        Bucket: "ophelia-bucket",
        Key: key,
        Expires: 3600,
      });
      console.log("Uploaded successfully. Pre-signed URL:", signedUrl);
      props.onFileUpdate(signedUrl);
    } catch (error) {
      console.error("Error uploading file to S3:", error);
    }
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
