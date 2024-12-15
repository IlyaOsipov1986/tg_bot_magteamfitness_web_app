import { Button, Checkbox, Form, Input } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice.js";

const tg = window.Telegram.WebApp;

const LoginPage = () => {
    const dispatch = useDispatch();
    const redirectMainPage = useNavigate();

    const handleLogin = (values) => {
      
    };

    // const handleLogin = (values) => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, values.email, values.password)
    //         .then(({user}) => {
    //             dispatch(setUser({
    //                 email: user.email,
    //                 id: user.uid,
    //                 accessToken: user.accessToken,
    //                 refreshToken: user.stsTokenManager.refreshToken
    //             }))
    //             redirectMainPage('/');
    //         })
    //         .catch((err) => console.log(err));
    // };

    const onFinishFailed = (errorInfo) => {

    };

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="absolute w-full h-full bg-primary-gold">
            <div className="login-register-page-wrap">
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Введите email',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:'100%', minHeight: '42px'}}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                <div className="text-sm">
                    Еще нет аккаунта? <Link to="/register" style={{color: '#1677ff'}}>Регистрация</Link>
                </div>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}
export default LoginPage;