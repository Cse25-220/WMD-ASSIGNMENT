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