from models import Game_Class#, Spell
from faker import Faker
from config import app, db

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Clearing db...")
        #Spell.query.delete()
        Game_Class.query.delete()

        print ( "Starting seed..." )

        def create_game_class ():
            class_names = [ "Fighter", "Paladin", "Wizard" ]
            sorted_name = sorted(class_names)
            for name in sorted_name:
                game_class = Game_Class(name = name)
                db.session.add ( game_class )
            db.session.commit()
        
        print ( "Seeding Game Classes" )
        create_game_class()

        print ( "Seeing complete.... for now." )


