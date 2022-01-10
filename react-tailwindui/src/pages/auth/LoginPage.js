import {Formik, Field, Form, ErrorMessage} from 'formik'
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {authLogin, authsSelector} from "./authsSlice"
import {Link} from 'react-router-dom'

export default function LoginPage() {
    const dispatch = useDispatch()
    const { reAuth, lUser } = useSelector(authsSelector)

    return (
        <div className="h-screen w-full p-6 flex flex-col justify-between bg-gray-50">
            <div className="flex flex-col justify-center sm:px-6 lg:flex-none ">

                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="w-full flex flex-col items-center">
                        <h2 className="mt-4 text-2xl not-italic leading-9 font-semibold text-gray-900">
                            Log in to your account
                        </h2>
                    </div>

                    <div className="mt-4">
                        <Formik
                            // initialValues={initialValues}
                            // onSubmit={formValue => dispatch(authLogin(formValue))}
                        >
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-600 uppercase">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="sonheungmin@gmail.com"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium text-gray-600 uppercase">
                                        Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <Field
                                            id="password"
                                            name="password"
                                            // type={passwordShown ? "" : "password"}
                                            autoComplete="current-password"
                                            required
                                            placeholder="***************"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />

                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-600"
                                    />
                                </div>

                                <div className="text-center w-full">
                                    <span className="font-normal text-sm not-italic">Forgot password?
                                        <span className="text-indigo-600 cursor-pointer"
                                            // onClick={() => navigate('/ForgotPassWordPage')}
                                        > Click here</span>
                                    </span>
                                </div>

                                <div className="flex justify-center w-full">
                                    <button
                                        type="submit"
                                        className="w-40 h-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span> */}
                                        Sign in
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="w-full text-center mt-4">
                <div className="space-x-3">
                    <span className="text-gray-500">Don't have an account?</span>
                    <Link to={'/RegisterPage'} className="text-indigo-500">
                        Sign up now!
                    </Link>
                </div>

            </div>
        </div>
    )
}
