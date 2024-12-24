import { Button, notification, Space, Table } from "antd";
import { useEffect, useState } from "react";

const GuideTable = () => {

    const [data, setData] = useState([]);
    
        const columns = [
            {
              title: 'Дата',
              dataIndex: 'date',
              key: 'date',
            },
            {
              title: 'Название гайда',
              dataIndex: 'parameter1',
              key: 'parameter1',
            },
            {
              title: 'Основной гайд',
              dataIndex: 'parameter2',
              key: 'parameter2',
            }
          ];
        
    return (
        <>
        <Table
            dataSource={data}
            columns={columns}
        />
    </> 
    )
}
export default GuideTable;