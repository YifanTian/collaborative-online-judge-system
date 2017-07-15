#!/bin/bash
fuser -k 3000/tcp

launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

cd ./oj-server
npm install
npm start &

# cd ../oj-client
# npm install
# ng build --watch &

echo "-------------------------------"

read -p "PRESS any thing to terminate processes"

fuer -k 3000/tcp
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist