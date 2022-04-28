import axios from 'axios'
import { useState } from 'react'
import ReactDOM from 'react-dom'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(() => e.target.value)
    }
    const changePassword = (e) => {
        setPassword(() => e.target.value)
    }

    const handleClick = () => {
        const loginParams = {
            email: email,
            password: password
        }
        axios
            // CSRF保護の初期化
            .get('/sanctum/csrf-cookie', { withCredentials: true })
            .then((response) => {
                // ログイン処理
                axios
                    .post(
                        '/login',
                        loginParams,
                        { withCredentials: true }
                    )
                    .then((response) => {
                        console.log(response.data)
                    })
            })
    }

    // SPA認証済みではないとアクセスできないAPI
    const handleUserClick = () => {
        axios.get('/api/user', { withCredentials: true }).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div>
            <p>
                メールアドレス
                <input value={email} onChange={changeEmail} type='email' />
            </p>
            <p>
                パスワード
                <input onChange={changePassword} />
            </p>
            <p>
                <button onClick={handleClick}>ログイン</button>
            </p>
            <p>
                <button onClick={handleUserClick}>ユーザー情報を取得</button>
            </p>
        </div>

    )
}

export default Login;

if (document.getElementById('Auth1')) {
    ReactDOM.render(<Login />, document.getElementById('Auth1'));
}
