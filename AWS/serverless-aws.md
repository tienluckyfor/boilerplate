# setup serverless aws
https://console.aws.amazon.com/iam/home#/users$new?step=details
User name (ServerlessAccount), Access type (Programmatic access), 
Set permissions (Attach existing policies directly), AdministratorAccess

npm install -g serverless
serverless config credentials --provider aws --key AKIAT63QYPMPR3CBGZXA --secret 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 --profile serverlessUser

serverless create --template aws-nodejs --path myServerlessProject
vi serverless.yml
```
provider:
  name: aws
  runtime: nodejs12.x
  profile: serverlessUser
  region: ap-northeast-1
functions:
  hello:
    handler: handler.hello
```

serverless deploy