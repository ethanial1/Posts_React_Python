import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByName } from '../../redux/actions/actions';

const FormFiltro = () => {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState({});

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const err = {}

        if(!nombre.trim()) {
            err.nombre = "Por favor, ingresa el nombre para hacer la busqueda"
        }

        setError(err)

        if(Object.keys(err).length === 0) {
            dispatch(filterByName(nombre))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="nombre" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                    {error.nombre && <span>{error.nombre}</span>}
                </div>
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )
};

export default FormFiltro;
