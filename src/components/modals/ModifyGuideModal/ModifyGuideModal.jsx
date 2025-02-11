import { Modal, Form, Input, Button, notification, Switch } from "antd";
import PropTypes from 'prop-types';
import Spinner from "../../ui/Spinner";
import { deleteGuide } from "../../../api";
import { useState } from "react";

const ModifyGuideModal = ({ visible, onCancel, handleUpdateGuide }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleDeletGuide = (id) => {
        setIsLoading(true);
        deleteGuide(id).then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }).catch(() => {
            setIsLoading(false);
            notification.error({ message: "Ошибка удаления гайда!" });
        })
    }

    return (
        <Modal
            title="Модификатор гайда"
            open={visible}
            onCancel={onCancel}
            footer={isLoading ? <Spinner/> : [
                <Button key="cancel" onClick={onCancel}>
                    Отмена
                </Button>,
                <Button key="submit" onClick={handleUpdateGuide}>
                    Сохранить
                </Button>,
                <Button key="delete" onClick={handleDeletGuide}>
                    Удалить
                </Button>
        ]}
        >
            <Form layout="vertical">
                <Form.Item
                    name="guideTitle"
                    label="Изменить название гайда"
                    rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите название гайда!"
                            }
                        ]}
                >
                    <Input placeholder="Введите название"/>
                </Form.Item>
            </Form>
        </Modal>
)}

ModifyGuideModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    handleUpdateGuide: PropTypes.func
}

export default ModifyGuideModal;