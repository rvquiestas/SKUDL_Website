// Toolbar and Search Bar Component
class T_Tool_Search_Bar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="tool-container">
            <div class="toolbar">
                <div class="toolbar-title">
                    CAT & ROTC - COMMAND AND DRILLS
                </div>
                <div class="search-toolbar">
                    <input type="text" placeholder="🔍 Search commands...">
                </div>
            </div>  
        </div> 
    `;
    }
}
customElements.define('t-tool-search-bar', T_Tool_Search_Bar);        