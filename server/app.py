from config import app, db, api
from flask import request, make_response
from flask_restful import Resource
from models import Game_Class

@app.route( "/" )
def index():
    return '<h1>Phase 5 Project</h1>'

class Game_Classes (Resource):

    def get(self):
        return make_response([game_class.to_dict( rules = ( "-character_classes", ) ) for game_class in Game_Class.query.all()], 200)

api.add_resource(Game_Classes, "/game_classes")

if __name__ == '__main__':
    app.run(port=5555, debug=True)