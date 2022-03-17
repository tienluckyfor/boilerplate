import mung from "express-mung";

const resfulResponseFormat = (body, req, res) => {
    if (req.originalUrl.match(/upload-editor/g)) {
        return body;
    }
    return {status: true, data: body};
}

export default mung.json(resfulResponseFormat);