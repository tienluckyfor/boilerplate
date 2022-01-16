# theme
https://colorlib.com/wp/responsive-html-email-templates/

# setup-email-laravel
composer require guzzlehttp/guzzle
php artisan make:mail Registered --markdown=emails.registered

# app/Mail/Registered.php
:21
$this->arr = $arr;
$this->subject('Sample title');
:35
return $this->markdown('emails.registered')->with($this->arr);

# send email
Mail::to('tien.luckyfor@gmail.com')->send(new Registered([
    'title' => 'title',
    'contents' => [
        '1',
        '2',
    ],
]));

# .env gmail
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=tien.luckyfor@gmail.com
MAIL_PASSWORD=ovtzzhewvffblvyn
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=tien.luckyfor@gmail.com
MAIL_FROM_NAME="${APP_NAME}"


# .env sendgrid
MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=465
MAIL_USERNAME="apikey"
MAIL_PASSWORD="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"
MAIL_ENCRYPTION=SSL
MAIL_FROM_NAME="${APP_NAME}"
MAIL_FROM_ADDRESS=from@codeby.com
