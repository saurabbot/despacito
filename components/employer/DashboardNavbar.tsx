import React, { FC } from "react";
import { useSession } from "next-auth/react";
interface Props {}

const DashboardNavbar: FC<Props> = (props: Props) => {
  const { data: sessionData } = useSession();
  console.log(sessionData, "sessionData");
  return (
    <div className="m-2 flex justify-between">
      <div className="flex justify-between items-center">
        <span>
          {sessionData?.user?.name ? (
            <img
              src={sessionData?.user?.image}
              alt="user_profile"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className=" w-10 h-10 flex justify-center  items-center text-2xl bg-purple-500 p-2 rounded-full">
              {sessionData?.user?.username[0].toUpperCase()}
            </div>
          )}
        </span>
        <span className=" mx-3 font-bold text-4xl animate-fade-in-up">
          Dashboard
        </span>
      </div>
      <img
        src="https://img.icons8.com/?size=160&id=nJRLlq8KqcX5&format=png"
        className="w-10  h-10 cursor-pointer "
      />
    </div>
  );
};
DashboardNavbar.propTypes = {};
export default DashboardNavbar;
