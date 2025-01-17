import dashBoardPage from "../../oneModelPages/dashBoardPage";
import simulationSetupPage from "../../oneModelPages/simulationSetupPage";
import stateSelectionPage from "../../oneModelPages/stateSelectionPage";
import stateSetupPage from "../../oneModelPages/stateSetupPage";
import simulationWalkthroughPage from "../../oneModelPages/simulationWalkthroughPage";
import currentCoveragePage from "../../oneModelPages/currentCoveragePage";
import currentSimulationPage from "../../oneModelPages/currentSimulationPage";
import futureCoveragePage from "../../oneModelPages/futureCoveragePage";
import futureSimulationPage from "../../oneModelPages/futureSimulationPage";
import comparisonPage from "../../oneModelPages/comparisonPage";

describe('oneModel', function () {
    beforeEach(()=>{
    cy.loginToAuth0('internalagencyadmin2@magmutual.com', 'MagMutual2024');
})

it("Should Create New Simulation", () =>{
   
       dashBoardPage.elements.headerText().should('contain','Dashboard');
    
       dashBoardPage.createNewSimulation();

       simulationSetupPage.elements.headerText().should('contain','Simulation Setup');

       simulationSetupPage.simulationSetup();

       stateSelectionPage.elements.headerText().should('contain','State Selection');

       stateSelectionPage.stateSelection();

       stateSetupPage.elements.headerText().should('contain','State Setup');

       stateSetupPage.stateSetup();

       simulationWalkthroughPage.elements.headerText().should('contain','Simulation Walkthrough');

       simulationWalkthroughPage.simulationWalkthrough();

       currentCoveragePage.elements.headerText().should('contain','Current Coverage Configuration');

       currentCoveragePage.currentCoverage();

       currentSimulationPage.elements.headerText().should('contain','Current Coverage Simulation');

       currentSimulationPage.currentSimulation();

       futureCoveragePage.elements.headerText().should('contain','Future Coverage Configuration');
    
       futureCoveragePage.futureCoverage();

       futureSimulationPage.elements.headerText().should('contain','Future Coverage Simulation | Optimal');

       futureSimulationPage.futureSimulation();

       comparisonPage.elements.headerText().should('contain','Comparison | Optimal');

       comparisonPage.comparison();

    })
})