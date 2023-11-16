import {
  oneTrustAcceptButtonId,
  homePageTitle,
  homePageButton,
  sidebar,
  loginRedirectButton,
  shopCartButton,
  sidebarButton,
  moreInfoIcon,
  moreInfoContent,
  emailNewsletter,
  newsLetterCheckbox,
  emailCheckIcon,
} from "../../constants.js";

const WEB_PAGE = "Home";

describe("Tests over Oysho Home Page", () => {
  context("macbook-16 resolution", () => {
    beforeEach(() => {
      cy.gherkinSyntax("given", "User is using Macbook 16 in chrome");
      cy.viewport("macbook-16");

      cy.gherkinSyntax("when", `User is on ${WEB_PAGE} page`);
      cy.visitPage(WEB_PAGE);

      cy.get(oneTrustAcceptButtonId).click();
    });

    it("Page's title should be correct", () => {
      cy.gherkinSyntax("then", `page title should be ${homePageTitle}`);
      cy.title().should("eq", homePageTitle);
    });

    it("Should navigate to login page", () => {
      cy.gherkinSyntax("then", "user clicks Iniciar sesión button");
      cy.get(loginRedirectButton).click();
      cy.url().should("include", "/logon");
    });

    it("Should navigate to Shop Cart page", () => {
      cy.gherkinSyntax("then", "user clicks Shop Cart button");

      cy.get(shopCartButton).click();
      cy.url().should("include", "/shop-cart");
    });

    it("Should navigate to shop cart page, then login page and back to home", () => {
      cy.gherkinSyntax("and", "user clicks Shop Cart button");
      cy.get(shopCartButton).click();
      cy.url().should("include", "/shop-cart");

      cy.gherkinSyntax("and", "user clicks login button");
      cy.get(loginRedirectButton).click();
      cy.url().should("include", "/logon");

      cy.gherkinSyntax("then", "user clicks home button");
      cy.get(homePageButton).click();
      cy.url().should("not.include", "/logon");
    });

    it("Should open sidebar when clicking menu icon", () => {
      cy.gherkinSyntax("then", "user clicks sidebar button");
      cy.get(sidebarButton).click();
      cy.wait(1000);
      cy.get(sidebar).should("be.visible");
    });

    it("Should open collapsible menu when clicking more info", () => {
      cy.gherkinSyntax("and", "user clicks more info button");
      cy.get(sidebarButton).click();
      cy.wait(1000);
      cy.get(sidebar).should("be.visible");

      cy.gherkinSyntax(
        "then",
        "user clicks more info button closing the collapsible menu"
      );
      cy.get(moreInfoIcon).click();
      cy.wait(1000);
      cy.get(moreInfoContent).should("be.visible");
    });

    it("Should complete email newsletter data and check icon", () => {
      cy.gherkinSyntax("and", "user completes newsletter data");
      cy.get(emailNewsletter).type("test@test.com");
      cy.get(newsLetterCheckbox).first().click();
      cy.wait(1000);
      cy.get(emailCheckIcon).should("be.visible");

      cy.gherkinSyntax("then", "user completes wrong newsletter data");
      cy.get(emailNewsletter).type("@@");
      cy.wait(1000);
      cy.get(emailCheckIcon).should("not.exist");
    });
  });
});
