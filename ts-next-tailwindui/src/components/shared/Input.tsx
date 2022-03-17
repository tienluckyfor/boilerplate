import {memo} from "react";
import * as React from "react";

interface InputProps {
    label?: string;
    name?: string;
    type?: 'email' | 'text' | 'tel' | 'number'|'password';
    required?: boolean;
    value?: string;
    formik?: any;
}

export const Input = memo<InputProps>(({label, name, type, required, value, formik}: InputProps) => {
    type = type ?? 'text'
    value = formik ? formik.values[name] : value;
    const error = formik.errors[name];

    return (<div className="space-y-1">
        {label &&
            <label htmlFor={name} className="block font-medium text-gray-700">
                {label}
                {required &&
                    <span className="text-red-600 ml-1">*</span>
                }
            </label>
        }
        <div>
            <input
                onChange={formik.handleChange}
                value={value}
                id={name}
                name={name}
                type={type}
                // required={required}
                className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
        {error &&
        <p className="text-sm text-red-500 capitalize-first">{error}</p>
        }
    </div>)
})