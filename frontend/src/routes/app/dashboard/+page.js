import PocketBase from 'pocketbase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    
    try {
        const therapists = await pb.collection('therapist').getFullList({
            sort: '-created',
        });
        
        return {
            therapists
        };
    } catch (error) {
        console.error('Error fetching therapists:', error);
        return {
            therapists: []
        };
    }
}