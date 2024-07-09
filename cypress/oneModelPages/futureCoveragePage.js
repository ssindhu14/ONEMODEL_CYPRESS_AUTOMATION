/// <reference types="Cypress"/>

// describe('FutureCoverageConfigPage', function () {

//     it('Verify Future Coverage Config Page',function(){
        
//     cy.get('.cds--btn.cds--btn--primary').contains('Confirm').click();
//         cy.get('a.cds--btn--primary').click();
//         cy.get("button[class='_initialPlayButton_1c68p_117']").click();
//         cy.wait(15000);
//         cy.get('a.cds--btn--primary').click();
        
//     })
// })

class futureCoveragePage{
    
    elements={

        headerText: ()=> cy.get('._heading_9fyfh_15'),
        confirmButton: ()=> cy.get('.cds--btn.cds--btn--primary'),
        futureSimulation: ()=> cy.get('a.cds--btn--primary')
    }

futureCoverage(){
    cy.wait(10000)
    this.elements.confirmButton().contains('Confirm').click();
    this.elements.futureSimulation().click();
  }
}
     module.exports = new futureCoveragePage();