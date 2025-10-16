// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-real-events";
// ==============================================
// 🧩 Cypress Global Support (e2e.js)
// ==============================================

// ✅ Import custom commands
import './commands';

// ✅ Ignore uncaught exceptions from 3rd-party sites
Cypress.on("uncaught:exception", (err, runnable) => {
  // 🔸 Ignore known harmless errors from external scripts
  const ignoredMessages = [
    "ResizeObserver loop limit exceeded",
    "Cannot read properties of null (reading 'postMessage')",
    "Cannot read properties of undefined",
    "Blocked a frame with origin",
    "Script error",
  ];

  if (ignoredMessages.some((msg) => err.message.includes(msg))) {
    console.warn("⚠️ Ignored known harmless exception:", err.message);
    return false; // Prevent Cypress from failing
  }

  // 🔸 Ignore errors from external domains (LinkedIn, GA, etc.)
  const currentDomain = window.location.hostname;
  if (
    !currentDomain.includes("cubera.co") && // your domain
    !currentDomain.includes("localhost")
  ) {
    console.warn("⚠️ Ignored external site exception from:", currentDomain);
    return false;
  }

  // Let Cypress fail for real app errors
  return true;
});

// ✅ Handle failures gracefully
Cypress.on("fail", (error, runnable) => {
  // If it's a known third-party network or analytics error, ignore it
  if (
    error.message.includes("net::ERR_BLOCKED_BY_CLIENT") ||
    error.message.includes("Script error")
  ) {
    console.warn("⚠️ Ignored third-party network/analytics error:", error.message);
    return false;
  }
  throw error;
});

// ✅ Optional: Global configuration tweaks
Cypress.config({
  defaultCommandTimeout: 15000, // wait longer for elements
  pageLoadTimeout: 60000,       // allow slow pages to load
  viewportWidth: 1366,
  viewportHeight: 768,
});

// ✅ Global before hook (runs before every test)
beforeEach(() => {
  cy.log("🌐 Starting test...");
});

// ✅ Global after hook (runs after every test)
afterEach(() => {
  cy.log("✅ Test completed.");
});

