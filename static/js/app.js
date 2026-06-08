// Replace your existing form submit listener in app.js with this:
this.blueprintForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const institution = document.getElementById('institutionName').value;
    
    // Fetch the AI-generated matrix from our new Python engine
    const response = await fetch('/api/generate-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ institution })
    });
    const data = await response.json();

    // Update the UI
    this.institutionTitle.textContent = data.institution.toUpperCase();
    document.querySelectorAll('.meal-injected-cell').forEach(el => el.remove());

    Object.entries(data.menu).forEach(([category, meals]) => {
        const labelCell = document.createElement('div');
        labelCell.className = 'grid-cell meal-injected-cell';
        labelCell.style.fontWeight = '700';
        labelCell.innerText = category;
        this.weeklyGridTarget.appendChild(labelCell);

        meals.forEach(meal => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell meal-injected-cell';
            cell.innerText = meal;
            this.weeklyGridTarget.appendChild(cell);
        });
    });
});
