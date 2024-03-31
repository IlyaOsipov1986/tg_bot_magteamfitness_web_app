import {useState, useEffect} from "react";
import { Button, Form, Input, Space } from 'antd';
import {Link} from "react-router-dom";

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

    const [form] = Form.useForm();

    return (
        <div>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="age"
                    label="Age"
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
                        <SubmitButton form={form}>Submit</SubmitButton>
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
            <Link to="/login">На страницу авторизации</Link>
        </div>
    )
}
export default RegisterPage;