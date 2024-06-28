/// <reference types="Cypress"/>

// describe('DashboardPage', function () {

//     it('Create a new Simulation',function(){
//     cy.get('[data-testid="screen-title"]').should('contain.text','Dashboard');
//     cy.get("button[data-testid='new-simulation-button']").click();
//     cy.get('#title-input').type('Test');
//     cy.get('#policyholder-combo-box').type('OneModel Demo (Prospecting)');
//     cy.get('#downshift-0-menu .cds--list-box__menu-item__option').click();
//     cy.get('.cds--btn.cds--btn--primary').contains('Create Simulation').click();
//     })
// })

class DashboardPage{
    elements ={
      
      headerText: ()=> cy.get('[data-testid="screen-title"]'),
      newSimulationButton : () => cy.get("button[data-testid='new-simulation-button']"),
      titleInput : () => cy.get('#title-input'),
      policyHolderInput: () => cy.get('#policyholder-combo-box'),
      dropdownOption:  () => cy.get('#downshift-0-menu .cds--list-box__menu-item__option'),
      createSimulationButton: () => cy.get('.cds--btn.cds--btn--primary')
        
        }
        
     createNewSimulation(){
  
        this.elements.headerText().should('contain.text','Dashboard');
        this.elements.newSimulationButton().click();
        this.elements.titleInput().type('Test');
        this.elements.policyHolderInput().type('OneModel Demo (Prospecting)');
        this.elements.dropdownOption().click();
        this.elements.createSimulationButton().contains('Create Simulation').click();

    }
        
        }
        
    module.exports = new DashboardPage();