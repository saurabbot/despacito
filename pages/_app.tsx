import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { trpc } from "@/utils/trpc";
import type { Session } from "next-auth";
import { Toaster } from "@/components/ui/toaster";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
};
export default trpc.withTRPC(App);
