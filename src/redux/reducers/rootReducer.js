import { 
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../constants/constants";

const initialState = {
    counter: 0,
    first_name: 'King Susu'
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case INCREASE_COUNTER:
            return {
                counter : state.counter + 1 
            }
        case DECREASE_COUNTER:
            return {
                counter : state.counter - 1 
            }
        default:
            return state;
    }
};

export default rootReducer;