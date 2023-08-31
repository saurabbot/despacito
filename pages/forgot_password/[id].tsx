import type { GetServerSidePropsContext } from "next";
import Navbar from "@/components/Navbar";
import prisma from "@/prisma/prisma";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";

type Props = {
  requestId: string;
  isRequestExpired: boolean;
};

const resetPasswordSchema = z.object({
  password1: z.string().min(9),
  password2: z.string().min(9),
  email: z.string().email(),
});
type FormValues = z.infer<typeof resetPasswordSchema>;
export default function Page({ requestId, isRequestExpired }: Props) {
  const router = useRouter();
  const params: { id: string; email: string } = router.query;
  const methods = useForm<FormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: params.email,
      password1: "",
      password2: "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const { isLoading, data, error, isSuccess, mutate } =
    trpc.viewer.auth.resetPassword.useMutation();
  const resetPassword: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    try {
      await mutate({
        email: data.email,
        password1: data.password1,
        password2: data.password2,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const Expired = () => (
    <div className="bg-white p-6 border border-black rounded-md">
      <h1 className=" text-4xl font-extrabold">Whoops!</h1>
      <span className=" text-lg font-bold">Your reset link has expired</span>
    </div>
  );
  const ResetPasswordForm = () => {
    return (
      <div className="bg-white p-6 border  w-1/2 border-black rounded-md">
        <span className=" text-center font-semibold text-3xl">
          Reset Password
        </span>
        <FormProvider {...methods}>
          <form className="w-full" onSubmit={handleSubmit(resetPassword)}>
            <Input
              placeholder="enter password"
              type="password"
              className="my-1"
              {...register("password1")}
            />
            <Input
              {...register("password2")}
              placeholder="renter password"
              type="password"
              className="my-1"
            />
            <Button className="w-full dark:bg-black bg-white dark:text-white text-black">
              Reset Password
            </Button>
          </form>
        </FormProvider>
      </div>
    );
  };
  return (
    <main className="dark:bg-slate-200 dark:text-black h-screen  ">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        {isRequestExpired ? <Expired /> : <ResetPasswordForm />}
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
