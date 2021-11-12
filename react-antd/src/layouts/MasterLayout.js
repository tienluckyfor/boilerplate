import {Layout, Menu, Space, Button} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authLogout, authsSelector, getMe} from "pages/auth/authsSlice";
import {useEffect} from "react";

const {Header, Content, Footer} = Layout;

const MasterLayout = ({children}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const {gMe} = useSelector(authsSelector)
    useEffect(() => {
        dispatch(getMe())
    }, [])

    return <Layout className="bg-gray-100">
        <Header className="bg-white px-4">
            <section className="max-w-screen-lg m-auto flex justify-between ">
                <Menu selectedKeys="/" mode="horizontal" className="-mx-4"
                      onClick={(item) => {
                          navigate(item.key)
                      }}
                >
                    <Menu.Item key="/">
                        <b>{process.env.REACT_APP_NAME}</b>
                    </Menu.Item>
                    <Menu.Item key="/MenuItem1">
                        Menu Item 1
                    </Menu.Item>
                    <Menu.Item key="/MenuItem2">
                        Menu Item 2
                    </Menu.Item>
                </Menu>
                <Space className="md:flex hidden">
                    {gMe?.data?.id &&
                    <>
                        <Button type="link" onClick={() => dispatch(authLogout())}>Logout</Button>
                    </>
                    }
                    {!gMe?.data?.id &&
                    <>
                        <Link to={`/LoginPage`}>
                            <Button type="link">Login</Button>
                        </Link>
                        <Link to={`/RegisterPage`}>
                            <Button type="link">Sign up</Button>
                        </Link>
                    </>
                    }
                </Space>
            </section>
        </Header>
        <Content className="px-5">
            <div className="max-w-screen-lg m-auto">
                <div className="site-layout-content">{children}</div>
            </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>React Antd Boilerplate - Codeby Design</Footer>
    </Layout>
}
export default MasterLayout
