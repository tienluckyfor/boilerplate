import React from 'react'
const LoginPage = React.lazy(() => import('pages/auth/LoginPage'))
const RegisterPage = React.lazy(() => import('pages/auth/RegisterPage'))
const ForgotPasswordPage = React.lazy(() => import('pages/auth/ForgotPasswordPage'))
const ResetPasswordPage = React.lazy(() => import('pages/auth/ResetPasswordPage'))

export const authRoutes = [
    { path: '/LoginPage', element: <LoginPage/> },
    { path: '/RegisterPage', element: <RegisterPage/> },
    { path: '/ForgotPasswordPage', element: <ForgotPasswordPage/> },
    { path: '/ResetPasswordPage', element: <ResetPasswordPage/> },
]