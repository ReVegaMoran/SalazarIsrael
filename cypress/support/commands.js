Cypress.Commands.add('selectFirstOptionFromFunction', (elementFunction) => {
    elementFunction().click(); // Ejecuta la función para obtener el objeto de Cypress y hacer click.
    cy.get('[role="option"]').first().click(); // Selecciona la primera opción.
  });