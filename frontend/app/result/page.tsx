"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage() {
  const [greeting, setGreeting] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const greetingParam = searchParams.get("greeting");
    if (greetingParam) {
      setGreeting(decodeURIComponent(greetingParam));
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ff7f50] to-[#ffa07a] p-6">
      <h1 className="text-white text-2xl font-mono tracking-wider mb-8">
        Result
      </h1>
      {greeting ? (
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-[#ff7f50] text-xl">{greeting}</p>
        </div>
      ) : (
        <p className="text-white">Loading result...</p>
      )}
      <button
        onClick={() => router.push("/")}
        className="mt-8 bg-white text-[#ff7f50] font-bold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Back to Home
      </button>
    </main>
  );
}
