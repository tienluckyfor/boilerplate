export default class FetchClass {

    constructor() {
        this.domain = ``
    }

    async get(url, params = {}) {
        const params1 = new URLSearchParams(params)
        const promise = await fetch(`${this.domain}${url}?${params1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const text = await promise.text();
        try {
            const json = JSON.parse(text);
            return json;
        } catch (err) { }
        return text;
    }
}