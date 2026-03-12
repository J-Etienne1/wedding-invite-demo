import { Link } from 'react-router-dom'
import styles from './WeddingPage.module.css'

// ── Replace this with your actual Google Form URL ──────────────────────────
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-here'
// ──────────────────────────────────────────────────────────────────────────

export default function WeddingPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>You are cordially summoned to witness the union of</p>
        <h1 className={styles.names}>
          Emma
          <span className={styles.ampersand}>&</span>
          James
        </h1>
        <p className={styles.date}>Saturday, the 14th of June, 2025</p>
      </section>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>† ✦ †</span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Ceremony details ── */}
      <section className={styles.section}>
        <span className={styles.sectionLabel}>Ceremony</span>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Venue</span>
            <p>St. Mary's Church</p>
            <p>Church Lane, Ashford</p>
            <p>Co. Wicklow, Ireland</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Time</span>
            <p>Ceremony at 2:00pm</p>
            <p>Drinks reception 3:30pm</p>
            <p>Dinner at 6:00pm</p>
          </div>
        </div>
      </section>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>† ✦ †</span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Reception details ── */}
      <section className={styles.section}>
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

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>† ✦ †</span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── RSVP ── */}
      <section className={styles.section}>
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
          >
            RSVP Now
          </a>
        </div>
      </section>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>† ✦ †</span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── After party link ── */}
      <section className={styles.section}>
        <div className={styles.afterPartyTeaser}>
          <p className={styles.eyebrowSmall}>The night doesn't end there</p>
          <Link to="/afterparty" className={styles.afterPartyLink}>
            After Party & Accommodation Details →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>Emma & James · 14 June 2025 · Wicklow, Ireland</p>
      </footer>

    </div>
  )
}
