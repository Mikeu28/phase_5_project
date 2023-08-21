from config import app, db, api

@app.route( "/" )
def index():
    return '<h1>Phase 5 Project</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)