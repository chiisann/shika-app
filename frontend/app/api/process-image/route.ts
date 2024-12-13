import { NextResponse } from "next/server";

const greetings = ["hello", "hi", "hey", "howdy", "greetings"];

export async function POST(request: Request) {
  console.log("process-image");
  // console.log("request: ");
  // console.log(request);
  // console.log(request.body);
  const formData = await request.formData();
  const file = formData.get("file");
  // console.log("formData: ");
  // console.log(formData);
  console.log("file: ");
  console.log(file);

  const formData2 = new FormData();
  if (file) {
    formData2.append("file", file);
  }

  const res2 = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    // body: formData,
    body: formData2,
  });
  console.log("res2: ");
  console.log(res2);

  // const fdata = await request.body;
  // const image = formData.get("image");
  // const imageUrl = formData.get("imageUrl");

  // console.log("fdata: ");
  // console.log(fdata);

  // Here you would typically process the image
  // For now, we'll just log what we received
  // if (image) {
  //   console.log("Received file:", (image as File).name);
  // } else if (imageUrl) {
  //   console.log("Received image URL:", imageUrl);
  // }

  // Simulate processing delay
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // call prediction API

  // const res = await fetch("http://127.0.0.1:8000/predict", {
  //   method: "POST",
  //   // body: JSON.stringify(formData),
  //   body: JSON.stringify(fdata),
  // });

  const data = await res2.json();
  console.log("data: ");
  console.log(data);

  // Return a random greeting
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  return NextResponse.json({ success: true, result: data.prediction });
}
