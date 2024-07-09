/// <reference types="Cypress"/>

// describe('FutureCoverageConfigPage', function () {

//     it('Verify Future Coverage Config Page',function(){
//         cy.get('a.cds--btn--primary').click();
//         cy.get('.cds--btn.cds--btn--primary').contains('Confirm').click();
//         cy.get("button[data-testid='save-and-exit-button']").click();
//         cy.get('.cds--btn.cds--btn--primary').contains('Save & Exit').click();
//     })
// })

class comparisonPage{
    
    elements={

        headerText: ()=> cy.get('._heading_u6s6f_29 > h1'),
        saveAndExit: ()=> cy.get("button[data-testid='save-and-exit-button']"),
        saveAndExitButton: ()=> cy.get('.cds--btn.cds--btn--primary')
        
    }

       comparison(){
           
           cy.wait(2000);
           this.elements.saveAndExit().click();
           this.elements.saveAndExitButton().contains('Save & Exit').click();
  }
}
     module.exports = new comparisonPage();