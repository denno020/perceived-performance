for f in ./*1.png
do
  convert $f -resize 600 $f
done
