const form = document.getElementById("blog-form");
  
// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = form.username.value;
    const title = form.title.value;
    const content = form.content.value;
    const formError = document.getElementById("form-error");
    
    // Add input field completion error
    if (username === '' || title === '' || content === '') {
        formError.textContent = "Please complete all fields before submitting.";
        return;
    } 

    // Use localStorage to store blog post data
    const blogPostData = {
        username: username,
        title: title,
        content: content
    }
    storeBlogPost(blogPostData);
      
    function storeBlogPost(blogPostData) {
        // Get blogPosts from local storage or set to an empty array if null
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPostData);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }
  
    // Redirect to posts page
    window.location.href = "blog.html";
});
    
  