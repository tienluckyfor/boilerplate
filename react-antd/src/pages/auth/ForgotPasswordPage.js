import {Form, Input, Button, Modal, notification} from "antd";
import {CheckCircleOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {authForgotPassword, authsSelector} from "./authsSlice";
import {useNavigate} from "react-router-dom";
import {AuthLayout} from "./AuthLayout";
import {useEffect} from "react";
import {fnCodeby} from "react-api-codeby";

const ForgotPasswordPage = () => {
    const dispatch = useDispatch()
    const {foAuth} = useSelector(authsSelector)
    const {ref} = fnCodeby.getURLParams()
    const navigate = useNavigate();
    useEffect(() => {
        if(!foAuth?.data) return;
        if (foAuth?.data?.status === 'EMAIL_SENT') {
            Modal.confirm({
                title: 'Success',
                icon: <CheckCircleOutlined />,
                content: foAuth?.data?.message,
                cancelButtonProps:{style: {display: 'none'}},
                onOk() {
                    let values = form.getFieldsValue()
                    const url = fnCodeby.objToUrlParams({...values, ref})
                    navigate(`/ResetPasswordPage?${url}`)
                },
            });
            return;
        }
        notification.error({message:foAuth?.data?.message})
    }, [foAuth])

    const [form] = Form.useForm()
    return (
        <AuthLayout
            onBack={() => navigate(-1)}
            title="Forgot Password"
        >
            <Form
                form={form}
                onFinish={(values) => dispatch(authForgotPassword({...values, ref}))}
                layout={`vertical`}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{
                        required: true,
                        type: "email",
                        message: 'The email is not valid.'
                    }]}
                >
                    <Input/>
                </Form.Item>
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    loading={foAuth.isLoading}
                >Submit</Button>
            </Form>
        </AuthLayout>
    );
}
export default ForgotPasswordPage