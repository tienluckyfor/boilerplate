import React from 'react';

export interface Info {
    phone: number;
    address: string;
}

export interface Props {
    /** name of the super hero */
    name: string;
    /** age of the super hero */
    age: number;
    info?: Info;
}

const Avatar: React.FunctionComponent<Props> = ({name, age, info}) => {
    return (
        <div className={"text-left"}>
            <pre className="text-sm">
                {JSON.stringify({...info}, null, 2)}
            </pre>
            <h1> Name : {name} </h1>
            <p> Age : {age} </p>
        </div>
    );
};

export default Avatar