# install tailwind-without-post-css
# https://tailwindcss.com/docs/installation#using-tailwind-without-post-css
// assets
mkdir -p assets/css; cd assets; npm init -y; npm install tailwindcss;
cd css; npx tailwindcss init;
vi tailwind.css;
[tailwind.css](assets/css/tailwind.css)

# generator tailwind-output.css
cd assets/css;
npx tailwindcss build tailwind.css -o tailwind-output.css
cd tailwindcss/assets/css; npx tailwindcss build tailwind.css -o tailwind-output.css;

# use
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="assets/css/tailwind-output.css" />

# responsive
<meta name="viewport" content="width=device-width, initial-scale=1.0">

# reactjs tailwindcss