import { Modal, Form, Input, Button, Select } from "antd";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../../ui/Spinner";
import useFetchUsers from "../../../utils/fetchers/useFetchUsers.js";
import { useState, useEffect } from "react";

const ModifyGuideModal = ({ visible, onCancel, onDelete, handleUpdateGuide }) => {

    const currentGuide = useSelector((state) => state.guides.guides);
    const { dataUsers } = useFetchUsers();
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;

    console.log(dataUsers)

    useEffect(() => {
        form.setFieldsValue({
            guideTitle: currentGuide.title,
        });
    }, [currentGuide, form]);

    function onChange(value) {
        console.log(`Selected: ${value}`);
    }
    
    function onSearch(val) {
        console.log('Search:', val);
    }

    return (
        <Modal
            forceRender
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
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a fruit"
                optionFilterProp="first_name"
                onChange={onChange}
                onSearch={onSearch}
                >
                {dataUsers.map((option) => (
                    <Option key={option.id} value={option.id}>
                        {option.last_name} {option.first_name}
                    </Option>
                ))}
            </Select>
        </Modal>
)}

ModifyGuideModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    handleUpdateGuide: PropTypes.func
}

export default ModifyGuideModal;