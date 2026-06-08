from . import db

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    institution = db.Column(db.String(100))
    bmi = db.Column(db.Float)
    diet_plan = db.Column(db.Text)
