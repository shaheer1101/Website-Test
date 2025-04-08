
    // Copy Button functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Find the nearest .command-text div to this button
            var commandText = this.previousElementSibling; // Assuming button is after the command box content

            // Create a temporary textarea to copy the content
            var textArea = document.createElement("textarea");
            textArea.value = commandText.innerText; // Get text from command box
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            // Optional: Show an alert or change button text
            alert("Commands copied to clipboard!");
        });
    });

    // Category Filter functionality
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoryContents = document.querySelectorAll('.category-content');

    // Add event listeners to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Get the category selected
            const category = this.getAttribute('data-category') || this.getAttribute('data-action');

            // Show and hide content based on the selected category
            categoryContents.forEach(content => {
                if (content.getAttribute('data-category') === category || content.getAttribute('data-action') === category) {
                    content.style.display = 'block'; // Show the relevant content
                } else {
                    content.style.display = 'none'; // Hide the content
                }
            });
        });
    });

