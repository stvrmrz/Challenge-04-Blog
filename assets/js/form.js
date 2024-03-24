
     const form = document.getElementById("blog-form");
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Redirect to posts page
      window.location.href = "blog.html";
    });
    
  