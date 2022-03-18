import Header from "./components/Header";
import React from "react";

export const MasterLayout: React.FC<{}> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

