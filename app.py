from flask import Flask, render_template, request, jsonify
import sqlite3
import random

app = Flask(__name__, static_folder='static', template_folder='templates')
DB_FILE = 'nutriprint.db'

# [Keep your existing init_db(), get_students(), and save_student() functions here]

@app.route('/api/generate-menu', methods=['POST'])
def generate_menu():
    """Generates a smart, context-aware meal matrix."""
    data = request.get_json()
    institution = data.get('institution', 'General Institution')
    
    # AI Logic: Create a unique diet matrix based on the institution type
    # In a real app, this is where you'd call an OpenAI/Gemini API.
    # For now, we simulate this with a dynamic algorithm:
    categories = ['Breakfast', 'Lunch', 'Snack', 'Dinner']
    menu_data = {
        cat: [f"{cat} Option {i+1} for {institution}" for i in range(6)] 
        for cat in categories
    }
    
    return jsonify({"institution": institution, "menu": menu_data})

# [Keep your existing if __name__ == '__main__': block]
