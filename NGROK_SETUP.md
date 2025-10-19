# 🌐 Hướng Dẫn Sử Dụng Ngrok

## 📋 Tổng Quan

Ngrok giúp bạn expose backend server (chạy trên localhost:3001) ra internet để frontend có thể gọi API từ bất kỳ đâu.

## 🚀 Cách Sử Dụng

### Phương Án 1: Sử Dụng Script Tự Động (Khuyến Nghị)

1. **Chạy script:**
```bash
./start-with-ngrok.sh
```

2. **Copy ngrok URL:**
   - Script sẽ hiển thị URL ngrok (ví dụ: `https://abc123.ngrok.io`)
   - Copy URL này

3. **Cập nhật file .env:**
   - Mở file `.env`
   - Thay đổi dòng:
   ```
   REACT_APP_API_URL=http://localhost:3001
   ```
   thành:
   ```
   REACT_APP_API_URL=https://your-ngrok-url.ngrok.io
   ```

4. **Khởi động lại frontend:**
```bash
npm start
```

5. **Deploy hoặc share link:**
   - Bây giờ bạn có thể deploy frontend lên GitHub Pages
   - Hoặc share link cho người yêu để test

---

### Phương Án 2: Chạy Thủ Công

#### Bước 1: Khởi động Backend Server
```bash
npm run server
```

#### Bước 2: Mở Terminal Mới và Chạy Ngrok
```bash
ngrok http 3001
```

#### Bước 3: Copy Ngrok URL
Bạn sẽ thấy output như này:
```
Forwarding   https://abc123.ngrok.io -> http://localhost:3001
```

Copy URL `https://abc123.ngrok.io`

#### Bước 4: Cập Nhật .env
Mở file `.env` và update:
```env
REACT_APP_API_URL=https://abc123.ngrok.io
```

#### Bước 5: Restart Frontend
```bash
# Stop frontend (Ctrl+C) nếu đang chạy
npm start
```

---

## 🎯 Test

1. Mở website của bạn
2. Vào trang Date Cards
3. Click nút "Em Chấp Nhận Lời Mời!"
4. Email sẽ được gửi thành công! 💕

---

## ⚠️ Lưu Ý Quan Trọng

1. **Ngrok URL thay đổi mỗi lần chạy** (với free plan)
   - Mỗi lần restart ngrok, URL sẽ khác
   - Bạn cần update lại file `.env` với URL mới

2. **Không commit URL vào Git:**
   - File `.env` đã được thêm vào `.gitignore`
   - Ngrok URL là tạm thời, không nên commit

3. **Production Deployment:**
   - Để deploy lên production, bạn nên:
     - Deploy backend lên Heroku/Railway/Vercel
     - Hoặc giữ ngrok chạy liên tục (cần ngrok pro)
     - Update `REACT_APP_API_URL` với URL production

4. **CORS đã được cấu hình:**
   - Backend đã có `cors()` middleware
   - Frontend có thể gọi từ bất kỳ domain nào

---

## 🔧 Troubleshooting

### Lỗi "Cannot connect to server"
- Kiểm tra backend đang chạy: `http://localhost:3001/api/health`
- Kiểm tra ngrok đang chạy
- Verify URL trong `.env` đúng

### Email không gửi được
- Kiểm tra SMTP credentials trong `.env`
- Check console.log trong terminal backend
- Verify Gmail App Password còn valid

### Frontend không nhận API URL mới
- Restart frontend (Ctrl+C và `npm start`)
- Clear browser cache
- Check file `.env` có đúng format không

---

## 📝 Các Lệnh Hữu Ích

```bash
# Check backend health
curl http://localhost:3001/api/health

# Check ngrok tunnel
curl https://your-ngrok-url.ngrok.io/api/health

# View ngrok dashboard
# Mở browser: http://localhost:4040
```

---

## 💡 Tips

1. **Giữ ngrok chạy ổn định:**
   - Không tắt terminal chạy ngrok
   - Hoặc dùng `screen`/`tmux` để chạy background

2. **Share với người yêu:**
   - Deploy frontend lên GitHub Pages với URL ngrok trong `.env`
   - Người yêu có thể click nút Accept từ bất kỳ đâu!

3. **Monitor requests:**
   - Mở `http://localhost:4040` để xem ngrok dashboard
   - Có thể inspect tất cả requests/responses

---

Chúc bạn thành công! 💕
