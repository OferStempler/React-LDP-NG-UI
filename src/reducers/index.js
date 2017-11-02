import { combineReducers } from 'redux';
import ServiceReducer from "./reducer_services";

const rootReducer = combineReducers({
    service: ServiceReducer
});

export default rootReducer;
