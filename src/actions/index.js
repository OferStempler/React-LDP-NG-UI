import axios from "axios";

export const FETCH_SERVICES = 'FETCH_SERVICES';
const SERVICE_URL = "http://localhost:8085/services/findByName";

export function fetchService(serviceName) {
    var url = "";
    if(serviceName == null || serviceName === ""){
        url = "http://localhost:8085/services/getAll";
    }else {
        url = "http://localhost:8085/services/findByName"+"?serviceName=" + serviceName;
    }
    const request = axios.get(url);

    console.log("REQUEST:" , request)
    return {
        type: FETCH_SERVICES,
        payload: request
    };
}