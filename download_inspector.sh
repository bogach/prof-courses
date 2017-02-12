#!/usr/bin/env bash

download()
{

  if [ "$#" != "1" ]; then
    echo "Invalid number of arguments!"
    exit 1
  fi
  
  TOKEN="$1"
  
  curl -H "Authorization: token $TOKEN" https://api.github.com/repos/lezhenin/prof-higgins/releases/latest > latest.json
  ID=`cat latest.json | jq '.assets[] | select(.name=="inspector.zip") | .id'`
  rm latest.json
  wget --auth-no-challenge --header='Accept:application/octet-stream' https://${TOKEN}:@api.github.com/repos/lezhenin/prof-higgins/releases/assets/${ID} -O inspector.zip
  
} &> /dev/null
