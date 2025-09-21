# Hướng dẫn Deploy Trang Web Lên GitHub Pages

## Tổng quan
Tài liệu này hướng dẫn cách deploy trang web React lên GitHub Pages với tự động deployment khi có commit mới.

## Yêu cầu
- Tài khoản GitHub
- Repository đã được tạo trên GitHub
- Node.js và npm đã được cài đặt

## Các bước thực hiện

### 1. Cài đặt gh-pages package
```bash
npm install --save-dev gh-pages
```

### 2. Cấu hình package.json
Thêm các script và cấu hình sau vào `package.json`:

```json
{
  "homepage": "https://[username].github.io/[repository-name]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Thay `[username]` bằng GitHub username của bạn và `[repository-name]` bằng tên repository.

### 3. Deploy thủ công lần đầu
```bash
npm run deploy
```

### 4. Cấu hình GitHub Pages và Permissions
1. **Enable GitHub Actions permissions:**
   - Vào repository trên GitHub
   - Chọn **Settings** > **Actions** > **General**
   - Trong **Workflow permissions**, chọn **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**
   - Nhấn **Save**

2. **Cấu hình GitHub Pages:**
   - Vào **Settings** > **Pages**
   - Trong **Source**, chọn **Deploy from a branch**
   - Chọn branch `gh-pages` và folder `/ (root)`
   - Nhấn **Save**

### 5. Tự động deploy với GitHub Actions
GitHub Actions workflow đã được tạo tại `.github/workflows/deploy.yml` sẽ tự động:
- Build và deploy khi có push vào branch `main` hoặc `develop`
- Tự động cập nhật GitHub Pages

## Cấu trúc files
```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static files
├── src/                        # Source code
├── package.json               # Đã cấu hình deploy scripts
└── DEPLOY.md                  # Tài liệu này
```

## Troubleshooting

### Lỗi 404 khi truy cập trang
- Kiểm tra `homepage` trong `package.json` có đúng không
- Đảm bảo GitHub Pages đã được enable
- Chờ vài phút để GitHub Pages cập nhật

### Lỗi build
- Chạy `npm run build` locally để kiểm tra lỗi
- Kiểm tra console logs trong GitHub Actions

### Routing issues với React Router
- Thêm `<BrowserRouter basename="/[repository-name]">` trong App.js
- Hoặc sử dụng HashRouter thay vì BrowserRouter

## URLs quan trọng
- **Live site**: https://[username].github.io/[repository-name]
- **Repository**: https://github.com/[username]/[repository-name]
- **GitHub Actions**: https://github.com/[username]/[repository-name]/actions

## Lệnh hữu ích
```bash
# Build project
npm run build

# Deploy thủ công
npm run deploy

# Xem log GitHub Actions
gh run list
gh run view [run-id]
```

## Lưu ý
- Mỗi lần push vào branch chính sẽ tự động deploy
- Thời gian deploy thường từ 2-5 phút
- Có thể mất thêm vài phút để GitHub Pages cập nhật
- Nên test build locally trước khi push