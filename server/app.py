from config import app, db, api
from flask import request, make_response
from flask_restful import Resource
from models import Character#, Classes, Feats

@app.route( "/" )
def index():
    return '<h1>Phase 5 Project</h1>'

class Characters(Resource):

    def get(self):
        return make_response([character.to_dict() for character in Character.query.all()], 200)

api.add_resource(Characters, "/characters")

if __name__ == '__main__':
    app.run(port=5555, debug=True)