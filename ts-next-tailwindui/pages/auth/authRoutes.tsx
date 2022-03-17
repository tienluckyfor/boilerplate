import React from 'react'
const RegisterPage = React.lazy(() => import('./RegisterPage'))
const LoginPage = React.lazy(() => import('./LoginPage'))

export const authRoutes = [
    { path: '/RegisterPage', element: <RegisterPage/>, exact:true },
    { path: '/LoginPage', element: <LoginPage/>, exact:true },
]