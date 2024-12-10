# ベースイメージ
FROM node:18.20.4

# 作業ディレクトリ設定
WORKDIR /

# 依存関係をコピーしてインストール
COPY ./package.json ./package-lock.json ./
RUN npm install

# 残りのフロントエンドコードをコピー
COPY ./ .

# ビルドを実行
RUN npm run build

# コンテナ起動時に使用するコマンド
# CMD ["npm", "start"]
# dev mode
# CMD ["npm", "run", "dev"]
