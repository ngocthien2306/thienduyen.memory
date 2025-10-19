#!/bin/bash

# Script to start backend server and ngrok tunnel

echo "🚀 Starting Backend Server and Ngrok Tunnel..."
echo ""

# Start the backend server in the background
echo "📡 Starting backend server on port 3001..."
npm run server &
SERVER_PID=$!

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 3

# Start ngrok tunnel
echo "🌐 Starting ngrok tunnel..."
echo ""
echo "================================================"
echo "  IMPORTANT: Copy the ngrok URL below"
echo "  and update REACT_APP_API_URL in .env file"
echo "================================================"
echo ""

ngrok http 3001

# When ngrok is stopped (Ctrl+C), kill the backend server
echo ""
echo "🛑 Stopping backend server..."
kill $SERVER_PID
echo "✅ Done!"
