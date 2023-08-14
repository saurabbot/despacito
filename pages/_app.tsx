import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { trpc } from "@/utils/trpc";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default trpc.withTRPC(App);
