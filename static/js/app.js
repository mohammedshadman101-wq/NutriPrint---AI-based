document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blueprintForm');
    const grid = document.getElementById('weeklyGrid');
    const title = document.getElementById('institutionTitle');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const institution = document.getElementById('institutionName').value;

        const response = await fetch('/api/generate-menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ institution })
        });
        const data = await response.json();

        title.textContent = data.institution.toUpperCase();
        grid.innerHTML = ''; // Clear old

        Object.entries(data.menu).forEach(([cat, meals]) => {
            const header = document.createElement('div');
            header.className = 'grid-cell';
            header.style.fontWeight = 'bold';
            header.innerText = cat;
            grid.appendChild(header);

            meals.forEach(m => {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.innerText = m;
                grid.appendChild(cell);
            });
        });
    });
});
