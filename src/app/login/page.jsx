"use client";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { alexBrush } from "@/app/page";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/shorten");
    }
  }, [session, router]);

  return (
    <div className="w-text min-h-screen flex flex-col items-center justify-center gap-8 bg-linear-to-br from-[#283048] to-[#859398] text-white p-8">
      <div className="bg-linear-to-br rounded-4xl from-[#3A1C71] via-[#D76D77] to-[#FFAF7B] p-20 z-20 shadow-2xl">
        <h1 className={`${alexBrush.className} text-5xl`}>
          Login/Sign up for your account
        </h1>
        <div>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="w-text mt-4 cursor-pointer w-full text-black bg-google hover:bg-google-hover duration-1000 bg-white hover:bg-black hover:text-white py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            <FcGoogle size={24} />
            <span>Login/Sign up with Google</span>
          </button>
          <button
            onClick={() => {
              signIn("github");
            }}
            className="w-text mt-4 cursor-pointer w-full text-black bg-github hover:bg-github-hover duration-1000 hover:bg-black hover:text-white bg-white py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            <FaGithub size={24} />
            <span>Login/Sign up with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
