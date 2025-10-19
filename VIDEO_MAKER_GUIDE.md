# 🎬 Memory Video Maker Guide

## 📋 Tổng Quan

Script tự động tạo video slideshow từ tất cả các ảnh kỷ niệm trong folder `public/images`.

## 🚀 Cách Sử Dụng

### 1. **Tạo Video Cơ Bản** (Simple Slideshow)

```bash
npm run create-video
```

**Đặc điểm:**
- Mỗi ảnh hiển thị 3 giây
- Chất lượng cao (720p)
- Không có hiệu ứng đặc biệt
- Thời gian tạo: ~2-5 phút

**Output:** `public/videos/memory-slideshow.mp4`

---

### 2. **Tạo Video Có Hiệu Ứng** (With Effects)

```bash
npm run create-video:effects
```

**Đặc điểm:**
- Ken Burns effect (zoom + pan)
- Chuyển động mượt mà
- Chuyên nghiệp hơn
- Thời gian tạo: ~5-15 phút

**Output:** `public/videos/memory-slideshow-effects.mp4`

---

## ⚙️ Cấu Hình

### Thay Đổi Thời Gian Hiển Thị Mỗi Ảnh

Mở file `scripts/createMemoryVideo.js` và sửa:

```javascript
// Từ:
duration 3

// Thành (ví dụ 5 giây):
duration 5
```

### Thay Đổi Độ Phân Giải

```javascript
// Trong outputOptions:
'-vf scale=1920:1080',  // Full HD
// hoặc
'-vf scale=1280:720',   // 720p (default)
```

### Thay Đổi Chất Lượng

```javascript
'-crf 18'  // Cao (18-23), thấp hơn = tốt hơn
'-crf 23'  // Trung bình
'-crf 28'  // Thấp, file nhỏ hơn
```

---

## 🎨 Tính Năng

### Video Cơ Bản:
- ✅ Tự động thu thập tất cả ảnh từ folders
- ✅ Sắp xếp theo thứ tự thời gian
- ✅ Chất lượng cao (H.264)
- ✅ Tương thích mọi thiết bị

### Video Có Hiệu Ứng:
- ✅ Ken Burns effect (zoom + pan tự động)
- ✅ Chuyển động mượt mà
- ✅ Professional look
- ✅ Tạo cảm giác điện ảnh

---

## 📊 Thông Tin Video

**Format:** MP4 (H.264)
**Resolution:** 1280x720 (720p)
**Frame Rate:** 30 FPS
**Quality:** High (CRF 18)
**Duration:** ~3 giây/ảnh

**Tổng số ảnh hiện tại:** 60+ ảnh
**Thời lượng video dự kiến:** ~3-4 phút

---

## 🎵 Thêm Nhạc Nền (Optional)

Nếu muốn thêm nhạc nền, tạo file mới `scripts/createVideoWithMusic.js`:

```javascript
const ffmpeg = require('fluent-ffmpeg');

ffmpeg()
  .input('public/videos/memory-slideshow.mp4')
  .input('path/to/your/music.mp3')
  .outputOptions([
    '-c:v copy',           // Copy video stream
    '-c:a aac',            // Audio codec
    '-shortest'            // End when shortest input ends
  ])
  .output('public/videos/memory-slideshow-with-music.mp4')
  .on('end', () => console.log('✅ Video with music created!'))
  .on('error', (err) => console.error('❌ Error:', err))
  .run();
```

Chạy:
```bash
node scripts/createVideoWithMusic.js
```

---

## 📁 Cấu Trúc Output

```
public/
  videos/
    memory-slideshow.mp4          # Video cơ bản
    memory-slideshow-effects.mp4  # Video có hiệu ứng
```

---

## 🐛 Troubleshooting

### Error: FFmpeg not found
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows
# Download từ: https://ffmpeg.org/download.html
```

### Error: Memory issue
- Giảm số lượng ảnh
- Giảm độ phân giải
- Tăng RAM available

### Video quá lớn
- Tăng CRF value (18 → 23)
- Giảm độ phân giải
- Sử dụng preset 'faster' thay vì 'slow'

---

## 🎯 Use Cases

1. **Share trên Social Media:**
   - Upload lên Instagram/Facebook
   - Chia sẻ với bạn bè

2. **Lưu trữ kỷ niệm:**
   - Backup dưới dạng video
   - Dễ xem hơn nhiều ảnh rời

3. **Tặng quà:**
   - Burn vào DVD
   - Tạo món quà ý nghĩa

---

## 💡 Tips

1. **Optimize ảnh trước khi tạo video:**
   - Resize ảnh quá lớn
   - Compress nếu cần

2. **Sắp xếp lại thứ tự:**
   - Edit mảng `memoryDates` trong script
   - Thay đổi thứ tự hiển thị

3. **Tạo nhiều video khác nhau:**
   - Video theo tháng
   - Video theo chủ đề
   - Video best moments

---

## 🎬 Advanced Features (Coming Soon)

- [ ] Thêm text overlay (date + title)
- [ ] Fade transitions giữa các ảnh
- [ ] Nhiều theme music khác nhau
- [ ] Export nhiều định dạng (GIF, WebM)
- [ ] Web interface để customize

---

Chúc bạn tạo video thành công! 🎉✨
