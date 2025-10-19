const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

// Configuration
const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/videos');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'memory-slideshow.mp4');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Memory dates with images (same structure as MemoryGallery.jsx)
const memoryDates = [
  { date: '19-10-2025', title: 'xiaolongbaooo hen 好吃 😋', folder: '19-10-2025', imageCount: 3 },
  { date: '18-10-2025', title: 'Trưa mì kay, tối trứng chiên 🍳✨', folder: '18-10-2025', imageCount: 5 },
  { date: '17-10-2025', title: 'Bún thịt nướng, ngon nhứt nách 😆🔥', folder: '17-10-2025', imageCount: 4 },
  { date: '15-10-2025', title: 'Cuốn cuốn cuốn cuốn cuốn cuốn 🌀😄', folder: '15-10-2025', imageCount: 2 },
  { date: '14-10-2025', title: 'Miến này cũng ngon, tôm ngon 😋', folder: '14-10-2025', imageCount: 2 },
  { date: '13-10-2025', title: 'Cháo gì mà không coá hành 😂🥲', folder: '13-10-2025', imageCount: 2 },
  { date: '6-10-2025', title: 'Cũng không tệ nhỉ cục dàng? 🤔💕', folder: '6-10-2025', imageCount: 2 },
  { date: '5-10-2025', title: 'Ăn mừng trung thu đầu tiên bên nhau hẹ hẹ 🌕🥰', folder: '5-10-2025', imageCount: 4 },
  { date: '2-10-2025', title: 'Đem cơm qua bên khoa của người đẹp nè, nghêu hấp cũng ngon hen 😊💖', folder: '2-10-2025', imageCount: 2 },
  { date: '17-9-2025', title: '小籠包真好吃 😍🥢', folder: '17-9-2025', imageCount: 2 },
  { date: '14-9-2025', title: 'Ai cuốn chả mà đẹp thía, nấu ăn cùng nhau vui ghiaaa 🥰👨‍🍳', folder: '14-9-2025', imageCount: 2 },
  { date: '13-9-2025', title: 'Mì udon 3 phút nhưng nấu 30 phút vì thích làm màu 😂✨', folder: '13-9-2025', imageCount: 2 },
  { date: '12-9-2025', title: 'Chứng chiên tôm với cà chua, không biết ngon không nhưng mà quất cũng gần hết 😅🍴', folder: '12-9-2025', imageCount: 2 },
  { date: '11-9-2025', title: 'Màu nui không đẹp lắm, nhưng mà bia ngon 🍻😋', folder: '11-9-2025', imageCount: 2 },
  { date: '10-9-2025', title: 'Lúc nào mua cũng sợ ăn không đủ 😂 nhưng cái kết là ăn hết 💪', folder: '10-9-2025', imageCount: 1 },
  { date: '9-9-2025', title: 'Nước sốt chấm rau muống ngon nha 😋 ai cắt gọt hoa quả giỏi ghia 🔪✨', folder: '9-9-2025', imageCount: 2 },
  { date: '7-9-2025', title: 'Hẹ hẹ, tầm này mở quán đi bán được rồi 😎🏆', folder: '7-9-2025', imageCount: 2 },
  { date: '6-9-2025', title: 'Dưa leo ngon 😌🥒', folder: '6-9-2025', imageCount: 1 },
  { date: '3-9-2025', title: 'Ngày đầu tiên nấu cho công chúa của tôi ăn!! cũng tranh thủ rồi 👸💕', folder: '3-9-2025', imageCount: 1 },
  { date: '25-7-2025', title: 'Ý là ăn chưa đủ no nên ra đây kêu ít dị đó 😂🍜', folder: '25-7-2025', imageCount: 4 },
  { date: '24-7-2025', title: 'Quán này ngon tuyệt dời ⭐🤩', folder: '24-7-2025', imageCount: 2 },
  { date: '18-7-2025', title: 'Không ngon nhưng mà quan trọng là ăn hết 😅💪', folder: '18-7-2025', imageCount: 1 },
  { date: '13-7-2025', title: 'Mẹc này nhìn ngon nhưng mà có người ăn nước tương 😂🤦', folder: '13-7-2025', imageCount: 2 },
  { date: '12-7-2025', title: 'Ý là dô gọi món khí thế hết 🎉😄', folder: '12-7-2025', imageCount: 1 },
  { date: '11-7-2025', title: 'Sạch tô 😋✨', folder: '11-7-2025', imageCount: 1 },
  { date: '9-7-2025', title: 'Nhạo đêi, ước mơ nho nhỏ là có dợ biết nhạo hí hí 😄🍖', folder: '9-7-2025', imageCount: 1 },
  { date: '7-7-2025', title: 'Gà ngonnnnnnn 🍗😍', folder: '7-7-2025', imageCount: 1 }
];

// Collect all image paths
function collectAllImages() {
  const allImages = [];

  memoryDates.forEach(memory => {
    const folderPath = path.join(PUBLIC_IMAGES_DIR, memory.folder);

    if (fs.existsSync(folderPath)) {
      for (let i = 1; i <= memory.imageCount; i++) {
        const imagePath = path.join(folderPath, `${i}.jpg`);
        if (fs.existsSync(imagePath)) {
          allImages.push({
            path: imagePath,
            date: memory.date,
            title: memory.title
          });
        }
      }
    }
  });

  return allImages;
}

// Create video from images
async function createVideo() {
  console.log('🎬 Starting video creation...');

  const images = collectAllImages();

  if (images.length === 0) {
    console.error('❌ No images found!');
    return;
  }

  console.log(`📸 Found ${images.length} images`);

  // Create input file list for FFmpeg
  const inputListPath = path.join(OUTPUT_DIR, 'input-list.txt');
  const inputList = images.map(img => `file '${img.path}'\nduration 3`).join('\n') + '\n';
  fs.writeFileSync(inputListPath, inputList);

  console.log('🎥 Creating video with FFmpeg...');

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(inputListPath)
      .inputOptions(['-f concat', '-safe 0'])
      .outputOptions([
        '-c:v libx264',           // Video codec
        '-pix_fmt yuv420p',       // Pixel format for compatibility
        '-vf scale=1280:720',     // Scale to 720p
        '-r 30',                  // Frame rate
        '-preset slow',           // Encoding preset (better quality)
        '-crf 18'                 // Quality (lower = better, 18 is high quality)
      ])
      .output(OUTPUT_FILE)
      .on('start', (commandLine) => {
        console.log('📹 FFmpeg command:', commandLine);
      })
      .on('progress', (progress) => {
        if (progress.percent) {
          console.log(`⏳ Processing: ${Math.round(progress.percent)}%`);
        }
      })
      .on('end', () => {
        console.log('✅ Video created successfully!');
        console.log(`📁 Output: ${OUTPUT_FILE}`);

        // Clean up temporary file
        fs.unlinkSync(inputListPath);

        resolve(OUTPUT_FILE);
      })
      .on('error', (err) => {
        console.error('❌ Error creating video:', err.message);

        // Clean up temporary file
        if (fs.existsSync(inputListPath)) {
          fs.unlinkSync(inputListPath);
        }

        reject(err);
      })
      .run();
  });
}

// Advanced version with transitions and text overlays
async function createVideoWithEffects() {
  console.log('🎬 Starting advanced video creation with effects...');

  const images = collectAllImages();

  if (images.length === 0) {
    console.error('❌ No images found!');
    return;
  }

  console.log(`📸 Found ${images.length} images`);

  const outputWithEffects = path.join(OUTPUT_DIR, 'memory-slideshow-effects.mp4');

  // Create a more complex video with zoom/pan effects (Ken Burns effect)
  const inputListPath = path.join(OUTPUT_DIR, 'input-list.txt');
  const inputList = images.map(img => `file '${img.path}'\nduration 3`).join('\n') + '\n';
  fs.writeFileSync(inputListPath, inputList);

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(inputListPath)
      .inputOptions(['-f concat', '-safe 0'])
      .outputOptions([
        '-c:v libx264',
        '-pix_fmt yuv420p',
        // Ken Burns effect: zoom + pan
        '-vf',
        'scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,' +
        'zoompan=z=\'min(zoom+0.0015,1.5)\':d=90:x=\'iw/2-(iw/zoom/2)\':y=\'ih/2-(ih/zoom/2)\':s=1280x720',
        '-r 30',
        '-preset slow',
        '-crf 18'
      ])
      .output(outputWithEffects)
      .on('start', (commandLine) => {
        console.log('📹 FFmpeg command:', commandLine);
      })
      .on('progress', (progress) => {
        if (progress.percent) {
          console.log(`⏳ Processing: ${Math.round(progress.percent)}%`);
        }
      })
      .on('end', () => {
        console.log('✅ Video with effects created successfully!');
        console.log(`📁 Output: ${outputWithEffects}`);

        fs.unlinkSync(inputListPath);
        resolve(outputWithEffects);
      })
      .on('error', (err) => {
        console.error('❌ Error creating video:', err.message);
        if (fs.existsSync(inputListPath)) {
          fs.unlinkSync(inputListPath);
        }
        reject(err);
      })
      .run();
  });
}

// Main execution
const args = process.argv.slice(2);
const withEffects = args.includes('--effects');

if (withEffects) {
  createVideoWithEffects()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
} else {
  createVideo()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
