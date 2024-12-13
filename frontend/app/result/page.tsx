"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ResultPage() {
  const [id, setId] = useState<string | null>(null);
  const [isFavored, setIsFavored] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFavoriteClick = () => {
    setIsFavored(!isFavored);
  };

  useEffect(() => {
    const greetingParam = searchParams.get("greeting");
    if (greetingParam) {
      setId(decodeURIComponent(greetingParam));
    }
  }, [searchParams]);

  const deer_list = {
    deer_01: "DEEEEER",
    deer_02: "しかし",
    deer_03: "しかちゃん",
    deer_04: "シカゴ",
    deer_05: "鹿たろう",
    deer_06: "バンビ",
    deer_07: "しカール",
    deer_08: "シカシカ",
    deer_09: "シカト",
    deer_10: "しかりん",
    deer_11: "シカ",
    deer_12: "シカ様",
    deer_13: "鹿男",
    deer_14: "シカップル",
    deer_15: "しかめっ面",
    deer_16: "エゾシカ",
    deer_17: "シカくん",
    deer_18: "しかせんせい",
    deer_19: "シカイダー",
    deer_20: "Deerly",
    deer_21: "シカシティ",
    deer_22: "Shikamaru",
    deer_23: "Deerling",
  };

  return (
    // <main className="flex flex-col items-center justify-center bg-custom-image p-6 font-sans">
    <main className="flex flex-col bg-custom-image p-6 font-sans">
      <h2 className="text-white text-xl font-mono tracking-wider mb-4">
        この鹿は...
      </h2>
      <div className="flex items-center justify-between w-full">
        {id ? (
          <p className="text-5xl sm:text-7xl text-white font-mono font-black">
            {deer_list[id]}
          </p>
        ) : (
          <p className="text-white">Loading result...</p>
        )}
        <button
          onClick={handleFavoriteClick}
          className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors ${
            isFavored ? "bg-white text-[#ff7f50]" : "bg-white text-[#ff7f50]"
          }`}
          aria-label="Favorite"
        >
          {isFavored ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-8">
        <div className="bg-white p-2 rounded-lg">
          <Image
            src={"../img/" + id + ".jpg"}
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
