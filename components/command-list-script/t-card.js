// Individual Card Component
class TCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Command Name';
        const description = this.getAttribute('description') || 'Command description goes here';
        const image = this.getAttribute('image');
        const buttonText = this.getAttribute('button-text') || 'View Command';

        this.innerHTML = `
            <div class="card">
                <div class="card-image">
                    ${image ? `
                        <img src="${image}" alt="${title}">
                    ` : `
                        <div class="image-placeholder">
                            <div>📋</div>
                            <div style="margin-top: 8px; font-size: 12px;">Command Image</div>
                        </div>
                    `}
                </div>
                <div class="card-content">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-description">${description}</p>
                    <button class="card-button" onclick="this.handleViewCommand('${title}')">
                        ${buttonText}
                    </button>
                </div>
            </div>
        `;
    }
}

// Add global function to handle button clicks
window.handleViewCommand = function(commandName) {
    alert(`Viewing command: ${commandName}`);
    // You can replace this with your actual navigation logic
    // window.location.href = `/command-details?name=${encodeURIComponent(commandName)}`;
};

customElements.define('t-card', TCard);