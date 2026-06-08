document.addEventListener('DOMContentLoaded', () => {
    const App = {
        init() {
            this.cacheDOM();
            this.bindRouterEvents();
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

                    // Flush old render matrix assets
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

            // Real-time Biometric Analytics Formula Layer
            if (this.enrollBtn) {
                this.enrollBtn.addEventListener('click', () => {
                    const id = `#NP-${Math.floor(Math.random() * 9000 + 1000)}`;
                    const hCm = (Math.random() * (140 - 110) + 110).toFixed(1);
                    const wKg = (Math.random() * (40 - 18) + 18).toFixed(1);
                    
                    // Core BMI metrics processing equation pipeline
                    const bmi = (wKg / ((hCm / 100) ** 2)).toFixed(2);

                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><strong>${id}</strong></td>
                        <td>9 Years</td>
                        <td>${hCm} cm / ${wKg} kg</td>
                        <td>${bmi} kg/m²</td>
                        <td><span style="color: var(--primary); font-weight:700;">Profile Evaluated Realtime</span></td>
                    `;
                    this.studentTableBody.appendChild(tr);
                });
            }
        }
    };

    App.init();
});
