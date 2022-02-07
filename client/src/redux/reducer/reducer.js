import { GET_ALL_POST } from "../actions/actions";

const initialState = {
    allPost: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                allPost: action.payload
            }
        default:
            return state
    }
}

export default rootReducer