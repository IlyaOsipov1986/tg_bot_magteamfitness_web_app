import { useState, useEffect, useCallback } from "react";
import { Button, Form, Input, Space } from 'antd';
import { useTelegram } from "../../utils/hooks/useTelegram.js";

const RegisterPage = () => {

    const { onCLose, tg } = useTelegram();
    const [form] = Form.useForm();
    const [submittable, setSubmittable] = useState(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    const handleRegister = () => {}

    const onSendData = useCallback(() => {
        const data = {
            last_name: values.lastName,
            first_name: values.firstName,
            email: values.email,
            password: values.password 
        }
        tg.sendData(JSON.stringify(data));
        onCLose();
    }, [values])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [submittable])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Зарегистрироваться'
        })
    }, [])

    useEffect(() => {
        if(!submittable) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [submittable])

    return (
        <div className="absolute w-full h-full bg-primary-gold">
            <div className="login-register-page-wrap">
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleRegister}>
                   
                    <Form.Item
                        name="lastName"
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Фамилия"/>
                    </Form.Item>

                    <Form.Item
                        name="firstName"
                        label="Имя"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Имя"/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: "Неверный формат email"
                            },
                        ]}
                    >
                        <Input placeholder="Введите email"/>
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
                        <Input placeholder="Введите пароль"/>
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button htmlType="reset">Очистить данные</Button>
                        </Space>
                    </Form.Item>
                </Form>
                {/* <div className="text-sm">
                    <Link to="/login" style={{color: '#1677ff'}}>На страницу авторизации</Link>
                </div> */}
            </div>
        </div>
    )
}
export default RegisterPage;