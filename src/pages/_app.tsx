import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes'

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import LoginModal from "~/components/LoginModal";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class">
    <SessionProvider session={session}>
    <div className='flex flex-col justify-between min-h-screen'> 
      <Navbar />
      <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-start">
      <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <LoginModal />
    </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
