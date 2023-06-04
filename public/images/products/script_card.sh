for f in ./*.png
do
   convert $f -resize x305 "${f%.*}.avif"
done
