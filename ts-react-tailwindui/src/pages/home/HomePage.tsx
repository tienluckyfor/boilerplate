import React from "react";
import MasterLayout from "layouts/MasterLayout";

export interface Props {
}

const HomePage: React.FunctionComponent<Props> = () => {
    return (<MasterLayout>
        <p className="text-[#ccc] text-black">
            src/pages/HomePage.js
        </p>
    </MasterLayout>)
}
export default HomePage