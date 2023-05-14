/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
const BUCKET_NAME = "icon-ai-ev";

{/* <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
{icons.data?.map((icon: Icon) => (
  <li key={icon.id}>
    <Image
      className="w-full rounded-lg"
      width="100"
      height="100"
      alt={icon.prompt ?? "an image of an icon"}
      src={`https://${BUCKET_NAME}.s3.eu-central-1.amazonaws.com/${icon.id}`}
    />
  </li>
))}
</ul> */}

const CollectionPage: NextPage = () => {
  const icons = api.icons.getCommunityIcons.useQuery();

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community Icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full flex justify-center items-center">
    <div className="max-w-[1200px] flex flex-col  justify-center items-center w-full px-[16px]">
    <h2 className="font-medium w-full text-center md:text-left text-4xl text-bg-dark dark:text-bg-light pt-6">
    Our Community Icons
    </h2>
    <div className="mt-6 w-full flex gap-4 md:gap-6 items-start flex-row md:justify-start justify-center flex-wrap ">
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