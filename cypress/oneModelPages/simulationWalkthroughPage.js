/// <reference types="Cypress"/>

// describe('SimulationWalkthrough', function () {

//     it('Verify Simulation Walkthrough',function(){
//         cy.get('a.cds--btn--primary').click();
//         cy.wait(10000);
//     })
// })

class simulationWalkthroughPage{
    elements={

        headerText: ()=> cy.get('h1[data-testid=simulation-walkthrough-title]'),
        currentCoverage: ()=>cy.get('a.cds--btn--primary')
}



simulationWalkthrough(){
    
    this.elements.currentCoverage().click();
  }
}
     module.exports = new simulationWalkthroughPage();