<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>foemテスト</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />

</head>

<body>
    <div class="card w-50 m-auto mt-3">
        <h5 class="card-header">登録テスト</h5>
        <div class="card-body">
            <form method="POST" action="{{ route('form_test') }}">
                {{ csrf_field() }}
                <div class="form-group mb-3">
                    <label for="exampleInputtext1" class="form-label">text</label>
                    <input type="text" name="name" class="form-control" id="exampleInputtext1"
                        value="{{ old('name') }}">
                </div>
                <div class="form-group">
                    <label for="formInputEmail">email</label>
                    <input type="email" name="email" class="form-control" id="exampleInputtext1"
                        value="{{ old('email') }}">
                </div>
                <div class="form-group">
                    <label for="formInputEmail">password</label>
                    <input type="password" name="password" class="form-control" id="inputPassword"
                        value="{{ old('password') }}">
                </div>
                <button type="submit" class="mt-3 btn btn-primary">送信</button>
            </form>
        </div>
    </div>
</body>

</html>
