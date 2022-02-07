import React from 'react';

const Row = ({id, nombre, descrip, deleteCb}) => {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descrip}</td>
            <td>
                <button onClick={() => deleteCb(id)}>
                    <i className='bx bx-trash'></i>
                </button>
            </td>
        </tr>
    )
};

export default Row;
