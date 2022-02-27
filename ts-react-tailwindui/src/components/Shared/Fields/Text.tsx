import {memo} from "react";
import * as React from "react";

export interface IProps {
    label: string;
    name: string;
    type: string;
    value?: string;
    formik?: any;
};

const TextField = memo<IProps>(({label ,name, type, value, formik}) => {
    value = formik ? formik.values[name] : value;
    const error = formik.errors[name];
    return (
        <>
            <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <div className="mt-1">
                    <input
                        onChange={formik.handleChange}
                        value={value}
                        id={name}
                        name={name}
                        type={type}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <p className="text-red-500 capitalize-first line-clamp-2">{error}</p>
            </div>
        </>
    )
})
export default TextField;
