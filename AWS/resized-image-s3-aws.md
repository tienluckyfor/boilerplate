# create bucket s3
https://s3.console.aws.amazon.com/s3/bucket/create?region=ap-southeast-1
ppe-tiennv
ppe-tiennv-resized

# create role lambda
https://console.aws.amazon.com/iam/home?#/roles$new?step=type
type (AWS service), case (Lambda), policies (AWSLambdaBasicExecutionRole, AWSXRayDaemonWriteAccess), Role name (lambda-role)

# create lambda
https://ap-southeast-1.console.aws.amazon.com/lambda/home?region=ap-southeast-1#/create/function
Function name (Create-Thumbnail), Runtime (Python 3.7), Excution role (Use an existing role), Role (lambda-role)
Add trigger > Select (S3) > Bucket (tiennv-ppe) > Add

// failure

