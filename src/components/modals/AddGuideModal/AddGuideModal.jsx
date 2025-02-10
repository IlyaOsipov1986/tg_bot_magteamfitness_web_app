import { Modal, Form, Input, Button, notification } from "antd";
import PropTypes from 'prop-types';

const AddGuideModal = ({ visible, onCancel, onAddGuide }) => {

    const [form] = Form.useForm();

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            onAddGuide(values);
            form.resetFields();
            onCancel();
            notification.success({ message: "Гайд успешно добавлен!" });
        } catch(error) {
            notification.error({ message: "Ошибка валидации!" });
        }
    }

    return (
        <Modal
            title="Добавить новый гайд"
            open={visible}
            onCancel={onCancel}
            footer={[
                <Button key="canel" onClick={onCancel}>
                    Отмена
                </Button>,
                <Button key="submit" onClick={handleSubmit}>
                    Добавить
                </Button>
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="guide"
                    label="Название гайда"
                    rules={[{
                        required: true,
                        message: "Пожалуйста введите название гайда!"
                    }]}
                >
                    <Input placeholder="Введите название"/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

AddGuideModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onAddGuide: PropTypes.func
}

export default AddGuideModal;