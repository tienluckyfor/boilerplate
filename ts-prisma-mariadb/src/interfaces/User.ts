export interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface IDetailUser {
    user: IUser
}
export interface IRegisterUser {
    user: IUser
}

export interface ILoginUser {
    user: {
        name: string;
        password: string;
    };
}
