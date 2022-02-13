import { DELETE_POST, FILTER_BY_NAME, GET_ALL_POST, RESET_POST, SAVE_NEW_POST } from "../actions/actions";

const initialState = {
    allPosts: [],
    filteredPost: [],
    post: {}
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
        case SAVE_NEW_POST:
            return {
                ...state,
                post: action.payload,
                allPosts: state.allPosts.concat(action.payload.data)
            }
        case RESET_POST: 
            return {
                ...state,
                post: {}
            }
        case DELETE_POST:
            return {
                ...state,
                post: action.payload,
                allPosts: state.allPosts.filter(post => post.id !== action.payload.data.id),
                filteredPost: state.filteredPost.filter(post => post.id !== action.payload.data.id)
            }
        default:
            return state
    }
}

export default rootReducer