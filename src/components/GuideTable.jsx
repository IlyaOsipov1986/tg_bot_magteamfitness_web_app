import { Tag, Table } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import useFetchGuides from "../utils/fetchers/useFetchGuides";
import { formatDate } from "../utils/utils";
import Spinner from "./ui/Spinner";
import AddGuideModal from "./modals/AddGuideModal/AddGuideModal";
import ModifyGuideModal from "./modals/ModifyGuideModal/ModifyGuideModal";
import { addNewGuide } from "../api";

const GuideTable = () => {



  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUpdateModalVisible, setIspdateModalVisible] = useState(false);

  const {
    dataGuides,
    isLoading,
  } = useFetchGuides();
  
  const columns = [
      {
        title: 'Дата',
        dataIndex: 'created',
        key: 'created',
        render: (date) => formatDate(date)
      },
      {
        title: 'Название гайда',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Основной гайд',
        dataIndex: 'mainGuide',
        key: 'mainGuide',
        render: (tag) => (
          <>
            <Tag color={tag ? "green" : "red"}>{tag ? "+" : "-"}</Tag>
          </>
        )
      }
    ];

    const handleAddGuide = (guide) => {

      const currentDate = new Date();
      const fileTextDocument = guide.document.file;
      const formData = new FormData();
      formData.append("file", fileTextDocument);

      const dataGuide = {
        title: guide.guideTitle,
        contents: formData,
        mainGuide: guide.mainGuide,
        created: currentDate
      }
    
      addNewGuide(dataGuide);
    };

    const handleRowClick = (record) => {
      // removeGuide(record)
      setIspdateModalVisible(true);
    };

    return isLoading ? (
      <div className="block m-auto">
           <Spinner/>
      </div>
    ) : (
      <>
        <button className="flex items-center justify-center mb-4 text-sm p-2 w-40 rounded border border-solid border-[#0F142D] text-stone-900 hover:bg-primary-lightBlack hover:text-white"
          onClick={() => setIsModalVisible(true)}
        >
          Добавить гайд
        </button>
        <Table
          rowKey={(record) => record.id}
          dataSource={dataGuides}
          columns={columns}
          rowClassName="cursor-pointer"
          onRow={(record) => ({
            onClick: () => handleRowClick(record)
          })}
        />
        <AddGuideModal
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onAddGuide={handleAddGuide}
        />
        <ModifyGuideModal
          visible={isUpdateModalVisible}
          onCancel={() => setIspdateModalVisible(false)}
        />
      </>
    )
}
export default GuideTable;