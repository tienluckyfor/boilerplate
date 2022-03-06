import * as React from "react";
import {Link} from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import {TextField} from "components";
import useLogin from "./useLogin";

const RegisterPage: React.FC<{}> = () => {
    const formik = useLogin()
    return (
        <AuthLayout title={"Login"}>
            <form
                onSubmit={formik.handleSubmit}
                className="space-y-6">
                <TextField
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
                </div>
                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-center mt-6">
                <div className="">
                    <Link to="/RegisterPage" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}
export default RegisterPage