import { Button, notification, Space, Table } from "antd";
import { useEffect, useState } from "react";

const UserTable = () => {

    const [data, setData] = useState([]);

    const columns = [
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Имя',
          dataIndex: 'parameter1',
          key: 'parameter1',
        },
        {
          title:  'Фамилия',
          dataIndex: 'parameter2',
          key: 'parameter2',
        },
        {
          title: 'email',
          dataIndex: 'parameter3',
          key: 'parameter3',
        },
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
export default UserTable;