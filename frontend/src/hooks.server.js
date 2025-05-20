// src/hooks.server.js
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_pocketbase_URL } from '$env/static/public';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase(PUBLIC_pocketbase_URL);

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.record);
    } catch (_) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
        event.locals.user = undefined;
    }

    // Check if user is trying to access /app routes and is not authenticated
    if (event.url.pathname.startsWith('/app') && !event.locals.user) {
        throw redirect(303, '/login');
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}