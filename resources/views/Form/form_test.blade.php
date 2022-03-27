<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body>
    <div class="card w-50 m-auto mt-3">
        <h5 class="card-header">登録テスト</h5>
        <div class="card-body">
            <div class="form-group">
                <label for="formInputEmail">{{ $name }}さん、登録ありがとうございます。</label>
            </div>
        </div>
    </div>
    <a href="{{ route('react') }}">topへ</a>
</body>

</html>
