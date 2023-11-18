import React, { FC } from "react";
import DashboardNavbar from "@/components/employer/DashboardNavbar";
import Menubar from "@/components/employer/Menubar";
interface Props {}

const index: FC<Props> = (props: Props) => {
  return (
    <main className="dark:bg-black p-4 dark:text-white bg-white">
      <DashboardNavbar />
      <div className="flex  h-screen items-center justify-between">
        <Menubar />
      </div>
    </main>
  );
};

export default index;
