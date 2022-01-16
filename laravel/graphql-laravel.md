# auth
# https://lighthouse-php-auth.com/tutorials/getting-started/
composer require joselfonseca/lighthouse-graphql-passport-auth
composer require nuwave/lighthouse laravel/passport 
php artisan migrate:refresh; php artisan passport:install

// app/Models/User.php
+add+ use HasApiTokens;

// app/Providers/AuthServiceProvider.php
+add in [boot function]+ Passport::routes(); 

// config/auth.php
'driver' => 'token' --> 'driver' => 'passport'

mkdir -p graphql && cp vendor/nuwave/lighthouse/src/default-schema.graphql graphql/schema.graphql
php artisan vendor:publish --provider="Joselfonseca\LighthouseGraphQLPassport\Providers\LighthouseGraphQLPassportServiceProvider"

// config/lighthouse-graphql-passport.php
'schema' => null --> 'schema' => base_path('graphql/auth.graphql')

// graphql/auth.graphql (L89: extend type Mutation --> [end])
--> graphql/schema.graphql
then remove 'extend'

// graphql-playground
composer require mll-lab/laravel-graphql-playground
http://laravel-boilerplate.test/graphql-playground

// register
mutation {
  register(
    input: {
      name: "myemail@email.com"
      email: "myemail@email.com"
      password: "123456789qq"
      password_confirmation: "123456789qq"
    }
  ) {
    status
  }
}

// login
mutation {
  login(input: { username: "myemail@email.com", password: "123456789qq" }) {
    access_token
    refresh_token
    expires_in
    token_type
    user {
      id
      email
      name
    }
  }
}

// query
query {
  users {
    data {
      id
      name
      email
    }
  }
}


// oauth_clients
php artisan passport:install
SELECT * FROM `oauth_clients`
PASSPORT_CLIENT_ID=2
PASSPORT_CLIENT_SECRET=3RDW6tyyBDFr8Wu2hZKmnl8YlYE8C9gpw2dOKUwL

# lighthouse only
// passing it if already setup auth-lighthouse
php artisan vendor:publish --tag=lighthouse-schema

php artisan vendor:publish --tag=lighthouse-config
// config/cors.php
'paths' => ['api/*', 'sanctum/csrf-cookie'] --> 'paths' => ['api/*', 'sanctum/csrf-cookie', 'graphql']

docker-compose exec workspace bash
cd /var/www/codeby/codeby/mockapi_be-laravel; 
php artisan lighthouse:clear-cache
