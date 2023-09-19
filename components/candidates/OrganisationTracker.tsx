import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
type Props = {};

const OrganisationTracker = (props: Props) => {
  const [orgCounts, setOrgCounts] = useState<number>(0);
  return (
    <div className="p-3 rounded-md border-[0.5px] border-slate-400">
      <span className=" bg-black text-white p-[4px] rounded-xl m-2 text-xs">
        Enter with respect to heirarchy
      </span>
      {Array(orgCounts)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="flex m-1 justify-between">
            <div className="w-3/4 m-1">
              <Input type="text" placeholder="organisation name" />
            </div>
            <div className="m-1">
              <Input type="number" placeholder="years in the org" />
            </div>
            <Button onClick={() => setOrgCounts(orgCounts - 1)}>Delete</Button>
          </div>
        ))}
      <Button
        className="m-1"
        onClick={() => {
          setOrgCounts((prevCount) => prevCount + 1);
        }}
      >
        Add Organisation Experience
      </Button>
    </div>
  );
};

export default OrganisationTracker;
