from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, metadata

metadata = metadata
db = db

class Character ( db.Model, SerializerMixin ):
    __tablename__ = "characters"

    id = db.Column ( db.Integer, primary_key = True )
    name = db.Column ( db.String, nullable = False )

class Classes ( db.Model, SerializerMixin ):
    id = db.Column ( db.Integer, primary_key = True)

class Feats ( db.Model, SerializerMixin ):
    id = db.Column ( db.Integer, primary_key = True )

