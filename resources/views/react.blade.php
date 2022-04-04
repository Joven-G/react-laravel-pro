<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LaravelReact</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body>
    <div id="react"></div>

    <a href="{{ route('form') }}" ;>飛ぶよ！</a>
    <a href="{{ route('react_test') }}" ;>reactTestへ！</a>

</body>
<script src="{{ asset('js/app.js') }}"></script>

</html>
