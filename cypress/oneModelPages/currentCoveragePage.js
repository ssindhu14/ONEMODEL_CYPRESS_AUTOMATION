/// <reference types="Cypress"/>

// describe('CoverageConfigPage', function () {

//     it('Verify Coverage Config',function(){
//         cy.get("button[class='cds--accordion__heading']").click();
//         cy.wait(5000)
//         cy.get("input[class='cds--text-input cds--text-input--sm cds--layout--size-sm']").click().type("10000");
//         cy.get('a.cds--btn--primary').click();
        
//     })
// })

class currentCoveragePage{
    
    elements={

        headerText: ()=> cy.get('._heading_doggu_15 > h1'),
        medicalProfessionalLiablityDrpdwn: ()=>cy.get("li[class='cds--accordion__item _PCoverageAccordionItem_16p4m_64']"),
        annualPremiumInput: ()=>cy.get("input[class='cds--text-input cds--text-input--sm cds--layout--size-sm']"),
        currentSimulation: ()=> cy.get('a.cds--btn--primary')
    }

currentCoverage(){
    cy.wait(2000);
    this.elements.medicalProfessionalLiablityDrpdwn().click();
    this.elements.annualPremiumInput().click().type("10000");
    this.elements.currentSimulation().click();
  }
}
     module.exports = new currentCoveragePage();