#!/usr/bin/env bash

download()
{

  if [ "$#" != "1" ]; then
    echo "Invalid number of arguments!"
    exit 1
  fi
  
  TOKEN="$1"
  
  curl -H "Authorization: token $TOKEN" https://api.github.com/repos/StudyIntonation/course-inspector/releases/latest > latest.json
  INSPECTOR_ID=`cat latest.json | jq '.assets[] | select(.name=="inspector.zip") | .id'`
  PITCH_DETECTOR_ID=`cat latest.json | jq '.assets[] | select(.name=="pitch_detector") | .id'`
  rm latest.json
  wget --auth-no-challenge --header='Accept:application/octet-stream' https://${TOKEN}:@api.github.com/repos/StudyIntonation/course-inspector/releases/assets/${INSPECTOR_ID} -O inspector.zip
  wget --auth-no-challenge --header='Accept:application/octet-stream' https://${TOKEN}:@api.github.com/repos/StudyIntonation/course-inspector/releases/assets/${PITCH_DETECTOR_ID} -O pitch_detector
  
} &> /dev/null

