

#iPhone
mkdir iphone
cd iphone

#iPhone Icons
mkdir icon
cd icon
cp ../../logow.png logow.png

cp logow.png icon.png
cp logow.png icon@2x.png
cp logow.png icon-40.png
cp logow.png icon-40@2x.png
cp logow.png icon-40@3x.png
cp logow.png icon-50.png
cp logow.png icon-50@2x.png
cp logow.png icon-60.png
cp logow.png icon-60@2x.png
cp logow.png icon-60@3x.png
cp logow.png icon-72.png
cp logow.png icon-72@2x.png
cp logow.png icon-76.png
cp logow.png icon-76@2x.png
cp logow.png icon-83.5@2x.png
cp logow.png icon-1024.png
cp logow.png icon-small.png
cp logow.png icon-small@2x.png
cp logow.png icon-small@3x.png
rm logow.png

#convert size
mogrify -resize 57x57! icon.png
mogrify -resize 114x114! icon@2x.png
mogrify -resize 40x40! icon-40.png
mogrify -resize 80x80! icon-40@2x.png
mogrify -resize 120x120! icon-40@3x.png
mogrify -resize 50x50! icon-50.png
mogrify -resize 100x100! icon-50@2x.png
mogrify -resize 60x60! icon-60.png
mogrify -resize 120x120! icon-60@2x.png
mogrify -resize 180x180! icon-60@3x.png
mogrify -resize 72x72! icon-72.png
mogrify -resize 144x144! icon-72@2x.png
mogrify -resize 76x76! icon-76.png
mogrify -resize 152x152! icon-76@2x.png
mogrify -resize 167x167! icon-83.5@2x.png
mogrify -resize 1024x1024! icon-1024.png
mogrify -resize 29x29! icon-small.png
mogrify -resize 58x58! icon-small@2x.png
mogrify -resize 87x87! icon-small@3x.png


#iPhone Splash
cd ..
mkdir splash
cd splash
cp ../../logow.png logow.png

cp logow.png Default-568h@2x~iphone.png
cp logow.png Default-667h.png
cp logow.png Default-736h.png
cp logow.png Default-Landscape-736h.png
cp logow.png Default-Landscape@~ipadpro.png
cp logow.png Default-Landscape@2x~ipad.png
cp logow.png Default-Landscape~ipad.png
cp logow.png Default-Portrait@~ipadpro.png
cp logow.png Default-Portrait@2x~ipad.png
cp logow.png Default-Portrait~ipad.png
cp logow.png Default@2x~iphone.png
cp logow.png Default@2x~universal~anyany.png
cp logow.png Default~iphone.png
rm logow.png


mogrify -resize 640x1136! Default-568h@2x~iphone.png
mogrify -resize 750x1334! Default-667h.png
mogrify -resize 1242x2028! Default-736h.png
mogrify -resize 2208x1242! Default-Landscape-736h.png
mogrify -resize 2732x2048! Default-Landscape@~ipadpro.png
mogrify -resize 2048x1536! Default-Landscape@2x~ipad.png
mogrify -resize 1024x768! Default-Landscape~ipad.png
mogrify -resize 2048x2732! Default-Portrait@~ipadpro.png
mogrify -resize 1536x2048! Default-Portrait@2x~ipad.png
mogrify -resize 768x1024! Default-Portrait~ipad.png
mogrify -resize 640x960! Default@2x~iphone.png
mogrify -resize 2732x2732! Default@2x~universal~anyany.png
mogrify -resize 320x480! Default~iphone.png


