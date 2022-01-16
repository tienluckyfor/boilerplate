# login user
Auth::user();
Auth::id();
auth('api')->user();
auth('api')->id();

# make auth
composer require laravel/ui
php artisan ui vue --auth
npm install && npm run dev

# username auth
app/Http/Controllers/Auth/LoginController.php
public function login(Request $request){
    $input = $request->all();
    $this->validate($request, [
        'username' => 'required',
        'password' => 'required',
    ]);
    $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
    if(auth()->attempt(array($fieldType => $input['username'], 'password' => $input['password']))){
        return redirect()->route('home');
    }else{
        return redirect()->route('login')
            ->with('error','Email-Address And Password Are Wrong.');
    }
}

# register
app/Http/Controllers/Auth/RegisterController.php
