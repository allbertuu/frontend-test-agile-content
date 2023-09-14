describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should be able to search with an input by an animal type or title", () => {
    // To wait react context and hook lifecycle process
    cy.get("[data-test='search-input']").type("b").wait(1000).type("ird");

    cy.get("[data-test='search-input']").should("have.value", "bird");

    cy.get("[data-test='search-button']").click();
    cy.url().should("include", "/results?search=bird");
  });
});

describe("results page", () => {
  it("should exist a search input on header to search again", () => {
    cy.visit("http://localhost:3000/results?search=bird");

    cy.get("header").find("[data-test='search-input']").should("exist");
    cy.get("header").find("[data-test='search-button']").should("exist");

    // To wait react context and hook lifecycle process
    cy.get("[data-test='search-input']").type("h").wait(1000).type("orse");

    cy.get("[data-test='search-input']").should("have.value", "horse");

    cy.get("[data-test='search-button']").click();
    cy.url().should("include", "/results?search=horse");
  });

  it("should display a message if no results are found", () => {
    cy.visit("http://localhost:3000/results?search=dontExist");

    cy.get("main").contains("No results found for 'dontExist'");
  });

  it("should display a message if no search term is used", () => {
    cy.visit("http://localhost:3000/results?search=");

    cy.get("main").contains(
      "Try looking for: insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.",
    );
  });
});
