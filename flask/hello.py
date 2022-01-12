from flask import Flask
from markupsafe import escape

app = Flask(__name__)

database = {
    "hhh":"hello",
    "One":"1",
    "Two":"2"
}

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/<name>")
def hello(name):
    if name in database:
        return database[name]
    return f"Hello, {escape(name)}!"

@app.route("/register,method = [GET])
def get(key):
    if key in database: 
        return database[key]
    


