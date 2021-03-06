import {Form, Input, Button, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {authLogin, authsSelector} from "./authsSlice";
import {Link} from 'react-router-dom'
import {AuthLayout} from "./AuthLayout";
import {fnCodeby} from "react-api-codeby";

const LoginPage = () => {
    const dispatch = useDispatch()
    const {lAuth} = useSelector(authsSelector)
    const {ref} = fnCodeby.getURLParams()

    return (
        <AuthLayout
            title="Login"
            linkButton={<Link to={`/RegisterPage?ref=${ref}`}>
                <Button block className={`-mt-4`} type="dashed">
                    <p className="truncate space-x-2">
                        <span className="lg:inline hidden">Don't have an account?</span>
                        <span className={`text-indigo-700`}>Create a Free Account</span>
                    </p>
                </Button>
            </Link>}>
            <Form
                initialValues={{remember: true}}
                onFinish={(values) => dispatch(authLogin({...values, ref}))}
                layout={`vertical`}
            >
                <Form.Item
                    label="Email"
                    name="_username"
                    rules={[{
                        required: true,
                        type: "email",
                        message: 'The email is not valid.'
                    }]}
                >
                    <Input type={`email`}/>
                </Form.Item>
                <Form.Item
                    label={<section className="flex items-center justify-between w-screen max-w-sm">
                        <span>Password</span>
                        <Link to={`/ForgotPasswordPage?ref=${ref}`} className="flex justify-end">
                            <Button className={`px-0 `} type="link">
                                <p className="truncate space-x-2">
                                    <span className={`text-indigo-700`}>Forgot password?</span>
                                </p>
                            </Button>
                        </Link>
                    </section>}
                    name="_password"
                    rules={[{required: true, message: 'Please input your password.'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    loading={lAuth.isLoading}
                >Sign in</Button>
            </Form>
        </AuthLayout>
    );
}
export default LoginPage