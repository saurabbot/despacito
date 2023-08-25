import type { GetServerSidePropsContext } from "next";
import Navbar from "@/components/Navbar";
import prisma from "@/prisma/prisma";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

type Props = {
  requestId: string;
  isRequestExpired: boolean;
};

export default function Page({ requestId, isRequestExpired }: Props) {
  const Expired = () => (
    <div className="bg-white p-6 border border-black rounded-md">
      <h1 className=" text-4xl font-extrabold">Whoops!</h1>
      <span className=" text-lg font-bold">Your reset link has expired</span>
    </div>
  );
  const ResetPasswordForm = () => {
    return (
      <div className="bg-white p-6 border border-black rounded-md">
        <Input placeholder="enter password" />
        <Input placeholder="renter password" />
        <Button>Reset Password</Button>
      </div>
    );
  };
  return (
    <main className="dark:bg-slate-200 dark:text-black h-screen  ">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        {isRequestExpired ? <Expired /> : <div></div>}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id as string;
  const currentTime = dayjs().toDate();

  let passwordResetRequest = await prisma.resetPasswordRequest.findFirst({
    where: {
      id,
      expiry: {
        gt: currentTime,
      },
    },
    select: {
      email: true,
    },
  });
  try {
    passwordResetRequest &&
      (await prisma.user.findFirstOrThrow({
        where: { email: passwordResetRequest.email },
      }));
  } catch (err) {
    passwordResetRequest = null;
  }
  return {
    props: {
      requestId: id,
      isRequestExpired: !passwordResetRequest,
    },
  };
}
