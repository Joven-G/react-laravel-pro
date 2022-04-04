<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LaravelReact</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/test.css') }}" rel="stylesheet" />

</head>

<body>
    <div id='const' class="mb-4"></div>

    <div id='react_test'></div>

    <div id='test'></div>


    <h1 id='title'>簡単メモアプリ</h1>
    <input id='add-text' />
    <button id='add-button'>追加</button>
    <div class="container">
        <p>メモ一覧</p>
        <ul id='memo-list'></ul>
    </div>

    <a href="{{ route('form') }}" ;>飛ぶよ！</a>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/test.js') }}"></script>
    <link href="js/test.js" rel="stylesheet" />
</body>

</html>
