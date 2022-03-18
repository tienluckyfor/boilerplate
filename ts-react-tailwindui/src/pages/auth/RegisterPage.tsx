import * as React from "react";
import {Link} from "react-router-dom";
import useRegister from "./useRegister";
import AuthLayout from "layouts/AuthLayout";
import {Button, TextField,} from "components";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {authsSelector} from "./authsSlice";

const RegisterPage: React.FC<{}> = () => {
    const formik = useRegister();
    const {reAuth} = useSelector(authsSelector)
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsSubmitting(formik.isSubmitting);
        console.log('formik.isSubmitting', formik.isSubmitting)
    }, [formik.isSubmitting])

    return (
        <AuthLayout title={"Register"}>
            <pre className="text-sm">
                {JSON.stringify(reAuth, null, '  ')}
            </pre>
            <form
                onSubmit={formik.handleSubmit}
                className="space-y-6">
                <TextField
                    label={"Name"}
                    name={"name"}
                    formik={formik}
                />
                {/*{[...Array(10)].map(item=>(*/}
                <TextField
                    label={"Email address"}
                    name={"email"}
                    type={"email"}
                    formik={formik}
                />
                {/*))}*/}

                {/*<div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="text-red-500 capitalize-first line-clamp-2">{formik.errors.email}</p>
                </div>*/}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="text-red-500 capitalize-first">{formik.errors.password}</p>
                </div>
                <div>
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.password_confirmation}
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            autoComplete="current-password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="text-red-500 capitalize-first">{formik.errors.password_confirmation}</p>
                </div>
                <Button
                    isLoading={reAuth.isLoading}
                    type={"submit"}
                    variant={"primary"}
                    widthFull={true}
                >Submit</Button>
            </form>

            <div className="flex items-center justify-center mt-6">
                <div className="">
                    <Link to="/LoginPage" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}
export default RegisterPage