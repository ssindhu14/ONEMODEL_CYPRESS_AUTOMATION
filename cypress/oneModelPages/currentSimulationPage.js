/// <reference types="Cypress"/>

// describe('CurrentCoverageSimulationPage', function () {

//     it('Verify Current Coverage Simulation',function(){
//         cy.wait(10000);
//         cy.get("button[class='_initialPlayButton_1c68p_117']").click();
//         cy.wait(15000);
//         cy.get('a.cds--btn--primary').click();
//     })
// })

class currentSimulationPage{
    
    elements={

        headerText: ()=> cy.get('._pageHeader_1c68p_15'),
        playSimulationButton: ()=>cy.get("button[class='_initialPlayButton_1c68p_117']"),
        futureCoverage: ()=> cy.get('a.cds--btn--primary')
    }

currentSimulation(){

    cy.wait(5000)
    this.elements.playSimulationButton().click();
    cy.wait(15000)
    this.elements.futureCoverage().click();
  }
}
     module.exports = new currentSimulationPage();