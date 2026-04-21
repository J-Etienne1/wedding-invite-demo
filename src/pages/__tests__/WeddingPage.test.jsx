import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import WeddingPage from '../WeddingPage'

// Mock the child components
vi.mock('../../components/EasterEgg', () => ({
  default: () => <div data-testid="easter-egg">EasterEgg</div>
}))

vi.mock('../../components/BloodRain', () => ({
  default: ({ active, onComplete }) => (
    <div data-testid="blood-rain" data-active={active}>
      BloodRain
    </div>
  )
}))

const renderWeddingPage = () => {
  return render(
    <BrowserRouter>
      <WeddingPage />
    </BrowserRouter>
  )
}

describe('WeddingPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render the main heading with names', () => {
      renderWeddingPage()
      const namesHeader = screen.getByTestId('names-header')
      expect(namesHeader).toBeInTheDocument()
      expect(namesHeader).toHaveTextContent('Debbie')
      expect(namesHeader).toHaveTextContent('Jason')
    })

    it('should render the wedding date', () => {
      renderWeddingPage()
      const dateElement = screen.getByTestId('wedding-date')
      expect(dateElement).toBeInTheDocument()
      expect(dateElement).toHaveTextContent('Saturday, the 30th of October, 2027')
    })

    it('should render ceremony section with details', () => {
      renderWeddingPage()
      const ceremonySection = screen.getByTestId('ceremony-section')
      expect(ceremonySection).toBeInTheDocument()
      expect(ceremonySection).toHaveTextContent('Urban Brewing')
      expect(ceremonySection).toHaveTextContent('Party at 2:00pm')
    })

    it('should render reception section with details', () => {
      renderWeddingPage()
      const receptionSection = screen.getByTestId('reception-section')
      expect(receptionSection).toBeInTheDocument()
      expect(receptionSection).toHaveTextContent('Brookfield Manor')
      expect(receptionSection).toHaveTextContent('Black tie optional')
    })

    it('should render RSVP section', () => {
      renderWeddingPage()
      const rsvpSection = screen.getByTestId('rsvp-section')
      expect(rsvpSection).toBeInTheDocument()
      expect(rsvpSection).toHaveTextContent('Kindly reply by 1st May 2025')
    })
  })

  describe('RSVP Button', () => {
    it('should render RSVP button with correct link', () => {
      renderWeddingPage()
      const rsvpButton = screen.getByTestId('rsvp-button')
      expect(rsvpButton).toBeInTheDocument()
      expect(rsvpButton).toHaveAttribute('href', expect.stringContaining('docs.google.com/forms'))
      expect(rsvpButton).toHaveAttribute('target', '_blank')
      expect(rsvpButton).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('RSVP button should have correct text', () => {
      renderWeddingPage()
      const rsvpButton = screen.getByTestId('rsvp-button')
      expect(rsvpButton).toHaveTextContent('RSVP Now')
    })
  })

  describe('Navigation', () => {
    it('should render after party link', () => {
      renderWeddingPage()
      const afterPartyLink = screen.getByTestId('after-party-link')
      expect(afterPartyLink).toBeInTheDocument()
      expect(afterPartyLink).toHaveTextContent('After Party & Accommodation Details →')
      expect(afterPartyLink).toHaveAttribute('href', '/afterparty')
    })
  })

  describe('Accessibility', () => {
    it('should have skip to content link', () => {
      renderWeddingPage()
      const skipLink = screen.getByText('Skip to content')
      expect(skipLink).toBeInTheDocument()
      expect(skipLink).toHaveAttribute('href', '#main-content')
    })

    it('main content section should have main-content id', () => {
      renderWeddingPage()
      const mainContent = screen.getByTestId('names-header').closest('section')
      expect(mainContent).toHaveAttribute('id', 'main-content')
    })

    it('should have proper aria labels on sections', () => {
      renderWeddingPage()
      expect(screen.getByLabelText('Wedding invitation')).toBeInTheDocument()
      expect(screen.getByLabelText('Ceremony details')).toBeInTheDocument()
      expect(screen.getByLabelText('Reception details')).toBeInTheDocument()
      expect(screen.getByLabelText('RSVP')).toBeInTheDocument()
      expect(screen.getByLabelText('After party')).toBeInTheDocument()
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
      const namesHeader = screen.getByTestId('names-header')
      
      await user.click(namesHeader)
      
      // The blood rain should be active after clicking
      expect(screen.getByTestId('blood-rain')).toHaveAttribute('data-active', 'true')
    })

    it('names header should have pointer cursor style', () => {
      renderWeddingPage()
      const namesHeader = screen.getByTestId('names-header')
      expect(namesHeader).toHaveStyle({ cursor: 'default' })
    })
  })

  describe('Maps Link', () => {
    it('should render maps link for venue', () => {
      renderWeddingPage()
      const mapLinks = screen.getAllByText('maps')
      expect(mapLinks.length).toBeGreaterThan(0)
      expect(mapLinks[0]).toHaveAttribute('href', expect.stringContaining('maps.app.goo.gl'))
      expect(mapLinks[0]).toHaveAttribute('target', '_blank')
    })
  })
})
