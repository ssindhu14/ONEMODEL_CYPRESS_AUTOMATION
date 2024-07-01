/// <reference types="Cypress"/>

describe('oneModel', function () {
    beforeEach(()=>{
    cy.loginToAuth0('internalagencyadmin2@magmutual.com', 'MagMutual2024');
})
    it('createNewSimulation',function(){
            /*cy.visit('https://onemodel-ui-test.magmutual.com/');
            cy.origin('https://magmutual-develop.auth0.com/', function () {
            cy.get('#username').type('internalagent2@magmutual.com');
            cy.get("button[type='submit']").click();
                cy.get("input[type='password']").type('MagMutual2024');
                cy.get("button[type='submit']").click();
           })*/
          //////
        cy.get('[data-testid="screen-title"]').should('contain.text','Dashboard');
        cy.get("button[data-testid='new-simulation-button']").click();
        cy.get('#title-input').type('Test');
        cy.get('#policyholder-combo-box').type('OneModel Demo (Prospecting)');
        cy.get('#downshift-0-menu .cds--list-box__menu-item__option').click();
        //cy.get('.cds--modal-footer > .cds--btn--primary').click();
        cy.get('.cds--btn.cds--btn--primary').contains('Create Simulation').click();
        cy.get('._nextOrPreviousButton_1q1ah_326').click();
        cy.get('button.cds--list-box__field').click();
       /* cy.get('ul.cds--list-box__menu li').each(($el, index) => {
        cy.get($el).should('have.text', 'Alabama (AL)').click()
})*/
        cy.get('ul.cds--list-box__menu li').eq(0).click();
        cy.get('a.cds--btn--primary').click({force:true});
        cy.get('._addPracticeButtons_ybw46_79 > :nth-child(2)').click();
        cy.get('#practice-title').click().type('Sindhu');
        cy.get('#county-input').type('Autauga County');
        cy.get('#downshift-2-item-0 > .cds--list-box__menu-item__option').click();
        cy.get('#specialty-input-input').click();
        cy.get('#specialty-input-item-0-item').eq(0).click();
        cy.get('.cds--btn.cds--btn--primary ').contains('Save').click();
        cy.get('a.cds--btn--primary').click();
      //  cy.get('.sidebar').scrollTo('bottom');
      //current coverage
        cy.get('a.cds--btn--primary').click();
        cy.wait(5000);
        //Current Coverage Configuration
        cy.get("button[class='cds--accordion__heading']").click();
        cy.get("input[class='cds--text-input cds--text-input--sm cds--layout--size-sm']").click().type("10000");
        cy.get('a.cds--btn--primary').click();
        //Current Simulation
        cy.get("button[class='_initialPlayButton_1c68p_117']").click();
        cy.wait(5000);
        //Future Coverage
        cy.get('a.cds--btn--primary').click();
        cy.get('.cds--btn.cds--btn--primary').contains('Confirm').click();
        cy.get('a.cds--btn--primary').click();
        cy.get("button[class='_initialPlayButton_1c68p_117']").click();
        cy.wait(20000);
        cy.get('a.cds--btn--primary').click();
        cy.wait(20000);
        cy.get("button[data-testid='save-and-exit-button']").click();
        cy.get('.cds--btn.cds--btn--primary').contains('Save & Exit').click();
  }) 
        })
    
           
    



