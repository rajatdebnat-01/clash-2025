 // ===== Authentication =====
  
    function handleLogin() {
      const email = document.getElementById("email").value.trim();
      if (email) {
        localStorage.setItem("user", email);
        loginScreen.style.display = "none";
        dashboard.style.display = "block";
        renderContent();
        initCharts();
        updateMetrics();
        showSection('analytics'); // Show analytics by default
    //    window.location.href = "new2.html"; // Redirect to new2.html
      } else {
        alert("Please enter a valid email address");
      }
    }