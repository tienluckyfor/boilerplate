# s3 upload file reactjs
<input type="file" onChange={(e) => uploadFile(e.target.files[0])}/>
const uploadFile = (file) => {
    const params = {
        ACL: 'public-read',
        Key: file.name,
        ContentType: file.type,
        Body: file,
    }
    myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            // that's how you can keep track of your upload progress
            this.setState({
                progress: Math.round((evt.loaded / evt.total) * 100),
            })
        })
        .send((err) => {
            if (err) {
                // handle the error here
            }
        })
}

# setup s3 reactjs
// npm
npm install aws-sdk --save
// create Bucket
https://s3.console.aws.amazon.com/s3
Permissions > Block public access (bucket settings) > Edit > Uncheck Block all public access > Save
Permissions > Bucket policy > Edit
{
    "Version": "2012-10-17",
    "Id": "Policy1604680015048",
    "Statement": [
        {
            "Sid": "AllowEveryoneReadOnlyAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::smile-eye/*",
                "arn:aws:s3:::smile-eye"
            ]
        }
    ]
}
Permissions > Bucket policy > Edit
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
// create IAM
https://console.aws.amazon.com/iam
User > Add user > Programmatic access > Set permissions > AmazonS3FullAccess

// key
AWS.config.update({
    accessKeyId: `AKIAT63QYPMP2POPA3PQ`,
    secretAccessKey: `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`
})
var myBucket = new AWS.S3({
    params: {Bucket: 'ppe-s3'},
    region: 'ap-northeast-1',
})
