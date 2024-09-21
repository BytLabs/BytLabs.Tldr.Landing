"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function Hero() {

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const res = await fetch(
        `https://account.bytlabs.co/api/v1/post/e0595d0b-b0d2-4222-89b5-d584179eb878`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
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
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=co.bytlabs.bytsize"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
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
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            About this app
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Stay informed effortlessly with TLDR News, the ultimate app for
            concise and meaningful news aggregation. We scour the web to bring
            you the latest articles and updates, condensing them into short,
            easy-to-read summaries. Whether you're on the go or just want the
            highlights, TLDR News keeps you up-to-date without the overwhelm.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
