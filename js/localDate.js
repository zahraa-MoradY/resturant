const dateInput = document.getElementById("date");

// Using UTC (universal coordinated time)
dateInput.value = new Date().toISOString().split("T")[0];
