import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost, deletePost } from "../../redux/actions/actions";
import Row from "../Row/Row";

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
        <table>
        <thead>
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
