import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("links");
  const url = (await params).url;
  const link = await collection.findOne({ shorturl: url });

  if (link) {
    redirect(link.url);
  } else {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 relative overflow-hidden px-6 py-16 font-mono">

          {/* Grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(var(--tw-ring-color,#e5e7eb)_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px] opacity-50 dark:bg-[linear-gradient(#27272a_1px,transparent_1px),linear-gradient(90deg,#27272a_1px,transparent_1px)]" />

          {/* Badge */}
          <span className="relative z-10 text-[11px] tracking-widest uppercase text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-1 mb-8">
            bitlinks · error
          </span>

          {/* 404 */}
          <h1 className="relative z-10 font-serif text-[120px] font-black leading-none tracking-tighter text-zinc-900 dark:text-white mb-2 select-none">
            404
          </h1>

          {/* Broken chain visual */}
          <div className="relative z-10 flex items-center my-6 gap-0">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-7 h-4.5 border-[2.5px] border-zinc-400 rounded-full -ml-1.5 first:ml-0" />
            ))}
            <div className="w-4" />
            {[0, 1].map(i => (
              <div key={i} className="w-7 h-4.5 border-[2.5px] border-red-500 rounded-full -ml-1.5 rotate-25 translate-y-1.5 opacity-80" />
            ))}
          </div>

          {/* Headline */}
          <h2 className="relative z-10 font-serif text-2xl font-bold text-zinc-900 dark:text-white mb-2 text-center">
            Link not found
          </h2>
          <p className="relative z-10 text-sm text-zinc-500 text-center leading-relaxed max-w-sm mb-8">
            This short link doesn't exist or may have been removed.<br />
            Double-check the URL and try again.
          </p>

          {/* Struck-out URL */}
          <div className="relative z-10 flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-red-500 mb-8">
            <span className="line-through opacity-80">/{url}</span>
          </div>

          {/* Actions */}
          <div className="relative z-10 flex gap-3 flex-wrap justify-center">
            <a href="/" className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm px-6 py-2.5 rounded-lg font-medium hover:opacity-75 transition-opacity">
              ← go home
            </a>
          </div>

        </div>
    );
  }
}
