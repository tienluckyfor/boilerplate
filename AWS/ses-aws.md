# create ses
https://ap-southeast-1.console.aws.amazon.com/ses
SMTP Settings > Create My SMTP Credentials

# .env
# SMTP Username
MAIL_USERNAME=AKIAT63QYPMPVPWOB7HE
# SMTP Password
MAIL_PASSWORD=BI+NEfZ8aN2LEI7jinM2/ES+zMoKggrYf2nZtxenPJAO
# https://ap-southeast-1.console.aws.amazon.com/ses
# SMTP Settings > Server Name
MAIL_HOST=email-smtp.ap-southeast-1.amazonaws.com
MAIL_PORT=25
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tien.luckyfor@gmail.com

# approval
We use SES for 4 case below: 
- Notify when our use register by email address. 
- Send a password when they are forget the password. 
- Notify when they buy a character from our application. 
- Notify when they are selling them.