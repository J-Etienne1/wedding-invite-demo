import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './WeddingPage.module.css'
import EasterEgg from '../components/EasterEgg'
import BloodRain from '../components/BloodRain'


const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeZqqP81W9EG8mtIZ5Wm4OXZsELwUyZ490WjTE4aqT4HOZ8sA/viewform?usp=header'


export default function WeddingPage() {
  const [bloodActive, setBloodActive] = useState(false)
  const handleBloodComplete = useCallback(() => setBloodActive(false), [])

  return (
    <div className={styles.page}>

      <a href="#main-content" className={styles.skipLink}>Skip to content</a>

      {/* ── Hero ── */}
      <section className={styles.hero} id="main-content" aria-label="Wedding invitation">
        <p className={styles.eyebrow}>You are cordially summoned to witness the union of</p>
        <h1 className={styles.names} data-testid="names-header" onClick={() => setBloodActive(true)} style={{ cursor: 'default' }}>
          Debbie
          <span className={styles.ampersand}>&</span>
          Jason
        </h1>
        <p className={styles.date} data-testid="wedding-date">Saturday, the 14th of June, 2025</p>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Ceremony details ── */}
      <section className={styles.section} aria-label="Ceremony details" data-testid="ceremony-section">
        <span className={styles.sectionLabel}>
          <s aria-hidden="true">Ceremony</s>
          <span className="sr-only">Ceremony crossed out, replaced with </span>
          {' '}Party
        </span>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Venue</span>
            <p>Urban Brewing</p>
            <p>CHQ Building, Custom House Quay, IFSC</p>
            <p>Dublin, D01 Y6P5</p>
            <p><a href="https://maps.app.goo.gl/BRx5t59BWMYhSsfR6" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>maps</a></p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Time</span>
            <p>
              <s aria-hidden="true">Ceremony</s>
              <span className="sr-only">Ceremony crossed out, replaced with </span>
              {' '}Party at 2:00pm
            </p>
            <p>Drinks reception 6:30pm</p>
            <p>Dinner at 8:00pm</p>
          </div>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Reception details ── */}
      <section className={styles.section} aria-label="Reception details" data-testid="reception-section">
        <span className={styles.sectionLabel}>Reception</span>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Venue</span>
            <p>Brookfield Manor</p>
            <p>Manor Road, Ashford</p>
            <p>Co. Wicklow, Ireland</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Dress Code</span>
            <p>Black tie optional</p>
            <p>Ladies: formal attire</p>
            <p>Gentlemen: suit & tie</p>
          </div>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── RSVP ── */}
      <section className={styles.section} aria-label="RSVP" data-testid="rsvp-section">
        <span className={styles.sectionLabel}>RSVP</span>
        <div className={styles.rsvpBlock}>
          <p className={styles.rsvpText}>
            Kindly reply by <strong>1st May 2025</strong>
          </p>
          <p className={styles.rsvpSub}>
            Please let us know if you can join us, any dietary requirements,
            and whether you'll be bringing a plus one.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rsvpButton}
            data-testid="rsvp-button"
          >
            RSVP Now
          </a>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── After party link ── */}
      <section className={styles.section} aria-label="After party">
        <div className={styles.afterPartyTeaser}>
          <p className={styles.eyebrowSmall}>The night doesn't end there</p>
          <Link to="/afterparty" className={styles.afterPartyLink} data-testid="after-party-link">
            After Party & Accommodation Details →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>Debbie & Jason · 14 June 2025 · Wicklow, Ireland</p>
      </footer>

      {/* ── Easter eggs ── */}
      <EasterEgg />
      <BloodRain active={bloodActive} onComplete={handleBloodComplete} />

    </div>
  )
}
