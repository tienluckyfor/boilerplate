import React from 'react'
const HomePage = React.lazy(() => import('./HomePage'))
// const Sidebar = React.lazy(() => import('./components/Sidebar'))

export const homeRoutes = [
    // { path: '/Sidebar', element: <Sidebar/>, exact:true },
    { path: '/', element: <HomePage/>, exact:true },
]