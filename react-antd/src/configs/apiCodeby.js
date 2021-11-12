import {ApiCodeby, MediaCodeby, AuthCodeby} from "react-api-codeby";

const Config = {
    "baseURL": "https://be-mockapi.codeby.com/api/restful",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhc2V0X2lkIjozLCJ1c2VyX2lkIjoxfQ.peqppOJ5CCaXqDMyyIgTFDRbR_HvwEazwxpoUyB-k7A",
    "default": {
        "thumb": "http://localhost:3011/assets/default/thumb.png",
        "image": "http://localhost:3011/assets/default/image.png",
    },
    "lang": {
        "_username": "Email",
        "_password": "Password",
    },
    "auth": {
        "tokenKey": "ripcode-token",
        "resource": "users"
    }
}

ApiCodeby.config(Config)
MediaCodeby.config(Config)
AuthCodeby.config(Config)

export {
    AuthCodeby as authCodeby,
    ApiCodeby as apiCodeby,
    MediaCodeby as mediaCodeby,
}