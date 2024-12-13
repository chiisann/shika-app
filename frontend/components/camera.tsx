import { useState, useRef } from "react";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // カメラを起動する関数
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("カメラの起動に失敗しました:", err);
    }
  };

  // 画像を撮影する関数
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedImage = canvas.toDataURL("image/png"); // Base64形式で画像を保存
        if (onCapture) {
          onCapture(capturedImage); // 親コンポーネントに画像を返す
        }
      }
    }
  };

  return (
    <div>
      <h1>カメラコンポーネント</h1>
      <div>
        <video ref={videoRef} style={{ width: "100%", maxWidth: "500px" }} />
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      <button onClick={startCamera}>カメラを起動</button>
      <button onClick={captureImage}>撮影</button>
    </div>
  );
};

export default CameraComponent;
