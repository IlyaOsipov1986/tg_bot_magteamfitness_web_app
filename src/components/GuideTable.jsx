import { Tag, Table } from "antd";
import useFetchGuides from "../utils/fetchers/useFetchGuides";
import { formatDate } from "../utils/utils";
import Spinner from "../components/Spinner";

const GuideTable = () => {

  const {
    dataGuides,
    loading,
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

    if (loading) {
      return <Spinner/>
    }
    
    console.log(dataGuides)

    return (
        <>
        <Table
            rowKey={(record) => record.id}
            dataSource={dataGuides}
            columns={columns}
        />
    </> 
    )
}
export default GuideTable;