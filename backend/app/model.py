# TODO 置き換え
import torch
from torchvision import models, transforms
from PIL import Image
import io

# モデルのロード
model = models.resnet18(pretrained=False)
model.load_state_dict(torch.load("../app/model_resnet.pth", map_location=torch.device('cpu')))
model.eval()

# 前処理
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def predict(image_bytes):
    image = Image.open(io.BytesIO(image_bytes))
    input_tensor = transform(image).unsqueeze(0)
    outputs = model(input_tensor)
    _, predicted = torch.max(outputs, 1)
    return predicted.item()
