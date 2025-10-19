#!/bin/bash

# Script to download free romantic music
# Using Bensound - Free Music (requires attribution)

MUSIC_DIR="public/music"
mkdir -p "$MUSIC_DIR"

echo "🎵 Downloading romantic music from Bensound..."
echo "📝 Attribution: Music from https://www.bensound.com"
echo ""

# Download romantic tracks
curl -L "https://www.bensound.com/bensound-music/bensound-love.mp3" -o "$MUSIC_DIR/love.mp3"
echo "✅ Downloaded: Love"

curl -L "https://www.bensound.com/bensound-music/bensound-romantic.mp3" -o "$MUSIC_DIR/romantic.mp3"
echo "✅ Downloaded: Romantic"

curl -L "https://www.bensound.com/bensound-music/bensound-tenderness.mp3" -o "$MUSIC_DIR/tenderness.mp3"
echo "✅ Downloaded: Tenderness"

curl -L "https://www.bensound.com/bensound-music/bensound-memories.mp3" -o "$MUSIC_DIR/memories.mp3"
echo "✅ Downloaded: Memories"

curl -L "https://www.bensound.com/bensound-music/bensound-happiness.mp3" -o "$MUSIC_DIR/happiness.mp3"
echo "✅ Downloaded: Happiness"

curl -L "https://www.bensound.com/bensound-music/bensound-sweet.mp3" -o "$MUSIC_DIR/sweet.mp3"
echo "✅ Downloaded: Sweet"

curl -L "https://www.bensound.com/bensound-music/bensound-dreams.mp3" -o "$MUSIC_DIR/dreams.mp3"
echo "✅ Downloaded: Dreams"

curl -L "https://www.bensound.com/bensound-music/bensound-inspire.mp3" -o "$MUSIC_DIR/inspire.mp3"
echo "✅ Downloaded: Inspire"

echo ""
echo "🎉 Download complete! 8 tracks downloaded to $MUSIC_DIR"
echo ""
echo "📋 Downloaded tracks:"
ls -lh "$MUSIC_DIR"
