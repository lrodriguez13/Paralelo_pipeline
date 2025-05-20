/// <reference types="cypress>"

describe("Bienvenido al curso de Cypres seccino 1", () => {
  it("Mi primer test -> Hola mundo", () => {
    cy.log("Hola Mundo");
    cy.wait(4000);
  });

  it("Segundo test --> Campo name", () => {
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html"); //pagina a visitar
    cy.get("#nombre").type("Luis");
    cy.wait(1000);
    cy.get("#apellidos").type("Rodriguez"); //apuntame al elemento # se usa para id's
    cy.wait(1000);
    cy.get("#email").type("lrod_250110@test.com");
    cy.wait(1000);
    cy.get("#tel").type("4564569877");
    cy.wait(1000);
    cy.get("#direccion").type("Demo de la direccion");
    cy.wait(1000);
    cy.get(".btn.btn-primary").click();
    cy.wait(4000);
  });
}); //Cierre de describe
