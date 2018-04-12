
#Android
mkdir android
cd android

#Android Icons
mkdir icon
cd icon
cp ../../logow.png logow.png

cp logow.png drawable-hdpi-icon.png
cp logow.png drawable-ldpi-icon.png
cp logow.png drawable-mdpi-icon.png
cp logow.png drawable-xhdpi-icon.png
cp logow.png drawable-xxhdpi-icon.png
cp logow.png drawable-xxxhdpi-icon.png
rm logow.png

#convert size
mogrify -resize 72x72! drawable-hdpi-icon.png
mogrify -resize 36x36! drawable-ldpi-icon.png
mogrify -resize 48x48! drawable-mdpi-icon.png
mogrify -resize 96x96! drawable-xhdpi-icon.png
mogrify -resize 144x144! drawable-xxhdpi-icon.png
mogrify -resize 192x192! drawable-xxxhdpi-icon.png



#Android Splash
cd ..
mkdir splash
cd splash
cp ../../logow.png logow.png

cp logow.png drawable-land-hdpi-screen.png
cp logow.png drawable-land-ldpi-screen.png
cp logow.png drawable-land-mdpi-screen.png
cp logow.png drawable-land-xhdpi-screen.png
cp logow.png drawable-land-xxhdpi-screen.png
cp logow.png drawable-land-xxxhdpi-screen.png
cp logow.png drawable-port-hdpi-screen.png
cp logow.png drawable-port-ldpi-screen.png
cp logow.png drawable-port-mdpi-screen.png
cp logow.png drawable-port-xhdpi-screen.png
cp logow.png drawable-port-xxhdpi-screen.png
cp logow.png drawable-port-xxxhdpi-screen.png
rm logow.png


mogrify -resize 800x480! drawable-land-hdpi-screen.png
mogrify -resize 320x200! drawable-land-ldpi-screen.png
mogrify -resize 480x320! drawable-land-mdpi-screen.png
mogrify -resize 1280x720! drawable-land-xhdpi-screen.png
mogrify -resize 1600x960! drawable-land-xxhdpi-screen.png
mogrify -resize 1920x1280! drawable-land-xxxhdpi-screen.png
mogrify -resize 480x800! drawable-port-hdpi-screen.png
mogrify -resize 200x320! drawable-port-ldpi-screen.png
mogrify -resize 320x480! drawable-port-mdpi-screen.png
mogrify -resize 720x1280! drawable-port-xhdpi-screen.png
mogrify -resize 960x1600! drawable-port-xxhdpi-screen.png
mogrify -resize 1280x1920! drawable-port-xxxhdpi-screen.png

