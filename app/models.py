from . import db

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    bmi = db.Column(db.Float)
    last_update = db.Column(db.DateTime, default=db.func.current_timestamp())
    # This allows you to store the history of generated plans
    diet_plan = db.Column(db.Text)
