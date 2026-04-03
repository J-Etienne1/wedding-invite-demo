import { WeddingPage } from '../page-objects/WeddingPage';

describe('Wedding Page', () => {
  const weddingPage = new WeddingPage();

  beforeEach(() => {
    cy.visit('http://localhost:5174/wedding-invite-demo/');
  });

  it('displays the wedding names header', () => {
    weddingPage.verifyNamesHeaderVisible();
  });

  it('displays the wedding date', () => {
    weddingPage.verifyWeddingDateVisible();
    weddingPage.verifyWeddingDateText('Saturday, the 14th of June, 2025');
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
    cy.get(weddingPage.rsvpButton).should('contain', 'RSVP Now');
  });

  it('displays the after party link', () => {
    weddingPage.verifyAfterPartyLinkVisible();
    cy.get(weddingPage.afterPartyLink).should('contain', 'After Party & Accommodation Details');
  });

  it('can navigate to after party page', () => {
    weddingPage.clickAfterPartyLink();
    cy.url().should('include', '/afterparty');
  });
});