#!/bin/bash

COURSE_PATH=$1
NEW_COURSE_PATH="${COURSE_PATH}$2"

rm -r ${NEW_COURSE_PATH}
cp -r ${COURSE_PATH} ${NEW_COURSE_PATH}

for i in ${NEW_COURSE_PATH}/*/*.mp3
do 
    ffmpeg -i $i -ar 44100 ${i%.*}.wav
    ./pitch_detector -v -i ${i%.*}.wav -o ${i%.*}.pitch 
done

rm ${NEW_COURSE_PATH}/*/*.wav
