from utils.db import db

class Posts (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(256), nullable=False)
    descrip = db.Column(db.Text, nullable=False)

    def __ini__(self, nombre, descrip):
        self.nombre = nombre
        self.descrip = descrip
    

    @staticmethod
    def get_all():
        posts = Posts.query.all()
        lista = []

        for post in posts:
            lista.append(
                {
                    'id': post.id,
                    'nombre': post.nombre,
                    'descrip': post.descrip
                }
            )
        
        return lista
