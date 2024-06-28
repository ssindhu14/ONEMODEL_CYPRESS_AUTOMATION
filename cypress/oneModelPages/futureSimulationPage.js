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

        headerText: ()=> cy.get('._heading_9fyfh_15'),
        playButton: ()=> cy.get("button[class='_initialPlayButton_1c68p_117']"),
        comparisonButton: ()=> cy.get('a.cds--btn--primary')
    }

futureSimulation(){

    this.elements.playButton().click();
    this.elements.comparisonButton().click();
  }
}
     module.exports = new futureSimulationPage();