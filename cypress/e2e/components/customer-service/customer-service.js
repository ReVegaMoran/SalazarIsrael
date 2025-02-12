//import testDataElements from "../customer-service/customer-service-testData.js";
//import { faker } from '@faker-js/faker';

class customerService{
  elements = {
    tipoDeSolicitudListBox: () => cy.get('[data-testid="tipo-de-solicitud"]'),
    tipoDeServicioListBox: () => cy.get('[data-testid="tipo-de-servicio"]'),
    motivoDeContactoListBox: () => cy.get('[data-testid="motivo-de-contacto"]'),
    subMotivoDeContactoListBox: () => cy.get('[data-testid="sub-motivo-de-contacto"]'),
    nameInput: () => cy.get('#name'),
    lastNameInput: () => cy.get('#lastname'),
    rutInput: () => cy.get('#rut'),
    emailInput: () => cy.get('#email'),
    phoneInput: () => cy.get('#phone'),
    patentInput: () => cy.get('#patent'),
    ciudadListBox: () => cy.get('[data-testid="ciudad"]'),
    sucursalListBox: () => cy.get('[data-testid="sucursal"]'),
    commentInput: () => cy.get('#comment'),
    termsAndConditionsCheckBox: () => cy.get('.flex-col > .gac-checkbox > .w-fit > .relative > .bg-white'),
    enviarButton: () => cy.contains('span', 'Enviar'),
    successMessageTitle: () => cy.contains('h2', '¡Hemos recibido tus datos!'),
  }
  completeForm() {
    cy.selectFirstOptionFromFunction(this.elements.tipoDeSolicitudListBox);
    cy.selectFirstOptionFromFunction(this.elements.tipoDeServicioListBox);
    cy.selectFirstOptionFromFunction(this.elements.motivoDeContactoListBox);
    cy.selectFirstOptionFromFunction(this.elements.subMotivoDeContactoListBox);
    this.elements.nameInput().type("testdevelop");
    this.elements.lastNameInput().type("testdevelop");
    this.elements.rutInput().type('111111111');
    this.elements.emailInput().type('rene.vega@applydigital.com');
    this.elements.phoneInput().type('999999999');
    this.elements.patentInput().type('rsls56');
    cy.selectFirstOptionFromFunction(this.elements.ciudadListBox);
    cy.selectFirstOptionFromFunction(this.elements.sucursalListBox);
    this.elements.commentInput().type('testdevelop');
    this.elements.termsAndConditionsCheckBox().click();
    this.elements.enviarButton().click();
    this.elements.successMessageTitle().should('be.visible', { timeout: 10000 });
  }
}

export default new customerService();