import { Modal, Form, Input, Button, notification, Checkbox, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import { useState } from "react";

const AddGuideModal = ({ visible, onCancel, onAddGuide }) => {

    const [fileList, setFileList] = useState([]); 
    const [form] = Form.useForm();

    const handleUpload = ({ file, onSuccess, onError }) => {

        const isTxtFile = file.type === 'text/plain';
        const isPdfFile = file.type === 'application/pdf';
        const isLt2m = file.size / 1024 / 1024 < 2;
    
        setTimeout(() => {
            if (!isTxtFile & !isPdfFile) {
                onError('Ошибка: файл должен быть текстовым документом .txt или .pdf');
                notification.error({ message: "Ошибка: файл должен быть текстовым документом .txt или .pdf" });
            } else if (!isLt2m) {
                onError('Ошибка: файл должен быть меньше 2MB!');
                notification.error({ message: "Ошибка: файл должен быть меньше 2MB" }); 
            } else {
                onSuccess('ok');
                notification.success({ message: "Файл успешно загружен!" });
            }
        }, 1000)
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
        
            const isTxtFile = values.document.file.type === 'text/plain';
            const isPdfFile = values.document.file.type === 'application/pdf';

            if (fileList.length === 0) {
                notification.error({ message: "Ошибка валидации!" });
                form.resetFields();
                return;
            }

            if (!isTxtFile & !isPdfFile) {
                notification.error({ message: "Ошибка валидации!" });
                return;
            }
            onAddGuide(values);
            setFileList([]);
            form.resetFields();
            onCancel();
            notification.success({ message: "Гайд успешно добавлен!" });
        } catch(error) {
            notification.error({ message: "Ошибка валидации!" });
        }
    }

    const handleChange = ({fileList}) => {
        setFileList(fileList);
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
                    name="guideTitle"
                    label="Название гайда"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите название гайда!"
                        }
                    ]}
                >
                    <Input placeholder="Введите название"/>
                </Form.Item>
                <Form.Item
                    name="document"
                    label="Загрузите документ"
                    values={fileList}
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, загрузите текстовый документ!",
                        },
                    ]}
                >
                    <Upload
                        fileList={fileList}
                        onChange={handleChange}
                        customRequest={handleUpload}
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined/>}>Выберите файл</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="mainGuide"
                    valuePropName="checked"
                    initialValue={false}
                >
                    <Checkbox>Сделать основным</Checkbox>
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