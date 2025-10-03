// Command List Component
class TCommandList extends HTMLElement {
    constructor() {
        super();
        this.commands = [];
        this.activeIndex = -1;
    }

    connectedCallback() {
        this.loadCommands();
        this.render();
        this.attachEventListeners();
    }

    loadCommands() {
        // Default commands - can be overridden by attributes
        this.commands = JSON.parse(this.getAttribute('commands') || JSON.stringify([
            {
                title: "1. PAGSASANAY NG KAWAL NA WALANG SANDATA (SCHOOL FOR SOLDIERS WITHOUT ARMS)",
                cards: [
                    { 
                        title: "A. Katayuan sa Pagtindig (Position of Attention)", 
                        description: "Basic position of attention for soldiers without arms",
                        image: "../img/attention.jpg"
                    },
                    {
                        title: "B. Katayuan sa Paghinga Nakahinto (Rest at Halt)",
                        description: "Relaxed position while standing",
                        image: "../img/Rest-At-Halt.png"
                    },
                    {
                        title: "C. Pagharap Kung Nakahinto (Facing at the Halt)",
                        description: "Relaxed position while standing",
                        image: "../img/Facing-At-Halt.jpg"
                    },
                    {
                        title: "D. Pagpugay (Salute)",
                        description: "Relaxed position while standing",
                        image: "../img/Salute.jpg"
                    },
                ]
            },
            {
                title: "2. MALAPITANG PAGSASANAY (CLOSE ORDER DRILL)",
                cards: [
                    { 
                        title: "Fall In Command", 
                        description: "Forming up the squad in proper alignment",
                        image: "../img/fall-in.jpg"
                    }
                ]
            }
        ]));
    }

    render() {
        this.innerHTML = `
            <div class="command-list">
                ${this.commands.map((command, index) => `
                    <div class="command-item ${index === this.activeIndex ? 'active' : ''}">
                        <div class="command-header" data-index="${index}">
                            <h3>${command.title}</h3>
                            <span class="command-icon">${index === this.activeIndex ? '−' : '+'}</span>
                        </div>
                        <div class="command-content">
                            <t-cards-container cards='${JSON.stringify(command.cards).replace(/'/g, "&#39;")}'></t-cards-container>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    attachEventListeners() {
        this.addEventListener('click', (e) => {
            const header = e.target.closest('.command-header');
            if (header) {
                const index = parseInt(header.dataset.index);
                this.toggleCommand(index);
            }
        });
    }

    toggleCommand(index) {
        if (this.activeIndex === index) {
            this.activeIndex = -1;
        } else {
            this.activeIndex = index;
        }
        this.render();
    }

    // Method to update commands dynamically
    updateCommands(newCommands) {
        this.commands = newCommands;
        this.activeIndex = -1;
        this.render();
    }
}

customElements.define('t-command-list', TCommandList);