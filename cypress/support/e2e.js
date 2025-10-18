// ***********************************************************
// 🌐 Global Cypress Support Configuration (e2e.js)
// ***********************************************************

// ✅ Import required plugins
import "cypress-real-events";
import "./commands";

// ==============================================
// 🧩 Cypress Global Setup
// ==============================================

// ✅ Gracefully handle common harmless exceptions
Cypress.on("uncaught:exception", (err, runnable) => {
  const ignoredMessages = [
    "ResizeObserver loop limit exceeded",
    "Cannot read properties of null",
    "Cannot read properties of undefined",
    "Blocked a frame with origin",
    "Script error",
  ];

  if (ignoredMessages.some((msg) => err.message.includes(msg))) {
    console.warn("⚠️ Ignored harmless exception:", err.message);
    return false;
  }

  const currentDomain = window.location.hostname;
  if (!currentDomain.includes("cubera.co") && !currentDomain.includes("localhost")) {
    console.warn("⚠️ Ignored external site exception:", currentDomain);
    return false;
  }

  return true; // let Cypress fail on real app errors
});

// ✅ Ignore blocked ad or analytics requests
Cypress.on("fail", (error, runnable) => {
  if (
    error.message.includes("net::ERR_BLOCKED_BY_CLIENT") ||
    error.message.includes("Script error")
  ) {
    console.warn("⚠️ Ignored third-party network error:", error.message);
    return false;
  }
  throw error;
});

// ✅ Global default timeouts & desktop viewport
Cypress.config({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  viewportWidth: 1536,  // 🖥️ Stable full-HD width for Cubera layout
  viewportHeight: 864,
});

// ==============================================
// 🌍 Global Hooks
// ==============================================

// ✅ Runs before every test
beforeEach(() => {
  cy.log("🌐 Starting test...");

  // 🖥️ Force stable desktop viewport every time
  cy.viewport(1536, 864);

  // 🧩 Optional fix: Adjust zoom when running in Cypress preview (only)
  cy.document().then((doc) => {
    if (Cypress.config("isInteractive")) {
      // ↓ Reduce zoom slightly to fix overlapping layout in Cypress GUI mode
      doc.body.style.zoom = "90%";
      cy.log("🔧 Adjusted zoom to 90% for better layout rendering in runner.");
    }
  });
});

// ✅ Runs after every test
afterEach(() => {
  cy.log("✅ Test completed.");
});
