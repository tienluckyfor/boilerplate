import React from "react";
import {MasterLayout} from "layouts";
import {Meta} from "components";

export default function Home() {
    return (<MasterLayout>
        <Meta.Home/>
        <p className="text-[#ccc] ">
            pages/index.tsx
        </p>
    </MasterLayout>)
}
