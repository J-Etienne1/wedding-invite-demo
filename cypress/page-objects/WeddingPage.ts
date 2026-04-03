export class WeddingPage {
  namesHeader: string;
  weddingDate: string;
  ceremonySection: string;
  receptionSection: string;
  rsvpSection: string;
  rsvpButton: string;
  afterPartyLink: string;

  constructor() {
    this.namesHeader = '[data-testid="names-header"]';
    this.weddingDate = '[data-testid="wedding-date"]';
    this.ceremonySection = '[data-testid="ceremony-section"]';
    this.receptionSection = '[data-testid="reception-section"]';
    this.rsvpSection = '[data-testid="rsvp-section"]';
    this.rsvpButton = '[data-testid="rsvp-button"]';
    this.afterPartyLink = '[data-testid="after-party-link"]';
  }

  verifyNamesHeaderVisible() {
    cy.get(this.namesHeader).should('be.visible');
  }

  verifyWeddingDateVisible() {
    cy.get(this.weddingDate).should('be.visible');
  }

  verifyWeddingDateText(expected: string) {
    cy.get(this.weddingDate).should('have.text', expected);
  }

  verifyCeremonySectionVisible() {
    cy.get(this.ceremonySection).should('be.visible');
  }

  verifyReceptionSectionVisible() {
    cy.get(this.receptionSection).should('be.visible');
  }

  verifyRsvpSectionVisible() {
    cy.get(this.rsvpSection).should('be.visible');
  }

  verifyRsvpButtonVisible() {
    cy.get(this.rsvpButton).should('be.visible');
  }

  verifyAfterPartyLinkVisible() {
    cy.get(this.afterPartyLink).should('be.visible');
  }

  clickAfterPartyLink() {
    cy.get(this.afterPartyLink).click();
  }
}