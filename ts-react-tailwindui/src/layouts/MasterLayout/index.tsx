import Header from "./components/Header";
import React from "react";

const MasterLayout: React.FC<{}> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default MasterLayout