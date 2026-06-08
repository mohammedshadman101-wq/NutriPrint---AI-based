from flask import Flask, render_template, request, jsonify
import sqlite3
import os

app = Flask(__name__, static_folder='static', template_folder='templates')
DB_FILE = 'nutriprint.db'

def init_db():
    """Initializes the database table if it doesn't exist yet."""
    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS students (
                id TEXT PRIMARY KEY,
                age TEXT,
                height TEXT,
                weight TEXT,
                bmi TEXT,
                status TEXT
            )
        ''')
        conn.commit()

# Initialize database right away
init_db()

@app.route('/')
def index():
    """Serves the main dashboard application."""
    return render_template('index.html')

@app.route('/api/students', methods=['GET'])
def get_students():
    """Fetches all saved students from the database."""
    try:
        with sqlite3.connect(DB_FILE) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM students')
            rows = cursor.fetchall()
            students = [dict(row) for row in rows]
        return jsonify(students), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/students', methods=['POST'])
def save_student():
    """Saves a newly enrolled student record into the database."""
    try:
        data = request.get_json()
        with sqlite3.connect(DB_FILE) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT OR REPLACE INTO students (id, age, height, weight, bmi, status)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (data['id'], data['age'], data['height'], data['weight'], data['bmi'], data['status']))
            conn.commit()
        return jsonify({"message": "Student record saved securely"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/generate-menu', methods=['POST'])
def generate_menu():
    """Generates a smart, context-aware meal matrix."""
    data = request.get_json()
    institution = data.get('institution', 'General Institution')
    
    # Logic: Dynamic algorithm to simulate AI-driven menu generation
    categories = ['Breakfast', 'Lunch', 'Snack', 'Dinner']
    menu_data = {
        cat: [f"{cat} Option {i+1} for {institution}" for i in range(6)] 
        for cat in categories
    }
    
    return jsonify({"institution": institution, "menu": menu_data})

if __name__ == '__main__':
    # Use port 5000 for local development
    app.run(debug=True, port=5000)
