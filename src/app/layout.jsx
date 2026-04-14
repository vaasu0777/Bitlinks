import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionWrapper from "@/components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitLinks - Your Ultimate URL Shortener",
  description:
    "BitLinks is a powerful and user-friendly URL shortening service that allows you to create short, memorable links for your long URLs. With BitLinks, you can easily share your links on social media, in emails, or anywhere else without worrying about character limits or unsightly URLs. Our service also provides analytics to track the performance of your links, making it easier than ever to understand your audience and optimize your content. Whether you're a marketer, blogger, or just someone who wants to share links more efficiently, BitLinks has got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="shortcut icon" href="Icon.png" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col bg-linear-to-br from-[#b92b27] via-[#203A43] to-[#1565C0] text-white">
        <SessionWrapper children={children}>
          <ToastContainer />
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
