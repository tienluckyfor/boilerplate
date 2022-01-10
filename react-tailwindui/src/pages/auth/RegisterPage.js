import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Switch } from '@headlessui/react'
import * as Yup from "yup"
import { authRegister, authsSelector } from "./authsSlice"
import {Link, useNavigate} from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RegisterPage() {
    const dispatch = useDispatch()
    const { reAuth, lUser } = useSelector(authsSelector)

    const [enabledMakePublic, setEnabledMakePublic] = useState(true)
    const [enabledTrans, setEnabledTrans] = useState(true)

    const initialValues = {
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    };

    const navigate = useNavigate()

    const [passwordShown, setPasswordShown] = useState(false)
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true)
    }

    const signInSchema = Yup.object().shape({
        email: Yup
            .string()
            .required()
            .oneOf([Yup.ref("email"), null], "Emails must match"),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        confirmPassword: Yup
            .string()
            .required()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
    })

    const handleSubmitForm = (formValue) => {
        dispatch(authRegister(formValue))
    }

    return (
        <div className="h-screen w-full p-6 flex flex-col justify-between bg-gray-50">
            <div className="flex flex-col justify-center sm:px-6 lg:flex-none ">

                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="w-full flex flex-col items-center">
                        <h2 className="mt-4 text-2xl not-italic leading-9 font-semibold text-gray-900">
                            Create an account
                        </h2>
                    </div>

                    <div className="mt-4">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={signInSchema}
                            onSubmit={handleSubmitForm}
                        >
                            <Form className="space-y-4">

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 uppercase">
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
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600 uppercase">
                                        Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <Field
                                            id="password"
                                            name="password"
                                            type={passwordShown ? "" : "password"}
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


                                <div className="space-y-1">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 uppercase">
                                        Confirm confirmPassword
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <Field
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="confirmPassword"
                                            placeholder="***************"
                                            type={confirmPasswordShown ? "" : "password"}
                                            autoComplete="current-confirmPassword"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />


                                    </div>
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center">
                                        <Switch
                                            checked={enabledMakePublic}
                                            onChange={setEnabledMakePublic}
                                            className={classNames(
                                                enabledMakePublic ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 mr-4 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">I agree to PPE's Terms of Service.</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    enabledMakePublic ? 'translate-x-5' : 'translate-x-0',
                                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                        <span className="text-gray-700 text-sm leading-6">I agree to PPE's Terms of Service.</span>
                                    </div>

                                    <div className="flex items-center mt-2">
                                        <Switch
                                            checked={enabledTrans}
                                            onChange={setEnabledTrans}
                                            className={classNames(
                                                enabledTrans ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 mr-4 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">Use setting</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    enabledTrans ? 'translate-x-5' : 'translate-x-0',
                                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                        <span className="text-gray-700 text-sm leading-6">News and features updates, as well as occasional company announcements..</span>
                                    </div>
                                </div>

                                <div className="flex justify-center w-full">
                                    <button
                                        type="submit"
                                        className="w-40 h-10 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Start free trial
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div >
            </div >
            <div className="w-full text-center mt-4">
                <div className="space-x-3">
                    <span className="text-gray-500">Already have an account?</span>
                    <Link to={'/LoginPage'} className="text-indigo-500">
                        Log in
                    </Link>
                </div>
            </div>
        </div >
    )
}
