import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WeddingPage from '../WeddingPage'
import { couple, venue, timeline, rsvp, accommodation, nav } from '../../content'

// Mock the child components
vi.mock('../../components/EasterEgg', () => ({
  default: () => <div data-testid="easter-egg">EasterEgg</div>
}))

vi.mock('../../components/BloodRain', () => ({
  default: ({ active }) => (
    <div data-testid="blood-rain" data-active={active}>
      BloodRain
    </div>
  )
}))

const renderWeddingPage = () => render(<WeddingPage />)

describe('WeddingPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render the main heading with names', () => {
      renderWeddingPage()
      const namesHeader = screen.getByTestId('names-header')
      expect(namesHeader).toBeInTheDocument()
      expect(namesHeader).toHaveTextContent(couple.nameOne)
      expect(namesHeader).toHaveTextContent(couple.nameTwo)
    })

    it('should render the wedding date', () => {
      renderWeddingPage()
      expect(screen.getByTestId('wedding-date')).toHaveTextContent(couple.date)
    })

    it('should render the portrait with descriptive alt text', () => {
      renderWeddingPage()
      const portraitImage = screen.getByTestId('portrait')
      expect(portraitImage).toBeInTheDocument()
      expect(portraitImage.getAttribute('alt')).not.toHaveLength(0)
      expect(portraitImage).toHaveAttribute('srcSet')
    })

    it('should render the venue details with a maps link', () => {
      renderWeddingPage()
      const detailsSection = screen.getByTestId('details-section')
      expect(detailsSection).toHaveTextContent(venue.name)
      venue.addressLines.forEach((line) => {
        expect(detailsSection).toHaveTextContent(line)
      })

      const mapLink = within(detailsSection).getByText('Open in maps')
      expect(mapLink).toHaveAttribute('href', venue.mapsUrl)
      expect(mapLink).toHaveAttribute('target', '_blank')
      expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should render every timeline entry with its time', () => {
      renderWeddingPage()
      const timelineSection = screen.getByTestId('timeline-section')
      timeline.forEach((entry) => {
        expect(timelineSection).toHaveTextContent(entry.time)
        expect(timelineSection).toHaveTextContent(entry.title)
      })
    })

    it('should flag unconfirmed times as to be confirmed', () => {
      renderWeddingPage()
      const timelineSection = screen.getByTestId('timeline-section')
      const unconfirmedCount = timeline.filter((entry) => entry.tbc).length
      expect(
        within(timelineSection).getAllByText('time to be confirmed')
      ).toHaveLength(unconfirmedCount)
    })

    it('should render RSVP section with the reply-by date', () => {
      renderWeddingPage()
      expect(screen.getByTestId('rsvp-section')).toHaveTextContent(rsvp.deadline)
    })

    it('should render an accommodation card per hotel with a tel: link', () => {
      renderWeddingPage()
      const staySection = screen.getByTestId('stay-section')

      accommodation.hotels.forEach((hotel) => {
        expect(staySection).toHaveTextContent(hotel.name)
        expect(staySection).toHaveTextContent(hotel.reference)

        const phoneLink = within(staySection).getByText(hotel.phone)
        expect(phoneLink).toHaveAttribute(
          'href',
          `tel:${hotel.phone.replace(/\s/g, '')}`
        )
      })
    })
  })

  describe('RSVP Button', () => {
    it('should render RSVP button with correct link', () => {
      renderWeddingPage()
      const rsvpButton = screen.getByTestId('rsvp-button')
      expect(rsvpButton).toHaveAttribute('href', rsvp.formUrl)
      expect(rsvpButton).toHaveAttribute('target', '_blank')
      expect(rsvpButton).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('RSVP button should have correct text', () => {
      renderWeddingPage()
      expect(screen.getByTestId('rsvp-button')).toHaveTextContent(rsvp.buttonText)
    })
  })

  describe('Section navigation', () => {
    it('should render a nav link per section, pointing at an in-page anchor', () => {
      renderWeddingPage()
      const stickyNav = screen.getByTestId('sticky-nav')

      nav.forEach((item) => {
        const link = within(stickyNav).getByText(item.label)
        expect(link).toHaveAttribute('href', `#${item.id}`)
      })
    })

    it('every nav anchor should resolve to a section on the page', () => {
      const { container } = renderWeddingPage()
      nav.forEach((item) => {
        expect(container.querySelector(`#${item.id}`)).not.toBeNull()
      })
    })
  })

  describe('Accessibility', () => {
    it('should have skip to content link', () => {
      renderWeddingPage()
      const skipLink = screen.getByText('Skip to content')
      expect(skipLink).toHaveAttribute('href', '#main-content')
    })

    it('main content section should have main-content id', () => {
      renderWeddingPage()
      const mainContent = screen.getByTestId('names-header').closest('section')
      expect(mainContent).toHaveAttribute('id', 'main-content')
    })

    it('should expose section headings as real headings', () => {
      renderWeddingPage()
      expect(screen.getByRole('heading', { level: 3, name: 'Venue' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: 'Dress Code' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2, name: /The Evening/ })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2, name: /RSVP/ })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2, name: /Accommodation/ })).toBeInTheDocument()
    })

    it('should have a single top-level heading', () => {
      renderWeddingPage()
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    })
  })

  describe('Easter Egg', () => {
    it('should render EasterEgg component', () => {
      renderWeddingPage()
      expect(screen.getByTestId('easter-egg')).toBeInTheDocument()
    })
  })

  describe('Blood Rain Effect', () => {
    it('should render BloodRain component', () => {
      renderWeddingPage()
      expect(screen.getByTestId('blood-rain')).toBeInTheDocument()
    })

    it('should activate blood rain effect when names header is clicked', async () => {
      const user = userEvent.setup()
      renderWeddingPage()

      await user.click(screen.getByTestId('names-header'))

      expect(screen.getByTestId('blood-rain')).toHaveAttribute('data-active', 'true')
    })

    it('should activate blood rain from the keyboard', async () => {
      const user = userEvent.setup()
      renderWeddingPage()

      screen.getByTestId('summon-button').focus()
      await user.keyboard('{Enter}')

      expect(screen.getByTestId('blood-rain')).toHaveAttribute('data-active', 'true')
    })

    it('should offer a real button as the keyboard route to the easter egg', () => {
      renderWeddingPage()
      const summonButton = screen.getByTestId('summon-button')
      expect(summonButton.tagName).toBe('BUTTON')
      // The heading must stay a heading — no role override for the egg.
      expect(screen.getByTestId('names-header')).not.toHaveAttribute('role')
    })
  })
})
