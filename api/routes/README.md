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
                "id": 16,
                "nombre": "Fernando",
                "descrip": "este es mi post de fernando, saludos.",
            },
            {
                "id": 17,
                "nombre": "Miguel",
                "descrip": "Hola a todos, este es mi post de ejemplo",
            }
        ]
    
    */
    ```