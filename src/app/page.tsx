"use client";
import { Navbar, Footer } from "@/components";

import {Post} from "../components/post"

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full">
        <Post 
        title="TLDR: News Simplified" 
        summary="Stay informed effortlessly with TLDR News, the ultimate app for concise and meaningful news aggregation."
        coverImagePath="https://play-lh.googleusercontent.com/BSkud_lo8xYZ8bFSxSYcrE3I_CipymjqWPpQR3A5CUDwJpMjQiCoXZXKpTabcsI5cvU=w3840-h2160-rw"
        />
      </div>
      <Footer />
    </>
  );
}
