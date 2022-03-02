import { FC, HTMLAttributes, ReactChild } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactChild;
    text: string;
}
export declare const Button: FC<ButtonProps>;
