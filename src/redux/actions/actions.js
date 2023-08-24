import {
    ADD_ARTICLE,
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../constants/constants";

export const addPost = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload: payload
    }
}

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
    // payload 
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
    // payload 
});