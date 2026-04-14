import React from "react";
import { alexBrush } from "../page";

const page = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 ${alexBrush.className} bg-linear-to-br from-[#283048] to-[#859398] text-white text-4xl`}
    >
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">
          Learn More About Our URL Shortener
        </h1>
        <p className="text-gray-700 mb-4">
          Our URL shortener is designed to help you create concise and memorable
          links for your content. Whether you're sharing on social media, in
          emails, or through other channels, our service makes it easy to
          generate short URLs that are easy to share and track.
        </p>
        <p className="text-gray-700 mb-4">
          With our URL shortener, you can customize your short URLs to make them
          more relevant to your brand or content. You can also track the
          performance of your links with detailed analytics, allowing you to see
          how many clicks your links are receiving and where they are coming
          from.
        </p>
        <p className="text-gray-700 mb-4">
          Our service is fast, reliable, and secure, ensuring that your links
          won't be compromised to any hacker.
        </p>
        <br />
        <p className="text-gray-700 font-extrabold mb-4">
          Thank you for choosing our URL shortener!
        </p>
      </div>
    </div>
  );
};

export default page;
