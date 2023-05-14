/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { type Icon } from "@prisma/client";
import { NextPageContext, type NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import UserProfile from "~/components/UserProfile";
import { api } from "~/utils/api";
const BUCKET_NAME = "icon-ai-ev";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/callback/google',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();
  const {data: session} = useSession();
  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section className="w-full flex justify-center items-center">
    <div className="max-w-[1200px] flex flex-col  justify-center items-center w-full px-[16px]">
    <UserProfile 
    email={session?.user?.email}
    name={session?.user?.name}
    image={session?.user?.image}
    />
    <h2 className="font-medium w-full text-center md:text-left text-4xl text-bg-dark dark:text-bg-light pt-6">
    Your Icons
    </h2>
    <div className="mt-6 w-full flex gap-4 md:gap-6 items-start flex-row md:justify-start justify-center ">
    {
      icons.data?.map((icon: Icon) => (
        <div className="relative w-40 h-40 md:w-48 md:h-48">
        <Image
        className="w-full rounded-lg"
        fill
        alt={icon.prompt ?? "an image of an icon"}
        src={`https://${BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${icon.id}`}
        />
        </div>
        ))
    }
      </div>
    </div>
    </section>
    </>
  );
};

export default CollectionPage;