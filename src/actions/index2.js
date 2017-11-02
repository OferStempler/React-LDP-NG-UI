import axios from "axios";

export const FETCH_SERVICES = 'FETCH_SERVICES';
const SERVICE_URL = "http://localhost:8085/services/findByName";

export function fetchService(serviceName) {


    //from the service name or id I will ger the specific service or all
    const url = SERVICE_URL +"?serviceName=" + serviceName;

    const request = axios.get(url);

    console.log("REQUEST:" , request)

    return {
        type: FETCH_SERVICES,
        payload: request
    };
}