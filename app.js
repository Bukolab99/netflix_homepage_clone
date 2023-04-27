const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div class="tab-container">
        <div class="tab-item" id="tab1">Tab 1</div>
        <div class="tab-item" id="tab2">Tab 2</div>
        <div class="tab-content-item" id="tab1-content">Content for tab 1</div>
        <div class="tab-content-item" id="tab2-content">Content for tab 2</div>
      </div>
    </body>
  </html>
`;

// Set up the DOM environment
const dom = new JSDOM(html);
global.document = dom.window.document;

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
