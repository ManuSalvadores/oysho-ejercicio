import {
  collapsiblePromotions,
  promotionsTextInput,
  promotionsButton,
  oneTrustAcceptButtonId,
} from "../../constants.js";
const WEB_PAGE = "shop-cart";

describe("Tests over Oysho's Shop Cart", () => {
  context("macbook-16 resolution", () => {
    beforeEach(() => {
      cy.gherkinSyntax("given", "User is using Macbook 16 in chrome");
      cy.viewport("macbook-16");

      cy.gherkinSyntax("when", `User is on ${WEB_PAGE} page`);
      cy.visitPage(WEB_PAGE);

      cy.get(oneTrustAcceptButtonId).click();
    });

    it("Should open collapsible promotions menu and throw error modal when filling with wrong data", () => {
      cy.get(collapsiblePromotions).click();
      cy.wait(1000);

      cy.get(promotionsTextInput).type("123456");
      cy.get(promotionsButton).click();
      cy.wait(1000);

      cy.contains(
        "Se ha producido un error, por favor recargue la página"
      ).should("exist");
    });
  });
});
