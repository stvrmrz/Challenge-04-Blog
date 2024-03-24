
     const form = document.getElementById("blog-form");
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = form.username.value;
      const title = form.title.value;
      const contentText = form.content.value;
      const formError = document.getElementById("form-error");

      if (username === '' || title === '' || contentText === '') {
        formError.textContent = "Please complete all fields before submitting.";
        return;
      } 
  
      // Redirect to posts page
      window.location.href = "blog.html";
    });
    
  