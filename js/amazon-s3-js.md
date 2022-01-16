# setup amazon s3 js
https://s3.console.aws.amazon.com/s3/buckets/tiennv-test-s3
> permissions

# setup amazon s3 js
// IAM
https://console.aws.amazon.com/iam
User > Add user > Programmatic access > Set permissions > AmazonS3FullAccess, AmazonAPIGatewayInvokeFullAccess
// Apigateway
https://ap-southeast-1.console.aws.amazon.com/apigateway/main/apis?region=ap-southeast-1
Create API > REST API > Build > New API > Create API
At /(root) > Actions > Create Resource > /{folder}/{item}
At /(root) > Actions > Create Method > GET
// - GET
Integration type (AWS Service), AWS Region (ap-southeast-1), AWS Service (S3), HTTP method (GET), 
Action Type (Use path override), Path override (optional) (/), Execution role (arn:aws:iam::272430037791:user/postman)
Action Type (Use path override), Path override (optional) (/), Execution role (arn:aws:iam::272430037791:role/apigAwsProxyRole)
// - GET - Method Execution
Authorization (AWS_IAM), 
// - GET - Method Response
Add Header ( 200: Timestamp, Content-Length, Content-Type)
Add Response (400, 500)
// - GET - Integration Response
200 > Header Mappings > 
Timestamp (integration.response.header.Date), Content-Length (integration.response.header.Content-Length), Content-Type	(integration.response.header.Content-Type)
Add integration response > HTTP status regex (4\d{2}), Method response status (400) > Save
Add integration response > HTTP status regex (5\d{2}), Method response status (500) > Save
// - GET - Method Execution > Test
s3-host-name/bucket/key
s3-ap-southeast-1.amazonaws.com/tiennv-test-s3/key
https://tiennv-test-s3.s3-ap-southeast-1.amazonaws.com/facebook_feed/17e62166fc8586dfa4d1bc0e1742c08b.xml