"use client";

import { useState } from "react";
import { Upload, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CameraComponent from "../../components/camera";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const router = useRouter();

  // TODO uploadだめ capture OK
  const handleCapture = (image) => {
    // console.log("Captured Image:", image);
    setSelectedImage(image);
    // setCapturedImage(image);
    // const imageUrl = URL.createObjectURL(image);
    // setSelectedImage(imageUrl);

    const imageUrl = URL.createObjectURL(image);
    setCapturedImage(imageUrl);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
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
      <CameraComponent onCapture={handleCapture} />

      <form onSubmit={handleSubmit}>
        {capturedImage && (
          <div className="mt-8">
            <h2 className="text-white text-xl font-mono tracking-wider mb-4">
              Selected Image:
            </h2>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={capturedImage}
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
