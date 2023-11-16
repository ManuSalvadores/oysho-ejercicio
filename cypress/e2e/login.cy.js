import {
  oneTrustAcceptButtonId,
  emailLogin,
  password,
} from "../../constants.js";
const WEB_PAGE = "login";

describe("Tests over Oysho's Login Page", () => {
  context("macbook-16 resolution", () => {
    beforeEach(() => {
      cy.gherkinSyntax("given", "User is using Macbook 16 in chrome");
      cy.viewport("macbook-16");
      cy.visitPage(WEB_PAGE);

      cy.gherkinSyntax("when", `user is on ${WEB_PAGE} page`);
      cy.get(oneTrustAcceptButtonId).click();
    });

    it("Should complete login data", () => {
      cy.gherkinSyntax("and", "User completes email data");
      cy.get(emailLogin).type("test@test.com");

      cy.gherkinSyntax("and", "User completes password data");
      cy.get(password).type("testpassword123");

      cy.gherkinSyntax("then", "inputs info should match correctly");

      cy.get(emailLogin).should("have.value", "test@test.com");
      cy.get(password).should("have.value", "testpassword123");
    });
  });
});
