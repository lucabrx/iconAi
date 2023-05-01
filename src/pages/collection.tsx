/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
const BUCKET_NAME = "icon-ai-ev";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your Icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1200px] mx-auto mt-24 flex w-full flex-col gap-4 px-8">
        <h1 className="text-4xl">Your Icons</h1>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
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
        </ul>
      </main>
    </>
  );
};

export default CollectionPage;