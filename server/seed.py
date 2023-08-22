from models import Game_Class, Spell
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
        
        def create_spells ():
            fs1 = Spell ( name = "Second Wind", game_class_id = 1, level = 1 )
            fs2 = Spell ( name = "Action Surge", game_class_id = 1, level = 2 )
            ps1 = Spell ( name = "Lay on Hands", game_class_id = 2, level = 1)
            ps2 = Spell ( name = "Holy Rebuke", game_class_id = 2, level = 1)
            ps3 = Spell ( name = "Turn Undead", game_class_id = 2, level = 1)
            ws1 = Spell ( name = "Magic Missles", game_class_id = 3, level = 1 )
            ws2 = Spell ( name = "Grease", game_class_id = 3, level = 1 )
            ws3 = Spell ( name = "Witch Bolt", game_class_id = 3, level = 1 )
            ws4 = Spell ( name = "Shatter", game_class_id = 3, level = 2 )
            ws5 = Spell ( name = "Scorching Ray", game_class_id = 3, level = 2 )
            ws6 = Spell ( name = "Misty Step", game_class_id = 3, level = 2 )
            spells = [ fs1, fs2, ps1, ps2, ps3, ws1, ws2, ws3, ws4, ws5, ws6]
            for spell in spells:
                db.session.add ( spells )
            db.session.commit()
        
        print ( "Seeding Game Classes..." )
        create_game_class()

        print ( "Seeding Spells...")
        create_spells()

        print ( "Seeing complete.... for now." )


