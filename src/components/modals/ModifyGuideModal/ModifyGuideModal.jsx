import { Modal, Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../../ui/Spinner";
import { useState, useEffect } from "react";

const ModifyGuideModal = ({ visible, onCancel, onDelete, handleUpdateGuide }) => {

    const currentGuide = useSelector((state) => state.guides.guides);
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            guideTitle: currentGuide.title,
        });
      }, [currentGuide, form]);
    
    return (
        <Modal
            title="Модификатор гайда"
            open={visible}
            onCancel={onCancel}
            footer={isLoading ? [] : [
                <Button key="cancel" onClick={onCancel}>
                    Отмена
                </Button>,
                <Button key="submit" onClick={handleUpdateGuide}>
                    Сохранить
                </Button>,
                <Button key="delete" onClick={() => onDelete(currentGuide.id, setIsLoading)}>
                    Удалить
                </Button>
        ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="guideTitle"
                    label="Изменить название гайда"
                    onChange={() => {}}
                    rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите название гайда!"
                            }
                        ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
                {isLoading && <Spinner/>}
        </Modal>
)}

ModifyGuideModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    handleUpdateGuide: PropTypes.func
}

export default ModifyGuideModal;