// Importación ajustada para coincidir con una exportación por defecto
import customerService from "../components/customer-service/customer-service.js";

describe('Completar formulario de atención al cliente', () => {

    beforeEach(() => {
        cy.visit('/atencion-al-cliente')
    });
    it('Debe permitir completar formulario de atención al cliente', () => {
      customerService.completeForm();
    });
  });