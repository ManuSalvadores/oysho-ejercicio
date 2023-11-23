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

var myVar = 1;
console.log(myVar);
// console.log(myLet)
// console.log(myConst)

// let myLet = 2
// const myConst = 3

const ordenarYsumar = (numbers) => {
  numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[numbers.length - 1];
};

console.log(ordenarYsumar([5, 1, 4, 10, 8]));
