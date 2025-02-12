/// <reference types= "cypress" />

describe('Entrar en la página de Subaru Impreza', () => {
  it('Debe permitir la interacción con un elemento específico', () => {
    cy.visit('https://www.salazarisrael.cl/marcas/byd/nuevo/byd-tang-27836');
  /*  cy.contains('span', 'VER AUTOS').click();
    cy.get('a[href*="/marcas/byd/nuevo/byd-yuan-plus-"] div').eq(4).click();*/
    cy.get('button.w-full').eq(1).click();
    cy.get('#name').type('test', { force: true });
    cy.get('#lastname').type('test');
    cy.get('#rut').type('111111111', { force: true });
    cy.get('#email').type('rene.vega+02@applydigital.com', { force: true });
    cy.get('#phoneNumber').type('999999999', { force: true });
    //cy.get('#headlessui-listbox-button-\\:r0\\:').should('be.visible');
    cy.get('#headlessui-listbox-button-\:rh\: > .relative').click();
    cy.get('[role="option"]').eq(1).click();
    cy.get('#headlessui-listbox-button-\\:r1\\:').should('be.visible');
    cy.get('#headlessui-listbox-button-\\:r1\\:').click();
    cy.get('[role="option"]').eq(1).click();
    cy.get('#message').type('test');
    cy.contains('label', 'Quiero dar mi auto en parte de pago').should('be.visible').click();
    cy.contains('label', 'Quiero ver opciones de financiamiento').should('be.visible').click();
    cy.get('.gac-checkbox input[type="checkbox"]').check({ force: true }).should('be.checked'); // Verifica que el checkbox esté marcado
    cy.contains('span', 'ENVIAR').click();
    cy.contains('span', 'Hemos recibido tus datos').should('be.visible');
  });
});

  /*  cy.get('[data-testid="tipo-de-solicitud"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('[data-testid="tipo-de-servicio"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('[data-testid="motivo-de-contacto"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('[data-testid="sub-motivo-de-contacto"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('#name').type("testdevelop");
      cy.get('#lastname').type("testdevelop");
      cy.get('#rut').type("111111111");
      cy.get('#email').type("rene.vega@applydigital.com");
      cy.get('#phone').type("999999999");
      cy.get('#patent').type("rsls55");
      cy.get('[data-testid="ciudad"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('[data-testid="sucursal"]').click();
      cy.get('[role="option"]').first().click();
      cy.get('#comment').type("testdevelop");
      cy.get('.flex-col > .gac-checkbox > .w-fit > .relative > .bg-white').click();
      cy.contains('span', 'Enviar').click();
      cy.contains('h2', '¡Hemos recibido tus datos!').should('be.visible') */