export const GET_ALL_POST = "GET_ALL_POST"
export const DELETE_POST = "DELETE_POST"
export const FILTER_BY_NAME = "FILTER_BY_NAME"

export const getAllPost = () => dispatch => {
    return (
        fetch('http://127.0.0.1:5000/')
        .then (resp => resp.json())
        .then(json => dispatch({
            type: GET_ALL_POST,
            payload: json
        }))
        .catch(error => console.log(error))
    )
}

export const filterByName = name => {
    return {
        type: FILTER_BY_NAME,
        payload: name
    }
}

export const deletePost = id => dispatch => {
    return (
        fetch(`http://127.0.0.1:5000/delete/${id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(json => dispatch(getAllPost()))
        .catch(error => console.log(error))
    )
}