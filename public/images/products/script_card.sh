for f in ./*.png
do
  convert $f -resize x305 $f
done
