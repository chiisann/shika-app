"use client";

import { useState } from "react";
import { Upload, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SAMPLE_IMAGES = [
  "../img/deer_01.jpg",
  "../img/deer_02.jpg",
  "../img/deer_06.jpg",
  "../img/deer_10.jpg",
];

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const router = useRouter();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSampleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setSelectedFile(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) return;

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    } else if (selectedImage) {
      formData.append("file", selectedImage);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/result?greeting=${encodeURIComponent(data.label)}`);
      } else {
        console.error("Failed to process image");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data.label);
  };

  return (
    <main className="flex flex-col bg-custom-image p-6 font-sans">
      <h1 className="text-white text-2xl font-mono tracking-wider mb-8">
        Upload an Image
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg p-6 mb-8">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
          </label>
        </div>

        {/* <div className="mb-8">
          <h2 className="text-white text-xl font-mono tracking-wider mb-4">
            Or select a sample image:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SAMPLE_IMAGES.map((image, index) => (
              <button
                key={index}
                type="button"
                className="bg-white p-2 rounded-lg hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => handleSampleImageSelect(image)}
              >
                <Image
                  src={image}
                  alt={`Sample image ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div> */}

        {selectedImage && (
          <div className="mt-8">
            <h2 className="text-white text-xl font-mono tracking-wider mb-4">
              Selected Image:
            </h2>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={selectedImage}
                alt="Selected image"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="mt-8 w-full bg-white text-[#ff7f50] font-bold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
          disabled={!selectedImage}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
