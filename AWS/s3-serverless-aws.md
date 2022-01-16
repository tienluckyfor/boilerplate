[serverless-aws](./serverless-aws.md)

# setup s3 serverless aws
npm install --save serverless-s3-sync
vi serverless.yml
```
provider:
  name: aws
  runtime: nodejs12.x
  profile: serverlessUser
  region: ap-northeast-1

plugins: 
  - serverless-s3-sync

custom:
  s3Sync: 
    - bucketName: myserverlessprojectuploadbucket-123123-nvt
      localDir: UploadData

functions:
  hello:
    handler: handler.hello

resources:
 Resources:
   DemoBucketUpload:
     Type: AWS::S3::Bucket
     Properties:
       BucketName: myserverlessprojectuploadbucket-123123-nvt
```
