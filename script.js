document.addEventListener("DOMContentLoaded", () => {
  const leagueCards = document.querySelectorAll(".team-badge-card");
  const tableRows = document.querySelectorAll(".leaderboard-table tbody tr");
  const viewAllBtn = document.getElementById("viewAllLeagues");

  function filterLeague(selectedLeague) {
    tableRows.forEach(row => {
      const rowLeague = row.getAttribute("data-league");
      if (selectedLeague === "all" || rowLeague === selectedLeague) {
        row.style.display = ""; 
      } else {
        row.style.display = "none"; 
      }
    });
  }

  leagueCards.forEach(card => {
    card.addEventListener("click", () => {
      leagueCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const targetLeague = card.getAttribute("data-league");
      filterLeague(targetLeague);
    });
  });

  viewAllBtn.addEventListener("click", () => {
    leagueCards.forEach(c => c.classList.remove("active"));
    filterLeague("all");
  });
});