import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

export const alexBrush = localFont({
  src: "./fonts/AlexBrush-Regular.ttf",
  variable: "--font-alex-brush",
  weight: "600",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="my-8 grid grid-cols-1 md:grid-cols-2 h-[60vh] md:h-[70vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 gap-4">
          <h1
            className={`${alexBrush.className} text-4xl md:text-6xl text-purple-900 leading-tight`}
          >
            The best URL shortener in the market
          </h1>
          <p className={`w-text text-lg md:text-xl text-gray-700 font-medium`}>
            We provide a simple and efficient way to shorten your URLs.
          </p>

          <div className="mt-4 flex gap-4">
            <Link href="/shorten">
              <button
                className={`${alexBrush.className} cursor-pointer bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 text-4xl rounded-lg font-bold transition-all shadow-lg`}
              >
                Try Now
              </button>
            </Link>
            <Link
              href="/learn-more"
              className={`${alexBrush.className} cursor-pointer border-2 border-purple-600 text-purple-600 px-6 py-3 text-4xl rounded-lg font-bold hover:bg-purple-600 hover:text-purple-50 ease-in-out transition-all`}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative w-full h-full">
          <Image
            src="/vector.jpg"
            alt="Vector illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mix-blend-darken object-contain p-8"
            priority
          />
        </div>
      </section>
    </main>
  );
}
