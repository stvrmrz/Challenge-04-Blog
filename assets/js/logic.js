    // Add event listener for theme toggle
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    });