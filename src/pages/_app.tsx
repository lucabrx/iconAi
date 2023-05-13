import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes'

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class">
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
