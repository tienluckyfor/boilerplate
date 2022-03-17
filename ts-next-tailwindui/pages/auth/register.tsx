import * as React from "react";
import AuthLayout from "src/layouts/AuthLayout";
import {Button, Input, } from "src/components";
import Link from "next/link";
import useRegister from "./useRegister";

const Register: React.FC<{}> = () => {
    const formik = useRegister()
    return (
        <AuthLayout title={"Register"}>
            <form
                onSubmit={formik.handleSubmit}
                className="space-y-6">
                <Input
                    name={"name"}
                    label={"Name"}
                    required
                    formik={formik}
                />
                <Input
                    name={"email"}
                    type={"email"}
                    label={"Email address"}
                    required
                    formik={formik}
                />
                <Input
                    name={"password"}
                    type={"password"}
                    label={"Password"}
                    required
                    formik={formik}
                />
                <Input
                    name={"password_confirmation"}
                    type={"password"}
                    label={"Confirm Password"}
                    required
                    formik={formik}
                />
                {/*<TextField
                    label={"Email address"}
                    name={"email"}
                    type={"email"}
                    formik={formik}
                />
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
                </div>*/}
                <div className="flex items-center justify-end">
                    <div className="">
                        <Link href="/">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <Button type={"submit"} primary>Submit</Button>
                    {/*<button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>*/}
                </div>
            </form>

           {/* <div className="flex items-center justify-center mt-6">
                <Link href="/">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Register
                    </a>
                </Link>
            </div>*/}
        </AuthLayout>
    )
}

export default Register