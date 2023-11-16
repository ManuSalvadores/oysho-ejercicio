Cypress.Commands.add("gherkinSyntax", (label, action) => {
  cy.log(`${label.toUpperCase()}: ${action}`);
});

Cypress.Commands.add("visitPage", (page) => {
  switch (page) {
    case "home":
      {
        cy.visit("https://www.oysho.com/es/index", {
          failOnStatusCode: false,
        });
      }
      break;

    case "login": {
      cy.visit("https://www.oysho.com/es/logon", {
        failOnStatusCode: false,
      });
      break;
    }
    case "shop-cart": {
      cy.visit("https://www.oysho.com/es/shop-cart", {
        failOnStatusCode: false,
      });
      break;
    }
    default:
      {
        cy.visit("https://www.oysho.com/es/index", {
          failOnStatusCode: false,
        });
      }
      break;
  }
});
