const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Email templates
const createLoveAcceptanceEmail = (date) => ({
  subject: '💖 Lời Xác Nhận Từ Trái Tim - Em Đã Chấp Nhận!',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(255, 105, 180, 0.2);
        }
        .header {
          text-align: center;
          color: #ff69b4;
          font-size: 32px;
          margin-bottom: 30px;
        }
        .message {
          color: #555;
          line-height: 1.8;
          font-size: 16px;
        }
        .highlight {
          background: linear-gradient(120deg, #ffeef8 0%, #fff0f5 100%);
          padding: 20px;
          border-radius: 15px;
          margin: 20px 0;
          border-left: 4px solid #ff69b4;
        }
        .footer {
          margin-top: 40px;
          text-align: center;
          color: #999;
          font-size: 14px;
        }
        .heart {
          color: #ff69b4;
          font-size: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          💖 Công Chúa Minh Duyên Thân Mến 💖
        </div>
        <div class="message">
          <p>Gửi người phụ nữ tuyệt vời nhất trong cuộc đời anh,</p>

          <p>Anh vô cùng hạnh phúc và trông chờ em đến với căn phòng nhỏ của anh nhân dịp 20/10 - Ngày Phụ Nữ Việt Nam! <span class="heart">💕</span></p>

          <div class="highlight">
            <strong>📅 Ngày hẹn:</strong> ${date}<br>
            <strong>📍 Địa điểm:</strong> Tại căn phòng ấm áp của anh<br>
            <strong>💝 Đặc biệt:</strong> Bữa ăn do anh nấu + Những món quà xinh xinh
          </div>

          <p>Anh đã chuẩn bị mọi thứ thật chu đáo để đón tiếp công chúa của mình. Từ những món ăn được nấu bằng cả trái tim, đến những món quà được chọn lựa kỹ lưỡng, tất cả đều mang theo tình yêu và sự trân trọng sâu sắc nhất của anh dành cho em.</p>

          <p>Em chỉ cần mang theo nụ cười rạng rỡ của mình, còn lại để anh lo tất cả nhé! Anh hứa sẽ làm cho ngày 20/10 này trở thành một kỷ niệm đẹp mà em sẽ không bao giờ quên.</p>

          <p style="text-align: center; margin: 30px 0; font-size: 20px;">
            <span class="heart">💖 💝 🌹 ✨ 🎁</span>
          </p>

          <p><strong>P.S:</strong> Anh đang rất háo hức và mong chờ khoảnh khắc được gặp em. Em là món quà quý giá nhất mà cuộc đời trao tặng cho anh! 👸✨</p>

          <p style="margin-top: 30px;">
            Yêu em nhiều lắm,<br>
            <strong>Anh của em 💕</strong>
          </p>
        </div>
        <div class="footer">
          Được gửi với tất cả tình yêu thương từ trái tim anh
        </div>
      </div>
    </body>
    </html>
  `
});

const createPartnerNotificationEmail = (date) => ({
  subject: '🎉 Tin Vui! Công Chúa Đã Chấp Nhận Lời Mời 20/10',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #e3f2ff 0%, #f0f8ff 100%);
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 123, 255, 0.2);
        }
        .header {
          text-align: center;
          color: #007bff;
          font-size: 32px;
          margin-bottom: 30px;
        }
        .success-badge {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          padding: 15px 30px;
          border-radius: 50px;
          text-align: center;
          font-size: 20px;
          margin: 20px 0;
          font-weight: bold;
        }
        .message {
          color: #555;
          line-height: 1.8;
          font-size: 16px;
        }
        .info-box {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
        .checklist {
          background: #fff3cd;
          padding: 20px;
          border-radius: 15px;
          margin: 20px 0;
          border-left: 4px solid #ffc107;
        }
        .checklist ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        .checklist li {
          margin: 8px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          🎉 Chúc Mừng! 🎉
        </div>

        <div class="success-badge">
          ✅ Công Chúa Minh Duyên Đã Chấp Nhận Lời Mời!
        </div>

        <div class="message">
          <p>Xin chúc mừng anh!</p>

          <p>Công chúa của anh đã chính thức chấp nhận lời mời đến căn phòng của anh nhân dịp 20/10! Đây là tin tuyệt vời và giờ là lúc anh chuẩn bị thật kỹ để tạo nên một ngày đáng nhớ!</p>

          <div class="info-box">
            <strong>📋 Thông Tin Buổi Hẹn:</strong><br>
            <strong>📅 Ngày:</strong> ${date}<br>
            <strong>📍 Địa điểm:</strong> Căn phòng của anh<br>
            <strong>👸 Khách mời đặc biệt:</strong> Công Chúa Minh Duyên
          </div>

          <div class="checklist">
            <strong>📝 Danh Sách Chuẩn Bị:</strong>
            <ul>
              <li>✅ Nấu món ăn ngon với tất cả tâm huyết</li>
              <li>✅ Chuẩn bị những món quà xinh xinh</li>
              <li>✅ Dọn dẹp căn phòng thật sạch sẽ và ấm cúng</li>
              <li>✅ Tạo không gian lãng mạn</li>
              <li>✅ Chuẩn bị tinh thần để đón công chúa</li>
              <li>✅ Đừng quên mang theo nụ cười rạng rỡ!</li>
            </ul>
          </div>

          <p style="text-align: center; font-size: 18px; color: #28a745; font-weight: bold; margin: 30px 0;">
            💪 Anh làm được! Hãy tạo nên một ngày thật đặc biệt! 💪
          </p>

          <p><strong>Lưu ý quan trọng:</strong> Đây là cơ hội tuyệt vời để thể hiện tình yêu và sự trân trọng của anh dành cho người phụ nữ đặc biệt nhất. Hãy chuẩn bị thật kỹ và tạo ra những kỷ niệm đẹp!</p>

          <p style="margin-top: 30px; text-align: center; color: #ff69b4; font-size: 20px;">
            🌹 Chúc anh có một ngày 20/10 thật ý nghĩa! 🌹
          </p>
        </div>
      </div>
    </body>
    </html>
  `
});

// API endpoint to send acceptance emails
app.post('/api/send-acceptance', async (req, res) => {
  try {
    const { date } = req.body;

    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }

    // Email for the girlfriend
    const loveEmail = createLoveAcceptanceEmail(date);
    await transporter.sendMail({
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: 'nnt.itute@gmail.com',
      subject: loveEmail.subject,
      html: loveEmail.html,
    });

    // Email for you (notification)
    const partnerEmail = createPartnerNotificationEmail(date);
    await transporter.sendMail({
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: 'nhoxpiin2306@gmail.com',
      subject: partnerEmail.subject,
      html: partnerEmail.html,
    });

    res.json({
      success: true,
      message: 'Emails sent successfully!'
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({
      error: 'Failed to send emails',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`Email server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
