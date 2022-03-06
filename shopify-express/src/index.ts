// src/index.ts
import express from 'express';
import Shopify, {ApiVersion, AuthQuery} from '@shopify/shopify-api';

require('dotenv').config();

const app = express();

const {API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST} = process.env;

Shopify.Context.initialize({
    API_KEY,
    API_SECRET_KEY,
    SCOPES: [SCOPES],
    HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
    IS_EMBEDDED_APP: false,
    API_VERSION: ApiVersion.October20 // all supported versions are available, as well as "unstable" and "unversioned"
});
// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

// the rest of the example code goes here
// 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
app.get("/products", async (req, res) => {
    // Load the current session to get the `accessToken`.
    const session = await Shopify.Utils.loadCurrentSession(req, res);
    console.log('session', session)
// Create a new client for the specified shop.
    const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
// Use `client.get` to request the specified Shopify REST API endpoint, in this case `products`.
    const products = await client.get({
        path: 'products',
    });
res.send(products)
// do something with the returned data

});

app.get("/", async (req, res) => {
    // This shop hasn't been seen yet, go through OAuth to create a session
    if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
        // not logged in, redirect to login
        res.redirect(`/login`);
    } else {
        res.send("Hello world!");
        // Load your app skeleton page with App Bridge, and do something amazing!
        res.end();
    }
});

app.get('/login', async (req, res) => {
    let authRoute = await Shopify.Auth.beginAuth(
        req,
        res,
        SHOP,
        '/auth/callback',
        false,
    );
    console.log('authRoute', authRoute)
    return res.redirect(authRoute);
});

app.get('/auth/callback', async (req, res) => {
    try {
        const session = await Shopify.Auth.validateAuthCallback(
            req,
            res,
            req.query as unknown as AuthQuery,
        ); // req.query must be cast to unkown and then AuthQuery in order to be accepted
        ACTIVE_SHOPIFY_SHOPS[SHOP] = session.scope;
    } catch (error) {
        console.error(error); // in practice these should be handled more gracefully
    }
    return res.redirect(`/products`); // wherever you want your user to end up after OAuth completes
    return res.redirect(`/?host=${req.query.host}&shop=${req.query.shop}`); // wherever you want your user to end up after OAuth completes
});

app.listen(3002, () => {
    console.log('HOST', HOST);
});