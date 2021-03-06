import React from "react";
import {Meta} from "components";

interface IProps {
    children: React.ReactNode;
    title: string
}

export const AuthLayout: React.FC<IProps> = ({children, title}: IProps) => {
    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Meta.Home title={title}/>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h1>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

