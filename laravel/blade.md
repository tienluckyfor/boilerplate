
# loop blade
```
@for ($i = 0; $i < 10; $i++)
@endfor

@foreach ($users as $user)
@endforeach

@forelse ($users as $user)
@empty
@endforelse

@while (true)
@endwhile
```

# stuff blade
```
@csrf

@include('layouts.header')

@php
@endphp

{{ request()->get('balls') }}
```