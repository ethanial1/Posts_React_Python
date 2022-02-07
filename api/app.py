from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes.posts import posts

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://ethan:@localhost:5432/ethan'

SQLAlchemy(app)

app.register_blueprint(posts)
