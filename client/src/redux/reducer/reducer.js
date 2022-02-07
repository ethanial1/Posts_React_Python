import { FILTER_BY_NAME, GET_ALL_POST } from "../actions/actions";

const initialState = {
    allPosts: [],
    filteredPost: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                allPosts: action.payload
            }
        case FILTER_BY_NAME:
            return {
                ...state,
                filteredPost: state.allPosts.filter(elemt => elemt.nombre === action.payload)
            }
        default:
            return state
    }
}

export default rootReducer