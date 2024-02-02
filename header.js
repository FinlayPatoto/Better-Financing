// Function to populate the header
function populateHeader(title, subtitle, buttons) {
    document.getElementById('headerTitle').innerText = title;
    document.getElementById('headerSubtitle').innerText = subtitle;

    // Create buttons dynamically
    const header = document.querySelector('header');
    buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = button.label;
        buttonElement.addEventListener('click', () => {
            // Navigate to the specified link when the button is clicked
            window.location.href = button.link;
        });
        header.appendChild(buttonElement);
    });
}

// Function to populate the footer with links
function populateFooter(links) {
    const footer = document.querySelector('footer');
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.innerText = link.label;
        linkElement.href = link.href;
        linkElement.target = '_blank'; // Open links in a new tab
        footer.appendChild(linkElement);
    });
}

// Call the function with your desired values
populateHeader('Better Financing', 'Exploring the power of saving!', [
    { label: 'Living Expenses', link: 'livingExpenses.html' },
    { label: 'No Living Expenses', link: 'noLivingExpenses.html' }
]);

populateFooter([
    { label: 'Powered by MadFinn Development Co.', href: 'https://madfinndevelopmentco.com/' }
]);