from flask import Flask, render_template, jsonify

# Establish the core server kernel with explicit asset directory routing
app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    # Automatically searches the templates/ folder for the UI shell
    return render_template('index.html')

if __name__ == '__main__':
    print("🚀 NutriPrint Enterprise Server Initialized...")
    app.run(debug=True, port=5000)
