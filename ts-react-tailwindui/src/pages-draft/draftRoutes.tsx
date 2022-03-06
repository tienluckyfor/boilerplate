import React from 'react'
import RDFormilkPage from "./RDFormilkPage";
import WithFormikPage from "./WithFormikPage";

export const draftRoutes = [
    { path: '/WithFormikPage', element: <WithFormikPage/>, exact:true },
    { path: '/RDFormilkPage', element: <RDFormilkPage/>, exact:true },
]