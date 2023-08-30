from config import app, db, api, flask_bcrypt
from flask import request, make_response, session
from flask_restful import Resource
from models import Game_Class, Spell, User



@app.route( "/" )
def index():
    return '<h1>Phase 5 Project</h1>'

class Users ( Resource ):
    
    def get ( self ):
        return make_response( [ user.to_dict( rules = ( "-user_movies", "-movies", ) ) for user in User.query.all() ], 200)
    
    def post ( self ):
        data = request.json
        
        try:
            user = User(
                username = data[ 'username' ],
                _password_hash = data[ '_password_hash' ]
            )
        except ValueError as v_error:
            
            return make_response( { "errors" : [ str( v_error ) ] }, 400 )
        
        db.session.add( user )
        db.session.commit()
        session['user_id'] = user.id

        return make_response(user.to_dict(), 201)

api.add_resource( Users, "/users" )

class Game_Classes ( Resource ):

    def get( self ):
        
        return make_response( [ game_class.to_dict ( rules = ( "-character_classes", ) ) for game_class in Game_Class.query.all() ], 200 )

api.add_resource( Game_Classes, "/game_classes" )

class Spells ( Resource ):
    def get( self ):
        
        return make_response([spell.to_dict( rules = ( "-spell_selections", ) ) for spell in Spell.query.all()], 200)
    
api.add_resource( Spells, "/spells" )

class UserLogin ( Resource ):
    
    def post ( self ):
        data = request.get_json()
        try:
            user = User.query.filter_by( name = data[ 'name' ] ).first()
            if user.authenticate( data[ 'password' ] ):
                session[ 'user_ud' ] = user.id
                response = make_response( user.to_dict(), 200 )
                return response
        except:
            return make_response( { 'error': 'Name or password is incorrect' }, 401 )


api.add_resource( UserLogin, "/api/login" )

class UserLogout ( Resource ):
    
    def delete ( self ):
        session[ 'user_id' ] = None
        return make_response( '', 204 )
    
api.add_resource( UserLogout, "/api/logout" )

if __name__ == '__main__':
    app.run(port=5555, debug=True)