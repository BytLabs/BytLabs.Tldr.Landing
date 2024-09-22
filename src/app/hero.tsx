"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface PageProps {
  postId: string;
}

interface Post {
  summary: string;
  articleTitle: string;
  coverImagePath: string;
}

function Hero(params:PageProps) {
  const { postId } = params;
  const [apiData, setApiData] = useState<Post>({} as Post);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const res = await fetch(`https://account.bytlabs.co/api/v1/post/${postId}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setApiData(data);
      console.log(data);
      setLoading(false);
    } catch (err:any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchApiData();
    }
  }, [postId]);

  return (
    <div className="relative min-h-screen w-full">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : error ? (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-gray-900">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we could not find the page you are looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://bytlabs.co/contact-us"
                className="text-sm font-semibold text-gray-900"
              >
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      ) : (
        <>
          <header className="grid !min-h-[65rem] bg-gray-900 px-8">
            <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
              <div className="col-span-1">
                <img
                  className="h-32 md:h-48 lg:h-64 w-full rounded-lg object-cover object-center"
                  src={apiData?.coverImagePath}
                  alt="nature image"
                />
                <Typography variant="h3" color="white" className="mb-4">
                  {apiData?.articleTitle}
                </Typography>
                <Typography
                  variant="lead"
                  className="mb-7 !text-white md:pr-16 xl:pr-28 text-sm"
                >
                  {apiData?.summary}
                </Typography>
                <Typography className="mb-4" color="white" variant="h6">
                  For more news, please download the app.
                </Typography>
                <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
                  <a
                    className="flex justify-center items-center"
                    href="https://play.google.com/store/apps/details?id=co.bytlabs.bytsize"
                  >
                    <Button
                      size="lg"
                      color="white"
                      className="flex justify-center items-center gap-3 w-full"
                    >
                      <Image
                        width={256}
                        height={256}
                        src="/logos/logo-google.png"
                        alt="Google Play"
                        className="w-6 h-6"
                      />
                      Google Play
                    </Button>
                  </a>
                </div>
              </div>
              <Image
                width={470}
                height={576}
                src="/image/ip.png"
                alt="team work"
                className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
              />
            </div>
          </header>
          <div className="mx-8 lg:mx-10 -mt-10 rounded-xl bg-white p-5 md:p-14 shadow-md">
            <div>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                About this app
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal !text-gray-500 lg:w-5/12"
              >
                Stay informed effortlessly with TLDR News, the ultimate app for
                concise and meaningful news aggregation. We scour the web to
                bring you the latest articles and updates, condensing them into
                short, easy-to-read summaries. Whether you are on the go or just
                want the highlights, TLDR News keeps you up-to-date without the
                overwhelm.
              </Typography>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Hero;