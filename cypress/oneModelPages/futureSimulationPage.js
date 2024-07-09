/// <reference types="Cypress"/>

// describe('FutureCoverageSimulationPage', function () {

//     it('Verify Future Coverage Simulation',function(){
//         cy.wait(15000);
//         cy.get("button[data-testid='save-and-exit-button']").click();
//         cy.get('.cds--btn.cds--btn--primary').contains('Save & Exit').click();
        
        
//     })
// })

class futureSimulationPage{
    
    elements={

        headerText: ()=> cy.get(':nth-child(1) > h1'),
        playButton: ()=> cy.get("button[class='_initialPlayButton_1c68p_117']"),
        comparisonButton: ()=> cy.get('.false'),
    }

futureSimulation(){

    cy.wait(10000)
    this.elements.playButton().click();
    cy.wait(15000)
    this.elements.comparisonButton().click();
  }
}
     module.exports = new futureSimulationPage();