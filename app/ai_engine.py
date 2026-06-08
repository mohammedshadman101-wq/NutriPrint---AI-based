import google.generativeai as genai

# Configure your API key here
genai.configure(api_key="YOUR_GEMINI_API_KEY")

def get_ai_meal_plan(student_data):
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"Create a weekly Karnataka-style meal plan under 50 INR per meal for a student with BMI: {student_data['bmi']}"
    response = model.generate_content(prompt)
    return response.text
