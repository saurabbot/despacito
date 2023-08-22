import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

type Props = {};

const profile = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return <div>profile</div>;
};

export default profile;
