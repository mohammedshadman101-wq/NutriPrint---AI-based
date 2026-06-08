import google.generativeai as genai
import os

# Set your API key in your Render Environment Variables
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

def generate_nutritional_matrix(student_bmi):
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"Given a student with BMI {student_bmi}, generate a weekly meal plan using local Karnataka ingredients under 50 INR. Format as a structured nutritional report."
    
    response = model.generate_content(prompt)
    return response.text
