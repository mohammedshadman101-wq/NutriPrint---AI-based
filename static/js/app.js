document.addEventListener('DOMContentLoaded', () => {
    const App = {
        init() {
            this.cacheDOM();
            this.bindRouterEvents();
            this.loadSavedStudents(); // Load database values immediately on startup
        },

        cacheDOM() {
            this.navLinks = document.querySelectorAll('.nav-menu .nav-link');
            this.sections = document.querySelectorAll('.app-section');
            this.blueprintForm = document.getElementById('blueprintEngineForm');
            this.institutionTitle = document.getElementById('renderInstitutionTitle');
            this.weeklyGridTarget = document.getElementById('posterWeeklyGridTarget');
            this.studentTableBody = document.getElementById('studentMetricsTableBody');
            this.enrollBtn = document.getElementById('registerStudentBtn');
        },

        bindRouterEvents() {
            // View Switching Router Engine Matrix
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('data-target');
                    
                    this.sections.forEach(s => s.classList.remove('active'));
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    
                    document.getElementById(target).classList.add('active');
                    link.classList.add('active');
                });
            });

            // Diet Grid Optimization Compiler Assembly Row Injection
            if (this.blueprintForm) {
                this.blueprintForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const inputName = document.getElementById('institutionName').value;
                    this.institutionTitle.textContent = inputName.toUpperCase();

                    document.querySelectorAll('.meal-injected-cell').forEach(el => el.remove());

                    const rows = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
                    const foodArray = ['🥣 Ragi Malt', '🍲 Rice & Dal', '🍌 Fresh Fruit', '🫓 Veg Khichdi'];

                    rows.forEach((rowName, rIdx) => {
                        const labelCell = document.createElement('div');
                        labelCell.className = 'grid-cell meal-injected-cell';
                        labelCell.style.fontWeight = '700';
                        labelCell.innerText = rowName;
                        this.weeklyGridTarget.appendChild(labelCell);

                        for (let c = 0; c < 6; c++) {
                            const cell = document.createElement('div');
                            cell.className = 'grid-cell meal-injected-cell';
                            cell.innerText = foodArray[(rIdx + c) % foodArray.length];
                            this.weeklyGridTarget.appendChild(cell);
                        }
                    });
                });
            }

            // Real-time Biometric Analytics Formula Layer with DB Saving
            if (this.enrollBtn) {
                this.enrollBtn.addEventListener('click', () => {
                    const id = `#NP-${Math.floor(Math.random() * 9000 + 1000)}`;
                    const age = "9 Years";
                    const hCm = (Math.random() * (140 - 110) + 110).toFixed(1);
                    const wKg = (Math.random() * (40 - 18) + 18).toFixed(1);
                    const bmi = (wKg / ((hCm / 100) ** 2)).toFixed(2);
                    const status = "Profile Evaluated Realtime";

                    const studentData = { id, age, height: `${hCm} cm`, weight: `${wKg} kg`, bmi, status };

                    // Append row locally instantly for speed
                    this.appendStudentToTable(studentData);

                    // Send payload straight to SQLite database
                    fetch('/api/students', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(studentData)
                    })
                    .catch(err => console.error('Error syncing data with backend matrix database:', err));
                });
            }
        },

        async loadSavedStudents() {
            try {
                const response = await fetch('/api/students');
                const students = await response.get_json ? await response.get_json() : await response.json();
                
                // Flush placeholder mock layout data rows
                this.studentTableBody.innerHTML = '';
                
                // Hydrate table body row matrices cleanly
                students.forEach(student => this.appendStudentToTable(student));
            } catch (error) {
                console.error('Failed to sync persistent database records:', error);
            }
        },

        appendStudentToTable(student) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${student.id}</strong></td>
                <td>${student.age}</td>
                <td>${student.height} / ${student.weight}</td>
                <td>${student.bmi} kg/m²</td>
                <td><span style="color: var(--primary); font-weight:700;">${student.status}</span></td>
            `;
            this.studentTableBody.appendChild(tr);
        }
    };

    App.init();
});
