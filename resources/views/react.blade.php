<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LaravelReact</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body>
    <div class="container py-5">
        <div id="app"></div>
    </div>

    <div id="count"></div>

    <div id='form' class="mt-3"></div>



    <a href="{{ route('form') }}" ;>飛ぶよ！</a>
    <a href="{{ route('react_test') }}" ;>reactTestへ！</a>

</body>

</html>
