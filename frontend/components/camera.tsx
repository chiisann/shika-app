import { useRef } from "react";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // カメラを起動する関数
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // スマホのバックカメラを使用
        },
      });
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

        canvas.toBlob((blob) => {
          if (blob && onCapture) {
            const file = new File([blob], "captured-image.png", {
              type: "image/png",
            });
            onCapture(file); // 親コンポーネントに File オブジェクトを返す
          }
        }, "image/png");
      }
    }
  };

  return (
    <div className="mb-5 px-4">
      <div className="border-2 border-white rounded p-5">
        <video ref={videoRef} style={{ width: "100%", maxWidth: "500px" }} />
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>

      <div className="flex items-center flex-col mb-5">
        <button
          onClick={startCamera}
          className="mt-3 w-full bg-white text-[#ff7f50] font-bold py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          カメラ起動
        </button>
        <button
          onClick={captureImage}
          className="mt-3 w-full bg-white text-[#ff7f50] font-bold py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          撮影
        </button>
      </div>
    </div>
  );
};

export default CameraComponent;
