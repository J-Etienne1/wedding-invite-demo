import {
  WeddingPage,
  WeddingDetails,
  RsvpFormData,
  SectionLink,
} from "../page-objects/WeddingPage";

describe("Wedding Page", () => {
  const weddingPage = new WeddingPage();

  const weddingDetails: WeddingDetails = {
    date: "Saturday, the 30th of October, 2027",
    names: "Debbie & Jason",
    venue: "Urban Brewing",
  };

  const rsvpData: RsvpFormData = {
    buttonText: "RSVP Now",
    deadline: "PLACEHOLDER — set reply-by date",
  };

  const sectionLinks: SectionLink[] = [
    { label: "Details", anchorId: "details" },
    { label: "Evening", anchorId: "timeline" },
    { label: "RSVP", anchorId: "rsvp" },
    { label: "Stay", anchorId: "stay" },
  ];

  beforeEach(() => {
    cy.visit("http://localhost:5174/wedding-invite-demo/");
  });

  it("displays the wedding names header", () => {
    weddingPage.verifyNamesHeaderVisible();
  });

  it("displays the wedding date", () => {
    weddingPage.verifyWeddingDateVisible();
    weddingPage.verifyWeddingDateText(weddingDetails.date);
  });

  it("loads the portrait artwork", () => {
    weddingPage.verifyPortraitLoaded();
  });

  it("displays the venue details", () => {
    weddingPage.verifyDetailsSectionVisible();
    cy.get(weddingPage.detailsSection).should("contain.text", weddingDetails.venue);
  });

  it("displays the full evening timeline", () => {
    weddingPage.verifyTimelineSectionVisible();
    weddingPage.verifyTimelineEntry("5:00pm", "Drinks & Canapés");
    weddingPage.verifyTimelineEntry("6:00pm", "Dinner");
    weddingPage.verifyTimelineEntry("9:00pm", "The Party");
  });

  it("displays the RSVP section and button", () => {
    weddingPage.verifyRsvpSectionVisible();
    weddingPage.verifyRsvpButtonVisible();
    weddingPage.verifyRsvpButtonText(rsvpData.buttonText);
    cy.get(weddingPage.rsvpSection).should("contain.text", rsvpData.deadline);
  });

  it("displays accommodation options with callable numbers", () => {
    weddingPage.verifyStaySectionVisible();
    weddingPage.verifyHotelCount(2);
  });

  it("keeps the section nav visible while scrolling", () => {
    cy.scrollTo("bottom");
    weddingPage.verifyStickyNavVisible();
  });

  sectionLinks.forEach(({ label, anchorId }) => {
    it(`jumps to the ${label} section from the nav`, () => {
      weddingPage.clickNavLink(label);
      weddingPage.verifySectionInView(anchorId);
    });
  });
});
