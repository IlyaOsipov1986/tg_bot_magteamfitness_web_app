import {useState, useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Button, Form, Input, Space } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice.js";

const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);

    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            {children}
        </Button>
    );
};

const RegisterPage = () => {
    const dispatch = useDispatch();
    const redirectMainPage = useNavigate();
    const [form] = Form.useForm();

    const handleRegister = (values) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password, values.displayName)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                redirectMainPage('/');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleRegister}>
                <Form.Item
                    name="displayName"
                    label="Фамилия"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="secondName"
                    label="Имя"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <SubmitButton form={form}>Зарегистрироваться</SubmitButton>
                        <Button htmlType="reset">Очистить данные</Button>
                    </Space>
                </Form.Item>
            </Form>
            <Link to="/login">На страницу авторизации</Link>
        </div>
    )
}
export default RegisterPage;