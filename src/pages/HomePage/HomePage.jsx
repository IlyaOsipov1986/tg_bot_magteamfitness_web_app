import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAuth } from "../../utils/hooks/useAuth.js";
import { removeUser } from "../../store/slices/userSlice.js";
import { Layout, Flex } from 'antd';
import { logOut } from '../../utils/utils.js';
import { useState } from 'react';
import UserTable from '../../components/UserTable.jsx';
import GuideTable from '../../components/GuideTable.jsx';
const { Header, Sider, Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: '100%',
};

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#ffffff',
};

const siderStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0F142D',
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px',
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: 'black',
    backgroundColor: '#F5F5F5',
    overflow: 'auto'
};

const menuItems = ['Список пользователей', 'Список гайдов']

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();
    const redirectLoginPage = useNavigate();
    const [activeItemMenu, setActiveItemMenu] = useState('');
    
    return isAuth.isAdmin ? (
        <Flex gap="middle" wrap className="h-screen">
            <Layout style={layoutStyle}>
                <Layout>
                    <Sider width="150px" style={siderStyle}>
                        <div className='h-14 p-2 flex flex-col justify-center text-left'>
                            <p>Вы вошли как:</p>
                            <p className='truncate'>{isAuth.login}</p>
                        </div>
                        <div className='flex flex-col'>
                            {menuItems.map((el, i) => {
                                return (
                                    <p onClick={() => setActiveItemMenu(el)} key={i} className='p-2 cursor-pointer text-left hover:bg-primary-gray hover:text-black'>
                                        {el}
                                    </p>
                                )
                            })}
                        </div>
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>
                            <p className='text-stone-900'>Личный кабинет администратора</p>
                            <button className='flex justify-center items-center m-3 w-24 rounded border border-solid border-[#0F142D] text-stone-900 hover:bg-primary-lightBlack hover:text-white' 
                                onClick={() => logOut(dispatch, removeUser, redirectLoginPage)}
                            >
                                Выход
                            </button>
                        </Header>
                        <Content style={contentStyle}>
                            {activeItemMenu === 'Список пользователей' && (
                                <UserTable/>
                            )}
                            {activeItemMenu === 'Список гайдов' && (
                                <GuideTable/>
                            )}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Flex>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage;