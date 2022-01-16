

Route::get('/test', function () {
    $path = public_path() . "/upload_s3/background/1.jpg";
    $out_path = public_path() . "/upload_s3/background/1.wepb";
    jcphp01_generate_webp_image($path, $out_path);
});

function jcphp01_generate_webp_image($file, $outputFile, $compression_quality = 80)
{
    if (!file_exists($file)) {
        return false;
    }
    if (file_exists($outputFile)) {
        return $outputFile;
    }
//    $file_type = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    $file_type = strtolower(mime_content_type($file));
    $file_type = str_replace('image/', '', $file_type);

    if (function_exists('imagewebp')) {
        switch ($file_type) {
            case 'jpeg':
            case 'jpg':
                $image = imagecreatefromjpeg($file);
                break;
            case 'png':
                $image = imagecreatefrompng($file);
                imagepalettetotruecolor($image);
                imagealphablending($image, true);
                imagesavealpha($image, true);
                break;
            case 'gif':
                $image = imagecreatefromgif($file);
                break;
            default:
                return false;
        }
        $result = imagewebp($image, $outputFile, $compression_quality);
        if (false === $result) {
            return false;
        }
        imagedestroy($image);
        return $outputFile;
    } elseif (class_exists('Imagick')) {
        $image = new Imagick();
        $image->readImage($file);
        if ($file_type === 'png') {
            $image->setImageFormat('webp');
            $image->setImageCompressionQuality($compression_quality);
            $image->setOption('webp:lossless', 'true');
        }
        $image->writeImage($outputFile);
        return $outputFile;
    }
    return false;
}