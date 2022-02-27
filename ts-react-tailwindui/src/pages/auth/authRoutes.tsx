import React from 'react'
const RegisterPage = React.lazy(() => import('./RegisterPage'))

export const authRoutes = [
    { path: '/RegisterPage', element: <RegisterPage/>, exact:true },
]