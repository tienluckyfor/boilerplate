import {Fragment, useState} from 'react'
import {NotifyRender} from "components";

export default function Notify() {
    const [show, setShow] = useState(true)

    return (
        <>
            <NotifyRender visible={true} isError={true} content={"lorem"}/>
        </>
    )
}
