
ionic cordova build android --release --prod
cd /Users/vikasjindal/Desktop/Development/build/$2
#keytool -genkey -v -keystore my-release-key.keystore -alias $2 -keyalg RSA -keysize 2048 -validity 10000 
cp /Users/vikasjindal/Desktop/Development/Vikas/$1/platforms/android/build/outputs/apk/android-release-unsigned.apk ./
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk $2
rm $3
/Users/vikasjindal/Library/Android/sdk/build-tools/27.0.2/zipalign -v 4 android-release-unsigned.apk $3
