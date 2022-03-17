import {memo, MouseEventHandler} from "react";
import * as React from "react";
import {SpinnerIcon} from "./icons/SpinnerIcon";
import classnames from "classnames";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactElement | React.ReactNode;
    icon?: React.ReactElement | React.ReactNode;
    className?: string;
    type?: 'submit' | 'button';
    isLoading?: boolean;
    primary?: boolean;
    danger?: boolean;
}



export const Button = memo<ButtonProps>(({onClick, children, icon, className, type, isLoading, primary, danger}: ButtonProps) => {
    type = type ?? 'button';

    let btnStr = 'text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500';
    if(primary) btnStr = 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500';
    if(danger) btnStr = 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500';

    return (<button
        // onClick={onClick}
        type={type}
        className={classnames(
            className,
            btnStr,
            'w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
        // className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        {isLoading && <SpinnerIcon/>}
        {!isLoading && icon && <div className="mr-2">{icon}</div>}
        {children}
    </button>)
});