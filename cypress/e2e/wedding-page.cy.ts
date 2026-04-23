import { WeddingPage, WeddingDetails, RsvpFormData, NavigationData } from '../page-objects/WeddingPage';

// Type definitions for better test organization
type TestScenario = {
  name: string;
  data: WeddingDetails | RsvpFormData | NavigationData;
  action: () => void;
};

describe('Wedding Page', () => {
  const weddingPage = new WeddingPage();

  // Typed test data using interfaces
  const weddingDetails: WeddingDetails = {
    date: 'Saturday, the 30th of Oct, 2027',
    names: 'Debbie & Jason',
    ceremonyVenue: 'Urban Brewing',
    receptionVenue: 'Brookfield Manor'
  };

  const rsvpData: RsvpFormData = {
    buttonText: 'RSVP Now',
    deadline: '1st Aug 2027'
  };

  const navigationData: NavigationData = {
    linkText: 'After Party & Accommodation Details →',
    expectedUrl: '/afterparty'
  };

  // Example of using interfaces with test scenarios
  const testScenarios: TestScenario[] = [
    {
      name: 'wedding date display',
      data: weddingDetails,
      action: () => {
        weddingPage.verifyWeddingDateVisible();
        weddingPage.verifyWeddingDateText((weddingDetails as WeddingDetails).date);
      }
    }
  ];

  beforeEach(() => {
    cy.visit('http://localhost:5174/wedding-invite-demo/');
  });

  it('displays the wedding names header', () => {
    weddingPage.verifyNamesHeaderVisible();
  });

  it('displays the wedding date', () => {
    weddingPage.verifyWeddingDateVisible();
    weddingPage.verifyWeddingDateText(weddingDetails.date);
  });

  it('displays the ceremony section', () => {
    weddingPage.verifyCeremonySectionVisible();
  });

  it('displays the reception section', () => {
    weddingPage.verifyReceptionSectionVisible();
  });

  it('displays the RSVP section and button', () => {
    weddingPage.verifyRsvpSectionVisible();
    weddingPage.verifyRsvpButtonVisible();
    weddingPage.verifyRsvpButtonText(rsvpData.buttonText);
  });

  it('displays the after party link', () => {
    weddingPage.verifyAfterPartyLinkVisible();
    weddingPage.verifyAfterPartyLinkText(navigationData.linkText);
  });

  it('can navigate to after party page', () => {
    weddingPage.clickAfterPartyLink();
    weddingPage.verifyAfterPartyNavigation();
  });

  // Example of data-driven test using interfaces
  testScenarios.forEach((scenario) => {
    it(`handles ${scenario.name} scenario`, () => {
      scenario.action();
    });
  });
});

