export const GET_ALL_POST = "GET_ALL_POST"

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