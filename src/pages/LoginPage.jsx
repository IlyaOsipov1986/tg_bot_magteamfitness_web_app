import { Button, Checkbox, Form, Input } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice.js";

const LoginPage = () => {
    const dispatch = useDispatch();
    const redirectMainPage = useNavigate();

    const handleLogin = (values) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                redirectMainPage('/');
            })
            .catch((err) => console.log(err));
    };

    const onFinishFailed = (errorInfo) => {

    };

    return (
        <div className="login-page">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
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
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}
export default LoginPage;