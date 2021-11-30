/// <reference types="Cypress" />

export function TELERED(telered) {
describe('Loguin de telered', () => {
    beforeEach(() => {


      cy.visit('/');
      cy.server();
            //Servicio Autenticacion
            cy.route('POST', '**/authentication').as('autenticacion');
      })

      it('Administrador de seguridad de telered', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_ADMIN_SEC').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_ADMIN_SEC');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('ad17be57-a2ab-49c9-91f1-0f02089fb1c8');
          }); 
      })

      it('Operador de telered', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_OPER_TELERED').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_OPER_TELERED');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('1e63f8f8-f915-4df0-9e69-b247695e4630');
          }); 
      })

      it('Administrador de Banco', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_ADMIN_BANK').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_ADMIN_BANK');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('89c5b6e2-4f3a-44b2-984a-cdf2988d133b');
          }); 
      })

      it('Supervisor de Comercio', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_SUP_COMMERCE').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_SUP_COMMERCE');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('02b41862-c3e2-49d1-98fe-8cc917764315');
          }); 
      })

      it('Administrador de Comercio', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_ADMIN_COMMERCE').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_ADMIN_COMMERCE');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('497e6699-7194-405f-beac-1aa8caa9772f');
          }); 
      })

      it('Operador de comercio', () => {

        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
        cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('mabril_OPER_COMMERCE').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('mabril_OPER_COMMERCE');
        });

        cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
        .type('12345678').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12345678');
        });
        cy.get('.ant-btn > span').click();
        cy.wait('@autenticacion', { timeout: 60000 }).then(xhr => {
          expect(xhr.status).to.eq(201);
          expect(xhr.responseBody.user.roleId).to.eq('316ee0db-3507-4b85-9e62-901001fd4b9b');
          }); 
      })
})}

describe('Crear usuarios', () => {
  beforeEach(() => {

    cy.visit('/');
    cy.server();
          //Servicio al insertar email
          cy.route('POST', '**/authentication').as('autenticacion');
          cy.route('GET', '**/entity').as('entidades');
          cy.route('GET', '**/roles ').as('rol');
    })

    it('Administrador de seguridad de telered', () => {

      cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').click()
      cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input').clear()
      .type('mabril_ADMIN_SEC').then((result) => {
        const { value } = result[0];
        expect(value).to.equal('mabril_ADMIN_SEC');
      });

      cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input').clear()
      .type('12345678').then((result) => {
        const { value } = result[0];
        expect(value).to.equal('12345678');
      });
      cy.get('.ant-btn > span').click();
      cy.wait('@autenticacion', { timeout: 30000 }).then(xhr => {
        expect(xhr.status).to.eq(201);
        expect(xhr.responseBody.user.roleId).to.eq('ad17be57-a2ab-49c9-91f1-0f02089fb1c8');
        }); 
      cy.contains('Administración').click();
      cy.contains('Usuarios').click();
      cy.wait('@entidades', { timeout: 30000 }).then(xhr => {
        expect(xhr.status).to.eq(200);
        }); 
      cy.wait('@rol', { timeout: 30000 }).then(xhr => {
        expect(xhr.status).to.eq(200);
          }); 
      cy.get('.horizontal > .ant-btn').click();
      cy.get(':nth-child(1) > .ant-radio-wrapper > :nth-child(2)').click()
      cy.get(':nth-child(2) > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title').click();
      cy.get('.ant-radio-wrapper > :nth-child(2)').click();
      cy.get(':nth-child(3) > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title').click();
      cy.get('#name').type('Michael Abril');
      cy.get('#username').type('Banco');
      cy.get('#password').type('12345678');
      cy.get('#email').type('mabril@soluprime.com.pa');
      cy.get('#description').type('Es una prueba de Banco');
      cy.get('#rc_select_0').click();
      cy.contains('Entidad Bancos').click()
      cy.get('.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title').click();

      cy.wait(30000)
    })

})
