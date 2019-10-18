#!/bin/bash

COURSE_PATH=$1

for i in ${COURSE_PATH}/*/*.mp3
do 
    ffmpeg -i $i -ar 44100 ${i%.*}.wav
    ./pitch_detector -v -i ${i%.*}.wav -o ${i%.*}.pitch 
done

rm ${COURSE_PATH}/*/*.wav

