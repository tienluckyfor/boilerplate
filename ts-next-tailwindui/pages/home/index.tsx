import React from "react";
import MasterLayout from "layouts/MasterLayout";

export interface IProps {
}

const Index: React.FunctionComponent<IProps> = () => {
    return (<MasterLayout>
        <p className="text-[#ccc] ">
            src/pages/home/index.tsx
        </p>
    </MasterLayout>)
}
export default Index