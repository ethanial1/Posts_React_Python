import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { resetPost } from "../../redux/actions/actions";
import st from './Message.module.css'

const Message = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()

    if(!Object.keys(post).length) return null;

    const handleClose = () => dispatch(resetPost())
    
    return  (
        <div className={st.msg}>
            <h3>{post.msg}</h3>
            <div>
                <span>{post.data.nombre}</span>
                <p>{post.data.descrip}</p>
            </div>
            <button onClick={handleClose}>x</button>
        </div>
    )
};

export default Message;
