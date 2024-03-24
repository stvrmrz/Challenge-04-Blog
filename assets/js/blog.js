  
    // Add event listener for theme toggle
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    });
    
    // Load blog posts from localStorage
    const content = document.getElementById("content");
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    displayBlogPosts(blogPosts);
    
    function displayBlogPosts(blogPosts) {
        // Clear existing content
        content.innerHTML = '';
      
        // Iterate over each blog post
        blogPosts.forEach(blogPost => {
          // Create a new div element for each blog post
          const blogPostDiv = document.createElement("div");
          // Add a class to the div for styling purposes
          blogPostDiv.classList.add("blogPost");
          
          // Create and set inner HTML for the blog post
          const titleElement = document.createElement("h3");
          titleElement.textContent = blogPost.title;
          
          const contentElement = document.createElement("p");
          contentElement.textContent = blogPost.content;
          
          const userNameElement = document.createElement("p");
          userNameElement.textContent = "By: " + blogPost.username;
          
          // Append title, content, and author elements to the blog post div
          blogPostDiv.appendChild(titleElement);
          blogPostDiv.appendChild(contentElement);
          blogPostDiv.appendChild(userNameElement);
          
          // Append the blog post div to the content container
          content.appendChild(blogPostDiv);
        });
      }
      

  