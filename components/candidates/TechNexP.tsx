import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { trpc } from "@/utils/trpc";
import { useDebounce } from "@/lib/hooks";
import { TSkill } from "@/utils/types";

type Props = {
  onSkillsChange: (skills: TSkill[]) => void;
};

const Skill = (props: { name: string }) => (
  <span className="bg-black animate-fade-in-up p-2 m-1 text-white font-semibold rounded-md">
    {props.name}
    <span
      className=" text-white m-2 p-1  cursor-pointer
           rounded-[50%]"
    >
      x
    </span>
  </span>
);
const TechNexP = (props: Props) => {
  const [skills, setSkills] = useState<TSkill[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [debounceValue, setDebounceValue] = useDebounce(newSkill, 500);
  const { isLoading, data, error, mutate } =
    trpc.viewer.candidateForm.getSkills.useMutation();
  useEffect(() => {
    mutate({
      queryString: newSkill,
    });
  }, [debounceValue]);
  useEffect(() => {
    props.onSkillsChange(skills);
  }, [skills]);
  console.log(JSON.stringify(skills));
  return (
    <div className="p-3 border-[1px] border-slate-300 rounded-lg ">
      <div className="p-3 border border-black rounded-sm">
        {skills?.map((skill) => (
          <Skill key={`${skill}`} name={skill.name} />
        ))}
      </div>
      <div className="m-2 p-1 flex justify-between">
        <div className="flex flex-col w-full">
          <Input
            placeholder="search skill"
            value={newSkill}
            onChange={async (e) => {
              setNewSkill(e.target.value);
            }}
          />
          <div className=" absolute w-1/4 mt-10 bg-slate-300 rounded-lg flex flex-col">
            {Array.isArray(data) &&
              data.map((skill: { name: string; id: number }) => (
                <div
                  onClick={() => {
                    setSkills((prevSkills) => [...prevSkills, skill]);
                    setNewSkill("");
                  }}
                  key={skill.id}
                  className="m-1 animate-fade-in-up text-black hover:bg-slate-100 duration-300 rounded p-1"
                >
                  {skill.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNexP;
