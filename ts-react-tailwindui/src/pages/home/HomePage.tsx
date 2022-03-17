import React from "react";
import MasterLayout from "layouts/MasterLayout";

export interface IProps {
}

const HomePage: React.FunctionComponent<IProps> = () => {
    return (<MasterLayout>
        <p className="text-[#ccc] text-black">
            src/pages/HomePage.js
        </p>
    </MasterLayout>)
}
export default HomePage