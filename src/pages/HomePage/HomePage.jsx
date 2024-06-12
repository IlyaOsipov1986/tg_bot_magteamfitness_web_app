import { Navigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useAuth} from "../../utils/hooks/useAuth.jsx";
import {removeUser} from "../../store/slices/userSlice.js";
import { Layout, Flex } from 'antd';
import useLocalstorage from "../../utils/hooks/useLocalstorage.jsx";
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: '100%',
};

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
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
    backgroundColor: '#ffffff',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const HomePage = () => {
    const dispatch = useDispatch();
    const { email,
        accessToken,
        refreshToken,
        id } = useAuth();

    const [auth, setAuth] = useLocalstorage({}, 'user');

    console.log(auth)

    return email ? (
        <Flex gap="middle" wrap className="h-screen">
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Header
                    <button onClick={() => dispatch(removeUser())}>Выход</button>
                </Header>
                <Layout>
                    <Sider width="150px" style={siderStyle}>
                        Sider
                    </Sider>
                    <Content style={contentStyle}>
                        <div>
                            1
                        </div>
                        <div>
                            1
                        </div>
                    </Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Flex>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage;