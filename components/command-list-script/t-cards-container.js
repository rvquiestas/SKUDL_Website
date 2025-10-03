// Cards Container Component
class TCardsContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
    }

    connectedCallback() {
        this.loadCards();
        this.render();
    }

    loadCards() {
        const cardsAttr = this.getAttribute('cards');
        if (cardsAttr) {
            this.cards = JSON.parse(cardsAttr);
        }
    }

    render() {
        this.innerHTML = `
            <div class="cards-container">
                ${this.cards.map(card => `
                    <t-card 
                        title="${this.escapeHtml(card.title)}" 
                        description="${this.escapeHtml(card.description)}"
                        ${card.image ? `image="${card.image}"` : ''}
                        button-text="View Guide"
                    ></t-card>
                `).join('')}
            </div>
        `;
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Method to update cards dynamically
    updateCards(newCards) {
        this.cards = newCards;
        this.render();
    }
}

customElements.define('t-cards-container', TCardsContainer);