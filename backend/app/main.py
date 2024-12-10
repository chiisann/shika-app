from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from PIL import Image
import torch
import torchvision.transforms as transforms
import os
from fastapi.middleware.cors import CORSMiddleware

# クラスラベルを定義
# LABELS = ["deer_01", "deer_02", "deer_03", "deer_04"]  # 必要に応じて変更
# クラスラベルを自動生成
LABELS = [f"deer_{str(i).zfill(2)}" for i in range(1, 24)]  # deer_01 から deer_23

# モデルを読み込む関数
def load_model(model_path: str):
    model = torch.hub.load('pytorch/vision', 'resnet18', pretrained=False)
    num_classes = len(LABELS)
    model.fc = torch.nn.Linear(model.fc.in_features, num_classes)
    model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
    model.eval()  # 評価モードにする
    return model

# 推論処理
def predict(image: Image.Image, model):
    # 画像を前処理
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
    ])
    image_tensor = transform(image).unsqueeze(0)  # バッチ次元を追加

    # モデルに渡して予測
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
        predicted_label = LABELS[predicted.item()]
    return predicted_label

# FastAPIアプリを作成
app = FastAPI()

# モデルをロード
import os

# 現在の作業ディレクトリを取得
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, "model_resnet.pth")

# model_path = "./model_resnet.pth"
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found at {model_path}")
model = load_model(model_path)


# CORS設定の追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000"],  # フロントエンドのURLを指定
    allow_credentials=True,
    allow_methods=["*"],  # 全てのHTTPメソッドを許可
    allow_headers=["*"],  # 全てのHTTPヘッダーを許可
)

# エンドポイントの定義
@app.post("/predict/")
async def classify_image(file: UploadFile = File(...)):
    try:
        # ファイルをPIL形式で読み込む
        image = Image.open(file.file).convert("RGB")
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid image file")

    # 推論を実行
    predicted_label = predict(image, model)
    print(predicted_label)
    return JSONResponse(content={"label": predicted_label})

# ルートエンドポイントのGETメソッドを定義
@app.get("/hello/")
def read_root():
    print("Hello")
    return {"message": "Hello, World!"}