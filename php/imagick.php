<?php

$filePath = __DIR__.'\optimize-img-before.jpeg';
$im = new \Imagick($filePath);
$im->setImageCompression(\Imagick::COMPRESSION_JPEG);
$im->setImageCompressionQuality(85);
$im->stripImage();
$im->setInterlaceScheme(\Imagick::INTERLACE_PLANE);
$im->gaussianBlurImage(0.05, 5);

// resize
/* $size = $im->getImageGeometry();
$maxWidth = 1920;
$maxHeight = 1080;
if($size['width'] >= $size['height']){
  if($size['width'] > $maxWidth){
    $im->resizeImage($maxWidth, 0, \Imagick::FILTER_LANCZOS, 1);
  }
}
else{
  if($size['height'] > $maxHeight){
    $im->resizeImage(0, $maxHeight, \Imagick::FILTER_LANCZOS, 1);
  }
}
*/

$filePathOut = __DIR__.'\optimize-img-after.jpg';
$im->writeImage($filePathOut);