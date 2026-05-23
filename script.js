document.addEventListener("DOMContentLoaded", () => {
  // 1. Grab all the interactive elements from the HTML
  const leagueCards = document.querySelectorAll(".team-badge-card");
  const tableRows = document.querySelectorAll(".leaderboard-table tbody tr");
  const viewAllBtn = document.getElementById("viewAllLeagues");

  // Debugging log to verify elements are being found by the browser
  console.log("Found cards:", leagueCards.length);
  console.log("Found rows:", tableRows.length);

  // 2. The core logic function that filters the visibility of the table rows
  function filterLeague(selectedLeague) {
    tableRows.forEach(row => {
      const rowLeague = row.getAttribute("data-league");
      
      if (selectedLeague === "all" || rowLeague === selectedLeague) {
        row.style.display = ""; // Makes the row visible
      } else {
        row.style.display = "none"; // Hides the row completely
      }
    });
  }

  // 3. Attach click event listeners to each popular league card
  leagueCards.forEach(card => {
    card.addEventListener("click", () => {
      // Clear active styling from all cards, then apply it to the clicked one
      leagueCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      // Extract value from data-league and run filter
      const targetLeague = card.getAttribute("data-league");
      filterLeague(targetLeague);
    });
  });

  // 4. Attach click event listener to the "VIEW ALL LEAGUES" reset button
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      leagueCards.forEach(c => c.classList.remove("active"));
      filterLeague("all");
    });
  }
});

// F&R THE FIXTURE LIST DROPDOWN FILTER

document.addEventListener('DOMContentLoaded', () => {
  const leagueFilter = document.getElementById('league-filter');
  const fixtureRows = document.querySelectorAll('.fixture-list-row');

  leagueFilter.addEventListener('change', (e) => {
    // Get the value selected in the dropdown (e.g., "La Liga")
    const selectedLeague = e.target.value;

    // Check every match row on the page
    fixtureRows.forEach(row => {
      // Get the league name stored in that specific row's data attribute
      const rowLeague = row.getAttribute('data-league');

      // If "All Competitions" is selected OR the row matches the selected league, show it
      if (selectedLeague === 'all' || rowLeague === selectedLeague) {
        row.style.display = ''; 
      } else {
        // Otherwise, hide it
        row.style.display = 'none';
      }
    });
  });
});