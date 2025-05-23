/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

export const actions = {
    logout : async ({ locals }) => {
        locals.pb.authStore.clear();
        locals.user = undefined;
        throw redirect(303, '/login');
    }
}