## pyopenssl
```
// doesn't work
pip install pyopenssl
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
if __name__ == '__main__':
    app.run(ssl_context=('cert.pem', 'key.pem'))
// work
app.run(debug=True,
        # host=config('API_HOST'),
        # port=config('API_PORT'),
        # ssl_context=('cert.pem', 'key.pem'),
        ssl_context='adhoc'
)
```

## requirements.txt
```
pip freeze > requirements.txt
pip install -r requirements.txt
```
## Get Environment Variables
```
pip install python-decouple

// .env
USER=alex
KEY=hfy92kadHgkk29fahjsu3j922v9sjwaucahf

// env.py test
from decouple import config
API_USERNAME = config('USER')
API_KEY = config('KEY')
```
## setup venv from GIT
```
python3 -m venv env
source env/bin/activate
pip install pytest
pytest
```

## PyQt5
```
pip install PyQt5
pip install PyQtWebEngine
```

## build app file test
```
py2applet --make-setup hello.py
pip install virtualenv
virtualenv venv --system-site-packages
source venv/bin/activate
python setup.py py2app -A
./dist/hello.app/Contents/MacOS/hello
```
## build app file
```py
https://anyconv.com/png-to-icns-converter/
// setup.py
OPTIONS = {
    "iconfile": "hand-wave.icns",
    "argv_emulation": True,
}
python setup.py py2app
```
## build command file
```
//first line
#!/usr/bin/env python3
//rename file
calculator.py -> calculator.command
chmod +x calculator.command
```