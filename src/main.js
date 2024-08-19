import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.scss';

// Routing functions that will simulate FE Frameworks ;)

// Function to fetch and display content from HTML files
async function fetchPage(url) {
    try {
        // Adjust the URL to ensure it's properly formatted for fetching
        const path = url === '/' ? '/home' : url;
        const response = await fetch(`/pages${path}.html`);
        if (!response.ok) throw new Error('Page not found');
        return await response.text();
    } catch (error) {
        // Return a placeholder or custom 404 message
        return '<h1>404</h1><p>Page not found.</p>';
    }
}

// Function to handle navigation
function navigateTo(url) {
    history.pushState(null, null, url);
    renderPage();
}

// Function to render the page based on the current URL
async function renderPage() {
    const path = window.location.pathname;
    const content = await fetchPage(path);
    document.getElementById('app').innerHTML = content;
}

// Handle back/forward navigation
window.addEventListener('popstate', renderPage);

// Attach event listeners to page links with data-link attrib
document.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
        event.preventDefault();
        navigateTo(new URL(event.target.href).pathname);
    }
});

// Initial render
renderPage();