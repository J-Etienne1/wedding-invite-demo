import { Link } from 'react-router-dom'
import styles from './AfterPartyPage.module.css'

const hotels = [
  {
    name: 'The Grand Wicklow Hotel',
    distance: '0.3 miles from venue',
    price: 'From €120/night',
    phone: '+353 404 12345',
    note: 'Quote "Debbie & Jason" for a reserved room rate',
  },
  {
    name: 'Ashford Village Inn',
    distance: '0.5 miles from venue',
    price: 'From €95/night',
    phone: '+353 404 67890',
    note: 'Complimentary shuttle to venue available',
  },
  {
    name: 'Vale View B&B',
    distance: '1 mile from venue',
    price: 'From €70/night',
    phone: '+353 404 11223',
    note: 'Family-run, highly recommended',
  },
]

export default function AfterPartyPage() {
  return (
    <div className={styles.page}>

      <a href="#main-content" className={styles.skipLink}>Skip to content</a>

      {/* ── Back link ── */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.backLink}>← Back to Invite</Link>
      </nav>

      {/* ── After party hero ── */}
      <section className={styles.hero} id="main-content" aria-label="After party invitation">
        <p className={styles.eyebrow}>Join us after the reception</p>
        <h1 className={styles.heading}>After Party</h1>
        <p className={styles.subheading}>The night is still young</p>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── After party details ── */}
      <section className={styles.section} aria-label="After party details">
        <span className={styles.sectionLabel}>Details</span>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Location</span>
            <p>The Cellar Bar</p>
            <p>Brookfield Manor</p>
            <p>(same venue, downstairs)</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Time</span>
            <p>From 10:30pm</p>
            <p>Music & dancing until late</p>
            <p>Last orders 1:30am</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Music</span>
            <p>DJ Connell</p>
            <p>Live band 11pm–12:30am</p>
            <p>All tastes catered for!</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Food</span>
            <p>Late night food from 11pm</p>
            <p>Chips & toasted sandwiches</p>
            <p>Compliments of the couple</p>
          </div>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Accommodation ── */}
      <section className={styles.section} aria-label="Accommodation options">
        <span className={styles.sectionLabel}>Accommodation</span>
        <p className={styles.accomIntro}>
          For those travelling from afar, here are some nearby options.
          We recommend booking early as availability is limited around this date.
        </p>

        <div className={styles.hotelList}>
          {hotels.map((hotel) => (
            <div key={hotel.name} className={styles.hotelCard}>
              <div className={styles.hotelHeader}>
                <h3 className={styles.hotelName}>{hotel.name}</h3>
                <span className={styles.hotelPrice}>{hotel.price}</span>
              </div>
              <p className={styles.hotelDistance}>{hotel.distance}</p>
              <p className={styles.hotelNote}>{hotel.note}</p>
              <a href={`tel:${hotel.phone}`} className={styles.hotelPhone}>{hotel.phone}</a>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><span className={styles.invertedCross}>†</span><span>✦</span><span className={styles.invertedCross}>†</span></span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Getting there ── */}
      <section className={styles.section} aria-label="Getting there">
        <span className={styles.sectionLabel}>Getting There</span>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>By Car</span>
            <p>M11 southbound, exit at</p>
            <p>Junction 14 (Ashford).</p>
            <p>Free parking at venue.</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>By Train</span>
            <p>Rathdrum Station</p>
            <p>2 miles from venue.</p>
            <p>Taxis available at station.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <Link to="/" className={styles.footerLink}>← Return to Wedding Details</Link>
        <p>Debbie & Jason · 14 June 2025 · Wicklow, Ireland</p>
      </footer>

    </div>
  )
}
