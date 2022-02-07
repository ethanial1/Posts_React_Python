import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost, deletePost } from "../../redux/actions/actions";
import Row from "../Row/Row";

import st from './Table.module.css';

const Table = () => {
    const { allPosts, filteredPost } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost());
    }, [dispatch]);

    const deleteCb = (id) => {
        dispatch(deletePost(id));
    };

    return (
        <table className={st.table}>
            <thead className={st.head}>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredPost.length > 0 ? (
                filteredPost.map((post) => (
                    <Row
                    key={post.id}
                    id={post.id}
                    nombre={post.nombre}
                    descrip={post.descrip}
                    deleteCb={deleteCb}
                    />
                ))
                ) : allPosts.length === 0 ? (
                <tr>
                    <td colSpan="3">Sin Datos</td>
                </tr>
                ) : (
                allPosts.map((post) => (
                    <Row
                    key={post.id}
                    id={post.id}
                    nombre={post.nombre}
                    descrip={post.descrip}
                    deleteCb={deleteCb}
                    />
                ))
                )}
            </tbody>
        </table>
    );
};

export default Table;

/**
 * 
 * <table class="blueTable">
<thead>
<tr>
<th>head1</th>
<th>head2</th>
<th>head3</th>
</tr>
</thead>
<tfoot>
<tr>
<td colspan="3">
<div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
</td>
</tr>
</tfoot>
<tbody>
<tr>
<td>cell1_1</td><td>cell2_1</td><td>cell3_1</td></tr>
<tr>
<td>cell1_2</td><td>cell2_2</td><td>cell3_2</td></tr>
<tr>
<td>cell1_3</td><td>cell2_3</td><td>cell3_3</td></tr>
<tr>
<td>cell1_4</td><td>cell2_4</td><td>cell3_4</td></tr>
</tbody>
</tr>
</table>
 */