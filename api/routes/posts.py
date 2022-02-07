from flask import Blueprint, request, jsonify
from models.posts import Posts
from utils.db import db

posts = Blueprint('posts', __name__)

@posts.route('/')
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


@posts.route('/delete', methods=['DELETE'])
def delete_post():
    return 'eliminar post'
