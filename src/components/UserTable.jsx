import { Button, notification, Space, Table } from "antd";
import { formatDate } from "../utils/utils";
import useFetchUsers from "../utils/fetchers/useFetchUsers";
import Spinner from "./ui/Spinner";

const UserTable = () => {

  const { dataUsers, isLoading, refetch } = useFetchUsers();

  const columns = [
      {
        title: 'Дата создания',
        dataIndex: 'created',
        key: 'created',
        render: (date) => formatDate(date)
      },
      {
        title: 'Имя',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title:  'Фамилия',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Гайд',
        dataIndex: 'currentGuide',
        key: 'currentGuide',
        render: (item) => <p style={{color: item ? '' : 'red'}}>{item ? item : 'Гайд не выбран'}</p>
      },
    ];
    
    return isLoading ? (
      <div className="block m-auto">
         <Spinner/>
      </div>
    ) : (
      <Table
        rowKey={(record) => record.id}
        dataSource={dataUsers}
        columns={columns}
     />
  )  
}
export default UserTable;