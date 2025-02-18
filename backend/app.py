# Import required modules
from flask import Flask, jsonify, request
import requests
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)  


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Chemistry_of_Sugars(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Unique ID, auto-incrementing
    Origin_of_Sugar = db.Column(db.String(100), nullable=False)  
    Chemical_Name = db.Column(db.String(100), nullable=False) 
    Chemical_Properties = db.Column(db.Integer, nullable=False) 
    Physical_Appearance = db.Column(db.String(50), nullable=False)  
    Saftey_and_Use = db.Column(db.String(50), nullable=False)  

with app.app_context():
    db.create_all()

@app.route('/sugars', methods=['GET'])
def get_sugars():
    sugars = Chemistry_of_Sugars.query.all()
    return jsonify([{
        "id": s.id,
        "Origin of Sugar": s.Origin_of_Sugars,
        "Chemical_Name": s.Chemical_Name,
        "Chemical_Properties": s.Chemical_Properties,
        "Physical_Appearance": s.Physical_Appearance
        "Saftey": s.saftey
    } for s in sugars])


@app.route('/sugars', methods=['POST'])
def add_sugars():
    data = request.get_json()
    if not all(key in data for key in ["Origin_of_Sugars", "Chemical_Name", "Chemical_Properties", "Physical_Appearance","Safety"]):
        return jsonify({"error": "Missing required fields"}), 400

    new_sugars = Sugars(
        Origin_of_Sugars=data["Origin_of_Sugars"],
        Chemical_Name=data["Chemical_Name"],
        Chemical_Properties=data["Chemical_Properties"],
        Phsyical_Appearance=data["Physcial_Appearance"],
        Saftey=data["Safety"]
    )

    db.session.add(new_sugars)
    db.session.commit()
    return jsonify({"message": "Sugars added successfully", "id": new_sugars.id}), 201

# Route to get a person by ID
@app.route('/sugars/<int:id>', methods=['GET'])
def get_sugars(id):
    sugars = Chemistry_of_Sugars.query.get(id)
    if sugars is None:
        return jsonify({"error": "Sugars not found"}), 404

    return jsonify({
        "id": sugars.id,
        "Origin of Sugar": sugars.Origin_of_Sugars,
        "Chemical_Name": sugars.Chemical_Name,
        "Chemical_Properties": sugars.Chemical_Properties,
        "Physical_Appearance": sugars.Physical_Appearance,
        "Saftey": sugars.Saftey
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
@app.route('/sugars/<int:id>', methods=['DELETE'])
def delete_sugars(id):
    sugars = Chemistry_of_Sugars.query.get(id)
    if sugars is None:
        return jsonify({"error": "Sugars not found"}), 404

    db.session.delete(sugars)
    db.session.commit()
    return jsonify({"message": "Suagrs deleted successfully"})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
