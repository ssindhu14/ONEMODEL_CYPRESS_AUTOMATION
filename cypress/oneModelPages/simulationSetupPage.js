/// <reference types="Cypress"/>

// describe('SimulationSetupPage', function () {

//     it('Verify Simulation Setup',function(){
//         cy.get('._nextOrPreviousButton_1q1ah_326').click();
//     })
// })

class simulationSetupPage{
    
    getHeaderText(){return cy.get('main h1')}

    elements={

        headerText: ()=> cy.get('.cds--content > h1'),
        stateSelectionButton: ()=> cy.get('._nextOrPreviousButton_1q1ah_326')
    }

    simulationSetup(){
        cy.wait(5000)
        this.elements.stateSelectionButton().click();
    }
}
module.exports = new simulationSetupPage();