# イメージを作る時にしてほしいことを書く
# ライブラリインストール
# 環境構築のためのファイル
# アプリケーションの実行はここでやるべきでない
# ベースイメージ
FROM python:3.10-slim

# 作業ディレクトリの設定
WORKDIR /app

# 必要なファイルをコピー
COPY ./app .

# pipを最新に更新
RUN pip install --upgrade pip

# パッケージのインストール
RUN pip install --no-cache-dir -r /app/requirements.txt

# アプリケーションの起動
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
# dev mode
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
