/// <reference types="Cypress"/>

// describe('SimulationSetupPage', function () {

//     it('Verify Simulation Setup',function(){
//         cy.get('._nextOrPreviousButton_1q1ah_326').click();
//     })
// })

class simulationSetupPage{

    elements={

        headerText: ()=> cy.get('.cds--content _content_1q1ah_285'),
        stateSelectionButton: ()=> cy.get('._nextOrPreviousButton_1q1ah_326')
    }

    simulationSetup(){

        this.elements.stateSelectionButton().click();
    }
}
module.exports = new simulationSetupPage();