import { ADD_ARTICLE } from "../constants/constants";

const initialState = {
    posts: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

export default blogReducer