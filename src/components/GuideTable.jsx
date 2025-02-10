import { Tag, Table } from "antd";
import { useState } from "react";
import useFetchGuides from "../utils/fetchers/useFetchGuides";
import { formatDate } from "../utils/utils";
import Spinner from "./ui/Spinner";
import AddGuideModal from "./modals/AddGuideModal/AddGuideModal";
import { addNewGuide } from "../api";

const GuideTable = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

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

      const dataGuide = {
        title: guide.guideTitle,
        contents: 'content_1',
        mainGuide: guide.mainGuide,
        created: currentDate
      }
      
      addNewGuide(dataGuide);
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
        />
        <AddGuideModal
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onAddGuide={handleAddGuide}
        />
      </>
    )
}
export default GuideTable;