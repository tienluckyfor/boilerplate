# local -> s3 laravel (faster)
$fileName = 1;
$filePath = storage_path("app/public/$fileName.xml");
file_put_contents($filePath, 'hello world', FILE_APPEND);
$s3Path = 'facebook_feed/'.$fileName . '.xml';
Storage::disk('s3')->put($s3Path, \fopen($filePath, 'rb+'));
Storage::disk('s3')->setVisibility($s3Path, 'public');

# s3 append file php
use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;
Route::get('/s3', function () {
    $bucket = config('filesystems.disks.s3.bucket');
    $s3 = new Aws\S3\S3Client([
        'version'     => 'latest',
        'region'      => config('filesystems.disks.s3.region'),
        'credentials' => [
            'key'      => config('filesystems.disks.s3.key'),
            'secret'   => config('filesystems.disks.s3.secret'),
        ]
    ]);
    $s3->registerStreamWrapper();
    $filePath = 'hello_again_world.txt';
    echo "Creating a second object with key {$filePath} using stream wrappers\n";
    file_put_contents("s3://{$bucket}/{$filePath}", 'nvt Hello Again!', FILE_APPEND);
    // or
    $fp = fopen("s3://{$bucket}/{$filePath}", 'a');
    fwrite($fp, $rows);
    fflush($fp);
    fclose($fp);
    $s3->putObjectAcl([
        'Bucket' => $bucket,
        'Key' => $filePath,
        'ACL' => 'public-read'
    ]);
    dd(1);
});

# s3 append file laravel
// append file
Storage::disk('s3')->append('file.log', 'Appended Text');
// store file
$path = $request->file('image')->store('images', 's3');
Storage::disk('s3')->setVisibility($path, 'private');
Storage::disk('s3')->url($path);

# setup s3 laravel
// composer
composer require league/flysystem-aws-s3-v3
// create s3
https://s3.console.aws.amazon.com/s3
Create Bucket
// create IAM
https://console.aws.amazon.com/iam/home#/users$new?step=details
User > Add user > Programmatic access > Set permissions > AmazonS3FullAccess
// .env
AWS_ACCESS_KEY_ID=AKIAT63QYPMP2POPA3PQ #IAM user Access key ID
AWS_SECRET_ACCESS_KEY=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 #IAM user Secret access key
AWS_DEFAULT_REGION=ap-southeast-1 #AWS service endpoints of S3 bucket
AWS_BUCKET=tiennv-test-s3 #S3 bucket name
AWS_URL=https://tiennv-test-s3.s3.ap-southeast-1.amazonaws.com/
