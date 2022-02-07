import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewPost } from '../../redux/actions/actions';
import st from './Form.module.css'

const initialForm = {nombre:"", descrip: ""}

const FormCreate = () => {
    const [form, setForm] = useState(initialForm);
    const [errores, setErrores] = useState({});

    const dispatch = useDispatch()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
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
            console.log('post')
            dispatch(saveNewPost(form))
            handleReset()
        }
    }


    return (
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
    )
};

export default FormCreate;
