import React, {MouseEventHandler} from 'react';
import classnames from 'classnames';
import {SpinnerIcon} from "components";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactElement | React.ReactNode;
    variant: 'primary' | 'secondary' | 'light';
    icon?: any;
    rounded?: boolean;
    widthFull?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string,
    isLoading?: boolean
}

const BUTTON_VARIANT: { [key in ButtonProps['variant']]: string } = {
    primary: 'bg-indigo-600 hover:bg-indigo-700',
    secondary: 'text-black bg-yellow-400 hover:bg-yellow-500 font-bold',
    light: 'text-black bg-gray-300 hover:bg-gray-400',
};

export function Button({
                           children,
                           variant,
                           type = 'button',
                           rounded = false,
                           widthFull = false,
                           icon,
                           onClick,
                           className = '',
                           isLoading,
                       }: ButtonProps) {
    variant = variant ?? "light";
    return (
        <button
            disabled={isLoading}
            type={type}
            className={classnames(
                `btn ${className}`,
                {
                    'w-full': widthFull,
                    'rounded-full': rounded,
                },
                BUTTON_VARIANT[variant],
                isLoading ? 'cursor-not-allowed opacity-70' : ''
            )}
            onClick={onClick}
        >
            {isLoading && <SpinnerIcon/>}
            {!isLoading && icon && <div className="mr-2">{icon}</div>}
            {children}
        </button>
    );
}
