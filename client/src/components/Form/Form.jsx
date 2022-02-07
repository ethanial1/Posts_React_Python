import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewPost } from '../../redux/actions/actions';


const initialForm = {nombre:"", descrip: ""}

const Form = () => {
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
            err.nombre = "Nombre requerido, no puede estár vacio"
        }
        if(!form.descrip.trim()) {
            err.descrip = "Descripción requerida, queremos saber qué piensas"
        }
        setErrores(err)

        if(Object.keys(err).length === 0) {
            console.log('post')
            dispatch(saveNewPost(form))
            handleReset()
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange}/>
                    {errores.nombre && <span>{errores.nombre}</span>}
                </div>
                <div>
                    <label htmlFor="descrip">Descripción</label>
                    <input type="text" name="descrip" id="descrip" value={form.descrip} onChange={handleChange}/>
                    {errores.descrip && <span>{errores.descrip}</span>}
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
};

export default Form;
