# Boilerplate

With NodeJS/Typescript/Express/Mongoose

## I. Cài đặt

### 1. Cài đặt plugin

```
yarn install
```

### 2. Chạy ở môi trường development

```
- Thêm các tham số cần thiết vào file .vscode/launch.json, các tham số tham khảo trong file.env.example
- Nhấn F5 ở trên vscode để khởi chạy chế độ Debug trên môi trường dev
```

### 3. Xây dựng môi trường Production (hoặc test)

```
- Tạo ra file .env.production (với môi trường test là file .env.test)
  bao gồm các tham số tham khảo trong file.env.example
- Chạy lệnh: yarn build:prod - Nếu muốn build cả APIDoc thì chạy lệnh: yarn build
```

### 4. Lints and fixes files

```
yarn lint
```