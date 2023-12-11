import React, { FC } from "react";
import DashboardNavbar from "@/components/employer/DashboardNavbar";
import Menubar from "@/components/employer/Menubar";
interface Props {}

const index: FC<Props> = (props: Props) => {
  return (
    <main className="dark:bg-white p-4 dark:text-black bg-black">
      <DashboardNavbar />
      <div className="flex  h-screen items-center justify-between">
        <Menubar />
      </div>
    </main>
  );
};

export default index;
