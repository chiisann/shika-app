"use client";

import { useState } from "react";
import { Upload, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SAMPLE_IMAGES = [
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
  "/placeholder.svg?height=150&width=150",
];

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      formData.append("image", selectedFile);
    } else if (selectedImage) {
      // For sample images, we'll just send the URL
      formData.append("imageUrl", selectedImage);
    }

    try {
      const response = await fetch("/api/process-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/result");
      } else {
        console.error("Failed to process image");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#ff7f50] to-[#ffa07a] p-6">
      <h1 className="text-white text-2xl font-mono tracking-wider mb-8">
        Upload or Select an Image
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg p-6 mb-8">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
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

        <div className="mb-8">
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
        </div>

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
