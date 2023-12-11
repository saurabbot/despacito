import React, { FC } from "react";
import Menubar from "@/components/employer/Menubar";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TechNexP from "@/components/candidates/TechNexP";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
const JobsLedger: FC<{}> = () => {
  return (
    <main className="p-4 dark:bg-white dark:text-black">
      <span className=" mx-3 font-bold text-4xl animate-fade-in-up">
        Jobs Ledger
      </span>
      <div className="flex justify-between h-screen items-center invert p-2  dark:text-white">
        <Menubar />
        <div className=" border-gray-500 border rounded-md w-3/4 h-1/2 p-8   ">
          <div className=" flex justify-between">
            <div className=" w-1/4 ">
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select Employment type" />
                </SelectTrigger>
                <SelectContent className="  text-black">
                  <SelectGroup>
                    <SelectLabel>Employment</SelectLabel>
                    <SelectItem value="full_time">
                      Full Time Employment
                    </SelectItem>
                    <SelectItem value="contract">
                      Contractual Employment
                    </SelectItem>
                    <SelectItem value="part_time">
                      Part Time Employment
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className=" w-3/4">
              <div>
                <Label>Job Title</Label>
                <Input
                  placeholder="Enter Job Title"
                  className="dark:text-black dark:bg-white"
                />
              </div>
              <div>
                <Label>Job Description</Label>
                <Textarea className="" />
              </div>
              <div className="m-5">
                <TechNexP
                  onSkillsChange={() => {
                    console.log("skills changed");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant={"outline"}> Post Job</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobsLedger;
