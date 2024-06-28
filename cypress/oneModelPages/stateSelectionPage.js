/// <reference types="Cypress"/>

// describe('StateSelectionPage', function () {

//     it('Verify State Selection',function(){
//         cy.get('button.cds--list-box__field').click();
//         cy.get('ul.cds--list-box__menu li').eq(0).click();
//         cy.get('a.cds--btn--primary').click({force:true});
//     })
// })

class stateSelectionPage{

    elements={
        headerText:()=>cy.get("h1[data-testid=state-selection-title]"),
        stateSelectionBox: ()=> cy.get('button.cds--list-box__field'),
        dropdownStateSelection: ()=> cy.get('ul.cds--list-box__menu li'),
        stateSetupButton: ()=>cy.get('a.cds--btn--primary')
    }

    stateSelection(){
        this.elements.stateSelectionBox().click();
        this.elements.dropdownStateSelection().eq(0).click();
        this.elements.stateSetupButton().click({force:true});
    }
}
module.exports = new stateSelectionPage();