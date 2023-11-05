import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { OrgState } from "@/utils/types";
type Props = {
  onExperienceChange: (exps: OrgState[]) => void;
};

const OrganisationTracker = (props: Props) => {
  const [orgs, setOrgs] = useState<OrgState[]>([]);
  const [newOrg, setnewOrg] = useState<OrgState>({ name: "", years: 0 });
  useEffect(() => {
    props.onExperienceChange(orgs);
  }, [orgs]);
  return (
    <div className="p-3 rounded-md border-[0.5px] border-slate-400">
      <span className=" bg-black text-white p-[4px] rounded-xl m-2 text-xs">
        Enter with respect to heirarchy
      </span>
      {orgs.map((org: OrgState) => (
        <div>{org.name}</div>
      ))}

      <div className="flex m-1 justify-between">
        <div className="w-3/4 m-1">
          <Input
            type="text"
            name="organisation_name"
            placeholder="organisation name"
            value={newOrg.name}
            onChange={(e) => {
              setnewOrg({ ...newOrg, name: e.target.value });
            }}
          />
        </div>
        <div className="m-1">
          <Input
            type="number"
            name="organisation_years"
            placeholder="years in the org"
            value={newOrg.years}
            onChange={(e) => {
              setnewOrg({ ...newOrg, years: parseInt(e.target.value) });
            }}
          />
        </div>
      </div>
      <Button
        className="m-1"
        onClick={() => {
          setOrgs((prevOrgs) => [...prevOrgs, newOrg]);
          setnewOrg({ name: "", years: 0 });
        }}
      >
        Add Organisation Experience
      </Button>
    </div>
  );
};

export default OrganisationTracker;
