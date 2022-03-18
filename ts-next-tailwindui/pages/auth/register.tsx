import * as React from "react";
import {AuthLayout} from "layouts";
import {Button, Input} from "components";
import Link from "next/link";
import useRegister from "hooks/auth/useRegister";

export default function Register() {
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
                    <Button
                        disabled={formik.isSubmitting}
                        isLoading={formik.isSubmitting}
                        type={"submit"}
                        primary
                    >Submit</Button>
                </div>
            </form>
        </AuthLayout>
    )
}