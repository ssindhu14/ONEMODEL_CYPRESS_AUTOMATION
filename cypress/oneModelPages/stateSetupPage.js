// /// <reference types="Cypress"/>

// describe('StateSetupPage', function () {

//     it('Verify State Setup',function(){
//         cy.get('._addPracticeButtons_ybw46_79 > :nth-child(2)').click();
//         cy.get('#practice-title').click().type('Sindhu');
//         cy.get('#county-input').type('Autauga County');
//         cy.get('#downshift-2-item-0 > .cds--list-box__menu-item__option').click();
//         cy.get('#specialty-input-input').click();
//         cy.get('#specialty-input-item-0-item').eq(0).click();
//         cy.get('.cds--btn.cds--btn--primary ').contains('Save').click();
//         cy.get('a.cds--btn--primary').click();
//     })
// })

class stateSetupPage{

    elements={

        headerText: ()=> cy.get('.cds--content > h1'),
        physicianSelectionButton: ()=> cy.get('._addPracticeButtons_ybw46_79 > :nth-child(2)'),
        physicianTitle: ()=> cy.get('#practice-title'),
        countyInput: ()=> cy.get('#county-input'),
        countyDropdown: ()=> cy.get('#downshift-2-item-0 > .cds--list-box__menu-item__option'),
        physicianSpeciality: ()=>  cy.get('#specialty-input-input'),
        physicianSpecialityDropdown: ()=> cy.get('#specialty-input-item-0-item'),
        saveButton: ()=>cy.get('.cds--btn.cds--btn--primary '),
        simulationWalkthroughButton: ()=> cy.get('a.cds--btn--primary')
    }

    stateSetup(){
        cy.wait(2000)
        this.elements.physicianSelectionButton().click();
        this.elements.physicianTitle().click().type('Sindhu');
        this.elements.countyInput().type('Autauga County');
        this.elements.countyDropdown().click();
        this.elements.physicianSpeciality().click();
        this.elements.physicianSpecialityDropdown().eq(0).click();
        this.elements.saveButton().contains('Save').click();
        this.elements.simulationWalkthroughButton().click();
    }

}
        module.exports = new stateSetupPage();