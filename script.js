document.addEventListener('DOMContentLoaded', () => {
    // === 1. NAVIGATION SEARCH TOGGLE ===
    const searchTrigger = document.querySelector('.search-trigger');
    const navbar = document.querySelector('.navbar');

    if (searchTrigger) {
        searchTrigger.addEventListener('click', () => {
            // Toggle a class on the navbar to show/hide a search input dynamically
            navbar.classList.toggle('search-active');
            
            // Accessible focus handling
            const searchInput = document.querySelector('.nav-search input');
            if (navbar.classList.contains('search-active') && searchInput) {
                searchInput.focus();
            }
        });
    }

    // === 2. LEADERBOARD LIVE SEARCH / FILTER ===
    // Creates a smooth, interactive search filter directly above your table
    const leaderboardSection = document.querySelector('.leaderboard-section');
    const table = document.querySelector('.leaderboard-table');

    if (leaderboardSection && table) {
        // Create the search input element dynamically
        const filterContainer = document.createElement('div');
        filterContainer.className = 'table-filter-wrapper';
        filterContainer.innerHTML = `
            <input type="text" id="teamFilter" placeholder="🔍 Search for a team in the standings..." />
        `;
        
        // Insert it right above the responsive table container
        const tableContainer = document.querySelector('.table-responsive-container');
        leaderboardSection.insertBefore(filterContainer, tableContainer);

        const filterInput = document.getElementById('teamFilter');
        const rows = table.querySelectorAll('tbody tr');

        filterInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            rows.forEach(row => {
                const teamName = row.querySelector('.team-name-col').textContent.toLowerCase();
                
                // Toggle visibility based on matching text
                if (teamName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none'; // Smoothly hides unmatched teams
                }
            });
        });
    }

    // === 3. BUTTON CLICK EFFECTS ===
    const buttons = document.querySelectorAll('.cta-btn, .search-trigger');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'none';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'none';
        });
    });
});