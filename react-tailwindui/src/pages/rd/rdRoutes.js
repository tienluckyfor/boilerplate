import React from 'react'
const RDHookPage = React.lazy(() => import('./RDHookPage'))

export const rdRoutes = [
    { path: '/RDHookPage', element: <RDHookPage/>, exact:true },
]