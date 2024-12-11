import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });

    // const res = await fetch("http://127.0.0.1:8000/hello", {
    //   method: "GET",
    // });
    const data = await res.json();
    setResult(data.prediction);
  };

  return (
    <div>
      <h1>Image Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
      {result && <h2>Prediction: {result}</h2>}
    </div>
  );
}
