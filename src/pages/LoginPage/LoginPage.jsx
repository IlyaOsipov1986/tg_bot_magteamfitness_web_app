import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../store/slices/userSlice.js";
import { useTelegram } from "../../utils/hooks/useTelegram.js";
import { useAuth } from "../../utils/hooks/useAuth.js";

const buttonStyle = {
    width:'100%', 
    minHeight: '42px'
};

const LoginPage = () => {
    const dispatch = useDispatch();
    const redirectMainPage = useNavigate();
    const { queryId } = useTelegram();
    const { isAuth, setIsAuth } = useAuth();
  
    const handleLogin = (values) => {
        if (values.login === 'admin' && values.password === 'admin') {
            // dispatch(setUser({
            //     login: values.login,
            //     id: 1,
            //     accessToken: 'accessToken',
            //     refreshToken: 'refreshToken',
            //     isAdmin: true
            // }))
            setIsAuth({
                login: values.login,
                id: 1,
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
                isAdmin: true
            })

        } else {
            onFinishFailed('Неправильный логин или пароль!');
            return;
        }
    };

    useEffect(() => {
        if (isAuth.isAdmin === true) {
          // Navigate to the dashboard
          redirectMainPage('/');
        }
      }, [isAuth.isAdmin, redirectMainPage]);

    const onFinishFailed = (errorInfo) => {
        notification.error({ message: `${errorInfo}` });
    };

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
                    autoComplete="off"
                >
                    <Form.Item
                        label="Login"
                        name="login"
                        rules={[
                            {
                                required: true,
                                message: 'Введите логин',
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
                        <Button type="primary" htmlType="submit" style={buttonStyle}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                {/* <div className="text-sm">
                    Еще нет аккаунта? <Link to="/register" style={{color: '#1677ff'}}>Регистрация</Link>
                </div> */}
            </div>
        </div>
    )
}
export default LoginPage;