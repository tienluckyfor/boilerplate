# setup aws cli
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html
// download the macOS pkg file
// install iam
brew install aws-iam-authenticator
aws-iam-authenticator help
// config
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# key config
~/.aws/credentials
```
[default]
aws_access_key_id = AKIAZRNSXTLVNRITDTH5
aws_secret_access_key = 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
source_profile=default
role_arn=arn:aws:iam::655894223594:role/eksrole-socialhead

[serverlessUser]
aws_access_key_id=AKIAT63QYPMPR3CBGZXA
aws_secret_access_key=8E+nOwXucnozUQWzGZEKumJWzYei0+GLKH08Hmpa
phuocnguyen@phuocs-MBP sample-code % 
```
# switch profile
export AWS_PROFILE=default
export AWS_PROFILE=serverlessUser

