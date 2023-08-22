from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, metadata

metadata = metadata
db = db

class User ( db.Model, SerializerMixin ):
    __tablename__ = "user"

    id = db.Column ( db.Integer, primary_key = True )
    username = db.Column ( db.String, nullable = False, unique = True)
    password = db.Column ( db.String, nullable = False )
    profile_picture = db.Column ( db.String )

    #Relationships

    characters = db.relationship ( "Character", back_populates = "user" )

class Character ( db.Model, SerializerMixin ):
    __tablename__ = "character"

    id = db.Column ( db.Integer, primary_key = True )
    name = db.Column ( db.String, nullable = False)
    user_id = db.Column ( db.Integer, db.ForeignKey( "user.id" ) )

    #Relationships

    character_classes = db.relationship ( "Character_Class", back_populates = "character" )
    game_classes = association_proxy ( "character_class", "game_class" )
    spell_selections = db.relationship ( "Spell_Selection", back_populates = "character" )
    user = db.relationship ( "User", back_populates = "characters" )



class Character_Class ( db.Model, SerializerMixin ):
    __tablename__ = "character_class"

    id = db.Column ( db.Integer, primary_key = True )
    classes_id = db.Column ( db.Integer,  db.ForeignKey( "game_class.id" ), nullable = False )
    character_id = db.Column ( db.Integer,  db.ForeignKey( "character.id" ), nullable = False )
    level = db.Column ( db.Integer, nullable = False )
    
    #Relationships

    character = db.relationship ( "Character", back_populates = "character_classes")
    game_class = db.relationship ( "Game_Class", back_populates = "character_classes")

class Game_Class ( db.Model, SerializerMixin ):
    __tablename__ = "game_class"

    id = db.Column ( db.Integer, primary_key = True )
    name = db.Column ( db.String, nullable = False )

    #Relationships

    character_classes = db.relationship ( "Character_Class", back_populates = "game_class" )
    characters = association_proxy ( "character_class", "character" )

    


class Spell ( db.Model, SerializerMixin ):
    __tablename__ = "spell"

    id = db.Column ( db.Integer, primary_key = True )
    name = db.Column ( db.String, nullable = False )
    classes_id = db.Column ( db.Integer, db.ForeignKey( "game_class.id" ), nullable = False )
    level = db.Column ( db.Integer, nullable = False )

    #Relationships

    spell_selections = db.relationship ( "Spell_Selection", back_populates = "spell" )


class Spell_Selection ( db.Model, SerializerMixin ):
    __tablename__ = "spell_selection"

    id = db.Column ( db.Integer, primary_key = True )
    character_id = db.Column ( db.Integer, db.ForeignKey( "character.id" ), nullable = False )
    spells_id = db.Column ( db.Integer, db.ForeignKey( "spell.id" ) )

    #Relationships

    spell = db.relationship ( "Spell", back_populates = "spell_selections" )
    character = db.relationship ( "Character", back_populates = "spell_selections" )







