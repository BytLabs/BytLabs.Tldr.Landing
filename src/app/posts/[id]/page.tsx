import Head from 'next/head';
import { Navbar, Footer } from "@/components";
import { Post, PostProps } from '../../../components/post';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  let post: PostProps | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(`https://account.bytlabs.co/api/v1/post/${id}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error("Post not found");
    }

    post = await res.json();
  } catch (err: any) {
    error = err.message;
  }

  const Loading = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader"></div>
    </div>
  );

  const Error = () => (
    <div className="relative min-h-screen w-full">
      <Post 
        title="404 Not Found" 
        summary="Oops! The post you're looking for isn't available. Stay updated with the latest news and articles by downloading our app."
        coverImagePath="https://play-lh.googleusercontent.com/BSkud_lo8xYZ8bFSxSYcrE3I_CipymjqWPpQR3A5CUDwJpMjQiCoXZXKpTabcsI5cvU=w3840-h2160-rw"
      />
    </div>
  );

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={post ? post.title : "404 Not Found"}
        />
        <meta
          property="og:description"
          content={post ? post.summary : "Oops! The post you're looking for isn't available. Stay updated with the latest news and articles by downloading our app."}
        />
        <meta
          property="og:image"
          content={post ? post.coverImagePath : "https://play-lh.googleusercontent.com/BSkud_lo8xYZ8bFSxSYcrE3I_CipymjqWPpQR3A5CUDwJpMjQiCoXZXKpTabcsI5cvU=w3840-h2160-rw"}
        />
      </Head>

      <Navbar />
      <div className="relative min-h-screen w-full">
        {error ? <Error /> : post ? <Post {...post} /> : <Loading />}
      </div>
      <Footer />
    </>
  );
}
