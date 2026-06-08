from flask import render_template, make_response
from weasyprint import HTML

@main.route('/download-report/<int:student_id>')
def download_report(student_id):
    student = Student.query.get_or_404(student_id)
    html_template = render_template('poster.html', student=student)
    pdf = HTML(string=html_template).write_pdf()
    
    response = make_response(pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = f'inline; filename={student.name}_report.pdf'
    return response
