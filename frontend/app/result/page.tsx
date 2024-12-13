"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

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
    // <main className="flex flex-col items-center justify-center bg-custom-image p-6 font-sans">
    <main className="flex flex-col bg-custom-image p-6 font-sans">
      <h2 className="text-white text-xl font-mono tracking-wider mb-4">
        この鹿は...
      </h2>
      {greeting ? (
        <p className="text-5xl sm:text-7xl text-white font-mono font-black">
          {greeting}
        </p>
      ) : (
        <p className="text-white">Loading result...</p>
      )}

      <div className="mt-8">
        <div className="bg-white p-2 rounded-lg">
          <Image
            src={"../img/deer_01.jpg"}
            alt="Selected image"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* map */}
      <h3 className="text-white text-l font-mono tracking-wider mt-8">
        よく発見されている場所↓
      </h3>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1379.3839154653408!2d135.83993095158667!3d34.686351123038285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013996bd8c6061%3A0xf96cacf357447456!2z5aWI6Imv5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1734068761819!5m2!1sja!2sjp"
        // width="400"
        // height="300"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        className="w-400 mt-4"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <button
        onClick={() => router.push("/")}
        className="mt-8 bg-white text-[#ff7f50] font-bold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
      >
        トップに戻る
      </button>
    </main>
  );
}
