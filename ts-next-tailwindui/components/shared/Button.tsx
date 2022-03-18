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
    disabled?: boolean;
}

export const Button = memo<ButtonProps>((
    {
        onClick,
        children,
        icon,
        className,
        type,
        primary,
        danger,
        isLoading,
        disabled,
    }: ButtonProps) => {
    type = type ?? 'button';

    let btnStr = 'text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500';
    if (primary) btnStr = 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500';
    if (danger) btnStr = 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500';

    return (<button
        type={type}
        disabled={disabled}
        className={classnames(
            className,
            btnStr,
            'btn',
            isLoading && 'cursor-not-allowed opacity-70'
        )}
        onClick={onClick}
    >
        {isLoading && <SpinnerIcon/>}
        {(!isLoading && icon) && <div className="mr-2">{icon}</div>}
        {children}
    </button>)
});