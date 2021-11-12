import {Divider, PageHeader} from "antd";
import Cookies from "universal-cookie";
import {SEO} from "components/SEO";
import {useNavigate} from "react-router-dom";

export const AuthLayout = ({onBack, title, children, linkButton}) => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    if (cookies.get('ripcode-token')){
        navigate(`/`)
    }

    return (
        <>
            <SEO title={title}/>
            <main className="lg:mt-20 mt-0 mx-auto max-w-sm lg:border border-red-400 py-5 lg:shadow-lg relative rounded">
                <PageHeader
                    onBack={onBack}
                    title={title}
                    className="px-5"
                />
                <div className="px-5">
                    {children}
                </div>
                {linkButton &&
                <>
                    <Divider plain/>
                    <section className="px-5 ">
                        {linkButton}
                        {/*<div className="flex items-center justify-between mt-4 ">
                            <Button className="w-1/2 mr-2">Facebook</Button>
                            <Button className="w-1/2 ml-2">Google</Button>
                        </div>*/}
                    </section>
                </>
                }
            </main>
        </>
    )
}
