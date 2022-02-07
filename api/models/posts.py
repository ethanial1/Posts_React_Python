from utils.db import db

class Posts (db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(256), nullable=False)
    descrip = db.Column(db.Text, nullable=False)

    def __ini__(self, nombre, descrip):
        self.nombre = nombre,
        self.descrip = descrip
