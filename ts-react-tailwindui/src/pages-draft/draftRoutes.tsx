import React from 'react'
import RDFormilkPage from "./RDFormilkPage";
import WithFormikPage from "./WithFormikPage";
const RDComponentPage = React.lazy(() => import('./RDComponentPage'))

export const draftRoutes = [
    { path: '/WithFormikPage', element: <WithFormikPage/>, exact:true },
    { path: '/RDComponentPage', element: <RDComponentPage/>, exact:true },
    { path: '/RDFormilkPage', element: <RDFormilkPage/>, exact:true },
]