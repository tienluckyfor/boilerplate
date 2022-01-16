## install
```
mkdir -p -m 777 assets/css; cd assets
npm init -y
npm install tailwindcss
cd css; npx tailwindcss init; vi tailwind.css
copy from [tailwind.css]
```
# processing
```
cd assets/css;
npx tailwindcss build tailwind.css -o tailwind-output.css

cd assets/css; npx tailwindcss build tailwind.css -o tailwind-output.css;
```

# using

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="assets/css/tailwind-output.css" />
```
