"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export interface PostProps {
    summary: string;
    title: string;
    coverImagePath?: string;
    channel?:{ name: string }
    link?: string
}

export function Post(props: PostProps) {
    
    return (<>
        <header className="grid !min-h-[55rem] bg-gray-900 px-8">
          <div className="container mx-auto mt-24 grid h-full w-full grid-cols-1 place-items-start lg:mt-14 lg:grid-cols-2">
            <div className="col-span-1 lg:translate-y-16">
              <a href={props.link} target="_blank">
                <img
                  className="h-32 md:h-48 lg:h-64 w-full mb-4 rounded-lg object-cover object-center"
                  src={props?.coverImagePath}
                  alt="nature image"
                />
                <Typography variant="h5" color="white" className="mb-4">
                  {props?.title}
                </Typography>
                <Typography
                  variant="lead"
                  className="mb-4 !text-white md:pr-16 xl:pr-28 text-sm"
                >
                  {props?.summary}
                </Typography>
                {props.channel?(<Typography
                  variant="lead"
                  className="mb-7 !text-white md:pr-16 xl:pr-28 text-xs"
                >
                  Source: {props?.channel?.name}
                </Typography>):""}
              </a>
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
        <div className="mx-4 lg:mx-10 -mt-10 rounded-xl bg-white p-5 md:p-14 shadow-md">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-3">
              About this app
            </Typography>
            <Typography
              variant="paragraph"
              className="text-sm !text-gray-500 lg:w-5/12"
            >
              We scour the web to bring you the latest articles and updates, condensing them into short, easy-to-read summaries. 
              Whether you are on the go or just want the highlights, TLDR News keeps you up-to-date without the overwhelm.
            </Typography>
          </div>
        </div>
      </>)
}