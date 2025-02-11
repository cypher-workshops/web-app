# Import required modules
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database object
db = SQLAlchemy(app)

# Define the Person model (represents a table in the database)
class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Unique ID, auto-incrementing
    name = db.Column(db.String(100), nullable=False)  # Name (required)
    favorite_animal = db.Column(db.String(100), nullable=False)  # Favorite animal (required)
    age = db.Column(db.Integer, nullable=False)  # Age (required)
    favorite_color = db.Column(db.String(50), nullable=False)  # Favorite color (required)

# Create the database and tables
with app.app_context():
    db.create_all()

# Route to get all people in the database
@app.route('/people', methods=['GET'])
def get_people():
    people = Person.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "favorite_animal": p.favorite_animal,
        "age": p.age,
        "favorite_color": p.favorite_color
    } for p in people])

# Route to add a new person
@app.route('/people', methods=['POST'])
def add_person():
    data = request.get_json()
    if not all(key in data for key in ["name", "favorite_animal", "age", "favorite_color"]):
        return jsonify({"error": "Missing required fields"}), 400

    new_person = Person(
        name=data["name"],
        favorite_animal=data["favorite_animal"],
        age=data["age"],
        favorite_color=data["favorite_color"]
    )

    db.session.add(new_person)
    db.session.commit()
    return jsonify({"message": "Person added successfully", "id": new_person.id}), 201

# Route to get a person by ID
@app.route('/people/<int:id>', methods=['GET'])
def get_person(id):
    person = Person.query.get(id)
    if person is None:
        return jsonify({"error": "Person not found"}), 404

    return jsonify({
        "id": person.id,
        "name": person.name,
        "favorite_animal": person.favorite_animal,
        "age": person.age,
        "favorite_color": person.favorite_color
    })

# Route to update a person by ID (PUT request)
@app.route('/people/<int:id>', methods=['PUT'])
def update_person(id):
    person = Person.query.get(id)
    if person is None:
        return jsonify({"error": "Person not found"}), 404

    data = request.get_json()
    person.name = data.get("name", person.name)
    person.favorite_animal = data.get("favorite_animal", person.favorite_animal)
    person.age = data.get("age", person.age)
    person.favorite_color = data.get("favorite_color", person.favorite_color)

    db.session.commit()
    return jsonify({"message": "Person updated successfully"})

# Route to delete a person by ID
@app.route('/people/<int:id>', methods=['DELETE'])
def delete_person(id):
    person = Person.query.get(id)
    if person is None:
        return jsonify({"error": "Person not found"}), 404

    db.session.delete(person)
    db.session.commit()
    return jsonify({"message": "Person deleted successfully"})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
