export const getURLParams = () => {
    const params = new URLSearchParams(window.location.search);
    let obj = {};
    // @ts-ignore
    for (let param of params) {
        // @ts-ignore
        obj[param[0]] = param[1];
    }
    return obj;
}