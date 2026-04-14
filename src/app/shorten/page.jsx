"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { alexBrush } from "../page";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  useEffect(() => {
    if (session) {
      toast.info(
        "Welcome to BitLinks! Start by entering your long URL and preferred short URL to generate your custom short link.",
        {
          ...toastOptions,
          toastId: "welcome-toast",
        },
      );

      toast(`Welcome to Bitlinks ${session?.user?.name} !!`, {
        ...toastOptions,
        toastId: "welcome-user-toast",
      });
    }
  }, []);

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState("");

  async function generate() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (longUrl === "" || shortUrl === "") {
      toast.error("Please fill in both fields.", toastOptions);
      return;
    } else {
      await fetch("/api/generate", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          userId: session?.user?.email,
          url: longUrl,
          shorturl: shortUrl,
        }),
        redirect: "follow",
      })
        .then(() => {
          toast.success("Short URL generated successfully!", toastOptions);
          setShortUrl("");
          setLongUrl("");
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        })
        .catch((error) =>
          toast.error("Something went wrong :", error, toastOptions),
        );
    }
  }

  return (
    <div className="w-text min-h-screen flex flex-col items-center justify-center gap-8 bg-linear-to-br from-[#283048] to-[#859398] text-white p-8">
      <div className="bg-linear-to-br from-[#3A1C71] via-[#D76D77] to-[#FFAF7B] p-20 rounded-md z-20 shadow-2xl">
        <h1 className={`${alexBrush.className} text-5xl`}>
          Generate your short URLs
        </h1>
        <div>
          <input
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            type="text"
            placeholder="Enter your long URL"
            className="my-4 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            type="text"
            placeholder="Enter your preferred short URL"
            className="my-4 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={generate}
            className={`w-text mt-4 cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-bold transition-all`}
          >
            Shorten URL
          </button>
        </div>
        {generated && (
          <div className="mt-4">
            <code className="rounded-md my-6">
              <h2 className={`${alexBrush.className} text-3xl mb-4`}>
                Your Short URL:
              </h2>
              <Link target="_blank" href={generated} className="my-4">
                <p className="text-xl w-text">{generated}</p>
              </Link>
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
