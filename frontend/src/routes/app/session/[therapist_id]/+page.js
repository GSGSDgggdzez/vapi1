import { PUBLIC_VAPI_KEY } from "$env/static/public";
import PocketBase from 'pocketbase';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    // Get the therapist_id from the URL
    const therapist_id = params.therapist_id;
    
    let therapist = null;
    
    try {
        // Create PocketBase instance
        const pb = new PocketBase('http://127.0.0.1:8090');
        
        // Query the therapist by ID
        therapist = await pb.collection('therapist').getOne(therapist_id);
        
        // Log for debugging
        console.log("Found therapist:", therapist);
        
    } catch (error) {
        console.error("Error fetching therapist:", error);
    }
    
    return {
        therapist
    };
}
