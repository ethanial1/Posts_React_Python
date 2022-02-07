# Rutas

- **[ GET ] Listar todos los post**
    > ejemplo de la petición con JavaScript fetch
   
    ```javascript

    fetch('http://127.0.0.1:5000/')
    .then (resp => resp.json())
    .then(json => console.log(json))
    // respuesta ---->
    /*
        [
            {
                id: 16,
                nombre: "Fernando",
                descrip: "este es mi post de fernando, saludos.",
            },
            {
                id: 17,
                nombre: "Miguel",
                descrip: "Hola a todos, este es mi post de ejemplo",
            }
        ]
    
    */
    ```

- **[ POST ] Guardar un nuevo post**
    > ejemplo de la petición con JavaScript fetch

    ```javascript
    fetch("http://127.0.0.1:5000/create", {
        method: 'POST',
        headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        body: JSON.stringify({
                nombre: "Nombre de prueba",
                descrip: "este es mi post de prueba, saludos."
            })
        }
    )
    .then (resp => resp.json())
    .then(json => console.log(json))
    // respuesta ----->
    /*
        {
            msg": "post guardado correctamente",
            data: {
                id: 19,
                nombre: "Nombre de prueba",
                descrip: "este es mi post de prueba, saludos."
            },
        
        }
    */
    ```

- **[ DELETE ] borrar un post**
    > ejemplo de la petición con JavaScript fetch

    ```javascript
    fetch("http://127.0.0.1:5000/delete/16", {
        method: 'DELETE',
    )
    .then (resp => resp.json())
    .then(json => console.log(json))
    // respuestas
    // ---- exito: el id es valido y el post se elimino
    /*
        {
            msg: "post eliminado correctamente"
            data: {
                id: 16,
                nombre: "Fernando"
                descrip: "este es mi post de Fernando, saludos.",
            }
        }
    */
    // ----- error: el id no es valido
    /*
        {
            msg: "No existe el post con id 16"
        }
    */
    ```