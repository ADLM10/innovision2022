#!/bin/bash

images='./src/images/carousel/*.jpg'
image_folder='./src/images/carousel/'

count=1

for image in $images; do
  mv $image $image_folder$((count++)).jpg -v
done

echo -e "\n- Total $(ls $image_folder | wc -l) images\n"
