from flask import Blueprint, request, jsonify
from models.posts import Posts
from utils.db import db

posts = Blueprint('posts', __name__)

@posts.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    return response


@posts.route('/', methods=['GET'])
def list():
    try:
        posts = Posts.get_all()
        return jsonify(posts)
        
    except Exception as ex:
        return jsonify({"msg": "ocurrio un error"}), 500


@posts.route('/create', methods=['POST'])
def save_post():

    try:
        nombre, descrip = request.json.values()
        if not nombre or not descrip:
            raise Exception
        
        nuevo_post = Posts(nombre=nombre, descrip=descrip)
        
        db.session.add(nuevo_post)
        db.session.commit()
    
        return jsonify({
            "msg": "post guardado correctamente",
            "data": {
                "id": nuevo_post.id,
                "nombre": nuevo_post.nombre,
                "descrip": nuevo_post.descrip
            }
        })

    except Exception as ex:
        return jsonify({"msg": "ocurrio un error"}), 400

@posts.route('/update', methods=['PUT'])
def update_post():
    try:
        id, nombre, descrip = request.json.values()

        if not id or not nombre or not descrip:
            raise Exception

        post = Posts.query.get(id)

        post.nombre = nombre
        post.descrip = descrip

        db.session.commit()

        return jsonify({"msg": "Post actualizado"})
    except Exception as ex:
        return jsonify({"msg": "ocurrio un error"}), 400

@posts.route('/delete/<int:id>', methods=['DELETE'])
def delete_post(id):
    try:
        post = Posts.query.get(id)
        if post is not None:
            db.session.delete(post)
            db.session.commit()

            return jsonify({
                "msg": "post eliminado correctamente",
                "data": {
                    "id": post.id,
                    "nombre": post.nombre,
                    "descrip": post.descrip
                }
            })
        
        return jsonify({"msg": "No existe el post con id {0}".format(id)}), 400
    except Exception as ex:
        return jsonify({"msg": "ocurrio un error"}), 500
