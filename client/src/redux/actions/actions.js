export const GET_ALL_POST = "GET_ALL_POST"
export const DELETE_POST = "DELETE_POST"
export const SAVE_NEW_POST = "SAVE_NEW_POST"
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

export const saveNewPost = form => dispatch => {
    return (
        fetch("http://127.0.0.1:5000/create",{
            headers:{
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                nombre: form.nombre,
                descrip: form.descrip
            })
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
        fetch(`http://127.0.0.1:5000/delete/${id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(json => dispatch(getAllPost()))
        .catch(error => console.log(error))
        )
    }


export const filterByName = name => {
    return {
        type: FILTER_BY_NAME,
        payload: name
    }
}