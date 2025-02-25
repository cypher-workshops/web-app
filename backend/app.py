# Import required modules
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///TVShows.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database object
db = SQLAlchemy(app)

# Define the Bones model (represents a table in the database)
class Bones(db.Model):
    id = db.Column(db.Integer, primary_key=True)  
    season = db.Column(db.Integer, nullable=True)  
    episode = db.Column(db.Integer, nullable=True)  
    rating = db.Column(db.Integer, nullable=True)  
    genre = db.Column(db.String(50), nullable=True) 

# Define the Greys model (represents a table in the database)
class Greys(db.Model):
    id = db.Column(db.Integer, primary_key=True)  
    season = db.Column(db.Integer, nullable=True)  
    episode = db.Column(db.Integer, nullable=True)  
    rating = db.Column(db.Integer, nullable=True)  
    genre = db.Column(db.String(50), nullable=True) 

# Create the database and tables
with app.app_context():
    db.create_all()

# Route to get all episodes in the bones database
@app.route('/bones', methods=['GET'])
def get_episodes():
    bones_episodes = Bones.query.all()
    return jsonify([{
        "id": p.id,
        "season": p.season,
        "episode": p.episode,
        "rating": p.rating,
        "genre": p.genre
    } for p in bones_episodes])

# Get by genre
@app.route('/bones/<genre>', methods=['GET'])
def get_episode_bygenre(genre):
    bones_episodes = Bones.query.filter_by(genre=genre).all()
    return jsonify([{
        "id": p.id,
        "season": p.season,
        "episode": p.episode,
        "rating": p.rating,
        "genre": p.genre
    } for p in bones_episodes])

# Get by season
@app.route('/bones/<int:season>', methods=['GET'])
def get_episode_byseason(season):
    bones_episodes = Bones.query.get(season)
    return jsonify([{
        "id": p.id,
        "season": p.season,
        "episode": p.episode,
        "rating": p.rating,
        "genre": p.genre
    } for p in bones_episodes])

# Route to add a new bones episode
@app.route('/bones', methods=['POST'])
def add_person():
    data = request.get_json()
    if not all(key in data for key in ["season", "episode", "rating", "genre"]):
        return jsonify({"error": "Missing required fields"}), 400

    new_episode = Bones(
        season=data["season"],
        episode=data["episode"],
        rating=data["rating"],
        genre=data["genre"]
    )

    db.session.add(new_episode)
    db.session.commit()
    return jsonify({"message": "Bones episode added successfully", "id": new_episode.id}), 201

# Route to update a bones epsiode by ID (PUT request)
@app.route('/bones/<int:id>', methods=['PUT'])
def update_episode(id):
    bones_episode = Bones.query.get(id)
    if bones_episode is None:
        return jsonify({"error": "EBones episode not found"}), 404

    data = request.get_json()
    bones_episode.season = data.get("season", bones_episode.season)
    bones_episode.episode = data.get("episode", bones_episode.episode)
    bones_episode.rating = data.get("rating", bones_episode.rating)
    bones_episode.genre = data.get("genre", bones_episode.genre)

    db.session.commit()
    return jsonify({"message": "Bones episode updated successfully"})

# Route to delete a bones episode by ID
@app.route('/bones/<int:id>', methods=['DELETE'])
def delete_epsiode(id):
    bones_episode = Bones.query.get(id)
    if bones_episode is None:
        return jsonify({"error": "Episode not found"}), 404

    db.session.delete(bones_episode)
    db.session.commit()
    return jsonify({"message": "Bones episode deleted successfully"})

# Copy and paste lines 37-92 and try updating them to create a Greys model (table)!

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
