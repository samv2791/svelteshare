// import { error } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
/**
 * Function to load appointments
 * @returns {Promise<{ appointments: any[]; } | { error: any; }>}
 */
export const load = async ({ fetch }) => {
    // fetch appointments data promise
    
    // unpack the json

    // extract the data array (remember: json object structure: meta, data)
    

    // setup the promises
    
    // map over the array of urls and create a fetch promise for each

    // fetch all appointments
    try {
        // execute all fetch promises in parallel

        // unpack all json responses in parallel
      
        // return the data to the page. Pay attention to the structure here.
        // it needs to be an object
      
    } catch (error) {
        //console.log('🐮', error);
        return { error };
    }
};