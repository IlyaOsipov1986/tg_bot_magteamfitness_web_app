import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAuth } from "../../utils/hooks/useAuth.js";
import { removeUser } from "../../store/slices/userSlice.js";
import { Layout, Flex } from 'antd';
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
    backgroundColor: '#1677ff',
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px',
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: 'black',
    backgroundColor: '#F5F5F5'
};

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();
    const redirectLoginPage = useNavigate();

    function logOut() {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            dispatch(removeUser());
            redirectLoginPage('/login', {replace: true });
        }
    }

    return isAuth.isAdmin ? (
        <Flex gap="middle" wrap className="h-screen">
            <Layout style={layoutStyle}>
                <Layout>
                    <Sider width="150px" style={siderStyle}>
                        <p className='h-16 text-center content-center'>{isAuth.login}</p>
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>
                            <p className='text-stone-900'>Личный кабинет администратора</p>
                            <button className='flex justify-center items-center m-3 w-24 rounded border border-solid border-black text-stone-900' onClick={logOut}>
                                Выход
                            </button>
                        </Header>
                        <Content style={contentStyle}>
                            <div>
                            
                            </div>
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