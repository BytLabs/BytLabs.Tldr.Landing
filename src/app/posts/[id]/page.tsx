"use client";
import { Navbar, Footer } from "@/components";
import { useEffect, useState } from "react";
import {Post, PostProps} from '../../../components/post';



export default function Page({ params }: { params: { id: string } }) {

  const { id } = params;

  const [post, setPost] = useState<PostProps>({} as PostProps);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async (id: string) => {
      try {
          const res = await fetch(`https://account.bytlabs.co/api/v1/post/${id}`);
          const data = await res.json();
          console.log(data);
          setPost(data);
          setLoading(false);
      } catch (err: any) {
          setError(err.message);
          setLoading(false);
      }
  };

  useEffect(() => {
    loadData(id);
  }, [id]);


  const Loading = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader"></div>
    </div>)

const Error = () => (
    <div className="relative min-h-screen w-full">
        <Post 
        title="404 Not Found" 
        summary="Oops! The post you're looking for isn't available. Stay updated with the latest news and articles by downloading our app."
        coverImagePath="https://play-lh.googleusercontent.com/BSkud_lo8xYZ8bFSxSYcrE3I_CipymjqWPpQR3A5CUDwJpMjQiCoXZXKpTabcsI5cvU=w3840-h2160-rw"
        />
      </div>)

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full">
        {loading ? <Loading /> : error? <Error/> : <Post {...post} />}
      </div>
      <Footer />
    </>
  );
}
