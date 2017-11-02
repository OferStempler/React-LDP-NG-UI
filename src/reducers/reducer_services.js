/**
 * Created by ofer on 01/11/17.
 */
import { FETCH_SERVICES } from "../actions/index.js";
export default  function (state = [], action) {
    // console.log("ACTION got", action);

    switch (action.type){
        case FETCH_SERVICES:
            return state.concat([ action.payload.data]);
        //can also write: return [action.payload.data, ...state]; (will give state, state, state.
    }

    return state;
}