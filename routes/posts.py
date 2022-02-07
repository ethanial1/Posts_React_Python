from crypt import methods
from flask import Blueprint

posts = Blueprint('posts', __name__)

@posts.route('/')
def list():
    return 'Lista de posts'


@posts.route('/create', methods=['POST'])
def save_post():
    return 'guardar post'

@posts.route('/delete', methods=['DELETE'])
def delete_post():
    return 'eliminar post'
