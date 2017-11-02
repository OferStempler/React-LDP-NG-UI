import axios from "axios";

export const FETCH_ALL_SERVICES = 'FETCH_ALL_SERVICES';
const SERVICE_URL = "http://localhost:8085/services/getAll";

export function fetchAllServices(serviceName) {
    var url = "";
    if(serviceName == null || serviceName ===""){
        url = "http://localhost:8085/services/getAll";
    }else {
        url = "http://localhost:8085/services/findByServiceName";
    }
    const request = axios.get(url);

    console.log("REQUEST:" , request)

    return {
        type: FETCH_ALL_SERVICES,
        payload: request
    };
}