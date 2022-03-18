import {memo} from "react";
import * as React from "react";
import classNames from "classnames";

interface InputProps {
    label?: string;
    name?: string;
    type?: 'email' | 'text' | 'tel' | 'number' | 'password';
    required?: boolean;
    value?: string;
    formik?: any;
}

export const Input = memo<InputProps>(({label, name, type, required, value, formik}: InputProps) => {
    type = type ?? 'text'
    value = formik ? formik.values[name] : value;
    const isError = formik.errors[name];

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
                className={classNames('input', isError ? 'border-red-400' : '')}
            />
        </div>
        {isError &&
            <p className="text-sm text-red-500 capitalize-first">{isError}</p>
        }
    </div>)
})