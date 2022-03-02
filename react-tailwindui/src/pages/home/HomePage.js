import MasterLayout from "layouts/MasterLayout";
import React from "react";
import {Button} from "my-new-project"

const HomePage = () => {
    return <MasterLayout>
        <p className="text-[#ccc] text-black">
            src/pages/HomePage.js
        </p>
        <Button text={"aaa"}/>
    </MasterLayout>
}
export default HomePage