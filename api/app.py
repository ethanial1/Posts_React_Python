from flask import Flask
from routes.posts import posts

app = Flask(__name__)

app.register_blueprint(posts)
