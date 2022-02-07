import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="descrip">Descripción</label>
                    <input type="text" name="descrip" id="descrip" value={form.descrip} onChange={handleChange}/>
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
};

export default Form;
