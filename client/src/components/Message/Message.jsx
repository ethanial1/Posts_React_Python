import React from "react";
import { useState, useEffect } from "react";
import st from './Message.module.css'

const Message = ({postSaved}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 10000);
    }, []);

    return visible ? (
        <div className={st.msg}>
            <h3>{postSaved.msg}</h3>
            <div>
                <span>{postSaved.data.nombre}</span>
                <p>{postSaved.data.descrip}</p>
            </div>
        </div>
    ) : null;
};

export default Message;
