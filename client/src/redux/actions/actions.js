export const GET_ALL_POST = "GET_ALL_POST"
export const DELETE_POST = "DELETE_POST"
export const SAVE_NEW_POST = "SAVE_NEW_POST"
export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const RESET_POST = "RESET_POST"

export const getAllPost = () => dispatch => {
    return (
        fetch('http://localhost:3001/posts')
        .then (resp => resp.json())
        .then(json => dispatch({
            type: GET_ALL_POST,
            payload: json
        }))
        .catch(error => console.log(error))
    )
}

export const saveNewPost = form => dispatch => {
    return (
        fetch("http://localhost:3001/posts/save",{
            headers:{
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(json => dispatch({
            type: SAVE_NEW_POST,
            payload: json
        }))
        .catch(error => console.log(error))
    )
}

export const deletePost = id => dispatch => {
    return (
        fetch(`http://localhost:3001/posts/delete/${id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(json => dispatch({
            type: DELETE_POST,
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

export const resetPost = () => {
    return {
        type: RESET_POST
    }
}