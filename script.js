<script>
  document.addEventListener("DOMContentLoaded", () => {
    const leagueCards = document.querySelectorAll(".team-badge-card");
    const tableRows = document.querySelectorAll(".leaderboard-table tbody tr");
    const viewAllBtn = document.getElementById("viewAllLeagues");

    // Function to filter the table
    function filterLeague(selectedLeague) {
      tableRows.forEach(row => {
        const rowLeague = row.getAttribute("data-league");
        
        if (selectedLeague === "all" || rowLeague === selectedLeague) {
          row.style.display = ""; // Show row
        } else {
          row.style.display = "none"; // Hide row
        }
      });
    }

    // Add click events to league cards
    leagueCards.forEach(card => {
      card.addEventListener("click", () => {
        // Remove active class from all cards, then add it to the clicked one
        leagueCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const targetLeague = card.getAttribute("data-league");
        filterLeague(targetLeague);
      });
    });

    // Reset button to show everything again
    viewAllBtn.addEventListener("click", () => {
      leagueCards.forEach(c => c.classList.remove("active"));
      filterLeague("all");
    });
  });
</script>