import { Modal, Form, Input, Button, Select, Checkbox, notification } from "antd";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../../ui/Spinner";
import useFetchUsers from "../../../utils/fetchers/useFetchUsers.js";
import { useState, useEffect } from "react";
import { updateGuide, putSetGuideSelectedUser } from "../../../api";

const ModifyGuideModal = ({ visible, onCancel, onDelete }) => {

    const currentGuide = useSelector((state) => state.guides.guides);
    const { dataUsers } = useFetchUsers();
    const [isLoading, setIsLoading] = useState(false);
    const [isCheckDisabled, setIsCheckDisabled] = useState(true);
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(() => {
        form.setFieldsValue({
            guideTitle: currentGuide.title,
        });
    }, [currentGuide, form]);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            const foundUser = dataUsers.find((el) => el.id === values.selectUserId);
            const updateDataGuide = {...currentGuide, title: values.guideTitle};
            const updateDataUser = {...foundUser, currentGuide: values.guideTitle};
            
            if (values.showSetGuide) {
                putSetGuideSelectedUser(values.selectUserId, updateDataUser).then(() => {
                    notification.success({ message: "Гайд для пользователя установлен!" });
                }).catch((err) => {
                    notification.error({ message: `Ошибка установки гайда ${err}!` });
                })
            } else {
                updateGuide(currentGuide.id, updateDataGuide).then(() => {
                    notification.success({ message: "Название гайда успешно обновлено!" });
                }).catch((err) => {
                    notification.error({ message: `Ошибка обновления гайда ${err}!` });
                })
            }
        } catch(error) {
            notification.error({ message: "Ошибка валидации!" });
        }
    }

    const handleClearFieldUserSelect = () => {
        form.resetFields(['selectUserId']);
    }

    return (
        <Modal
            forceRender
            title="Модификатор гайда"
            open={visible}
            onCancel={onCancel}
            footer={isLoading ? [] : [
                <Button key="cancel" onClick={() => onCancel(handleClearFieldUserSelect)}>
                    Отмена
                </Button>,
                <Button key="submit" onClick={handleSubmit}>
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
                    <Input disabled={!isCheckDisabled}/>
                </Form.Item>
                <Form.Item
                    name="showSetGuide"
                    valuePropName="checked"
                    initialValue={false}
                >
                    <Checkbox onChange={() => setIsCheckDisabled(!isCheckDisabled)}>Установить гайд для пользователя</Checkbox>        
                </Form.Item>
                <Form.Item
                        name="selectUserId"
                        rules={[
                            {
                                required: !isCheckDisabled ? true : false,
                                message: ((item) => {
                                    if (!item && !isCheckDisabled) {
                                        return 'Необходимо выбрать пользователя'
                                    }
                                })
                            }
                        ]}
                >
                    <Select
                        style={{ width: '50%' }}
                        placeholder="Выберите пользователя"
                        onChange={() => {}}
                        disabled={isCheckDisabled}
                    >
                        {dataUsers.map((option) => (
                            <Option key={option.id} value={option.id}>
                                {option.last_name} {option.first_name}
                            </Option>
                        ))}
                    </Select>
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