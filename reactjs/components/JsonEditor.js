import React from 'react'
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

const JsonEditor = ({ data }) => {
    return <JSONInput
        placeholder={data}
        locale={locale}
        colors={{
            string: "#DAA520"
        }}
        height="550px"
    />
}
export default JsonEditor
