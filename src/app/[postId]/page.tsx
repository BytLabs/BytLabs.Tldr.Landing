"use client";
import { Navbar, Footer } from "@/components";


import Hero from "../hero";
interface PageProps {
  params: {
    postId: string;
  };
}

export default function Campaign({ params }: PageProps) {

  const { postId } = params;
  return (
    <>
      <Navbar />
      <Hero postId={postId}/>
      <Footer />
    </>
  );
}
