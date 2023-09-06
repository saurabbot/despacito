import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};
const Skill = (props: { name: string }) => (
  <span className="bg-black p-2 text-white font-semibold rounded-md">
    React
    <span
      className=" text-white m-2 p-1  cursor-pointer
           rounded-[50%]"
    >
      x
    </span>
  </span>
);
const TechNexP = (props: Props) => {
  const [skills, setSkills] = useState([{ name: "React" }]);
  const [newSkill, setNewSkill] = useState();
  return (
    <div className="p-3 border-[1px] border-slate-300 rounded-lg ">
      <div className="p-3 border border-black rounded-sm">
        {skills?.map((skill) => (
          <Skill key={`${skill}`} name={skill.name} />
        ))}
      </div>
      <div className="m-2 p-1 flex justify-between">
        <Input placeholder="search skill" />
        <Button className="mx-4 cursor-pointer">Add</Button>
      </div>
    </div>
  );
};

export default TechNexP;
