import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../redux/actions/actions';
import Message from '../Message/Message';
import st from './Form.module.css'

const initialForm = {nombre:"", descrip: ""}

const FormCreate = () => {
    const [form, setForm] = useState(initialForm);
    const [postSaved, setPostSaved] = useState({});
    const [errores, setErrores] = useState({});

    const dispatch = useDispatch()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleCreate = () => {
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
        .then(json => {
            dispatch(getAllPost())
            setPostSaved(json)
        })
        .catch(error => console.log(error))

        setPostSaved({})
    }

    const handleReset = () => setForm(initialForm)

    const handleSubmit = e => {
        e.preventDefault()
        const err = {}

        if(!form.nombre.trim()) {
            err.nombre = "Nombre requerido"
        }
        if(!form.descrip.trim()) {
            err.descrip = "Descripción requerida"
        }
        setErrores(err)

        if(Object.keys(err).length === 0) {
            handleCreate()
            handleReset()
        }
    }


    return (
        <>
            <div className={st.form}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre' value={form.nombre} onChange={handleChange}/>
                        {errores.nombre && <span>{errores.nombre}</span>}
                    </div>
                    <div>
                        <input type="text" name="descrip" id="descrip" placeholder='Descripción' value={form.descrip} onChange={handleChange}/>
                        {errores.descrip && <span>{errores.descrip}</span>}
                    </div>
                    <button type="submit">Crear</button>
                </form>
            </div>
            { Object.keys(postSaved).length > 0 && <Message postSaved={postSaved}/> }
        </>
    )
};

export default FormCreate;
