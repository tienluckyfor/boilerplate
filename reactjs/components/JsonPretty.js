import React from 'react'
import JSONPretty from 'react-json-pretty'

const theme = {
    main: 'line-height:1.3;color:#66d9ef;background:#ccc;overflow:auto;',
    error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
    key: 'color:#f92672;',
    string: 'color:#fd971f;',
    value: 'color:#a6e22e;',
    boolean: 'color:#ac81fe;',
}

const JsonPretty = ({data}) => {
    return <JSONPretty theme={theme} data={data}></JSONPretty>
}
export default JsonPretty
