import { Link } from 'react-router-dom'
import styles from './WeddingPage.module.css'

// ── Replace this with your actual Google Form URL ──────────────────────────
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeZqqP81W9EG8mtIZ5Wm4OXZsELwUyZ490WjTE4aqT4HOZ8sA/viewform?usp=publish-editor'
// ──────────────────────────────────────────────────────────────────────────

export default function WeddingPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>You are cordially summoned to witness the union of</p>
        <h1 className={styles.names}>
          Debbie
          <span className={styles.ampersand}>&</span>
          Jason
        </h1>
        <p className={styles.date}>Saturday, the 30th of October, 2027</p>
      </section>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>† ✦ †</span>
        <span className={styles.dividerLine} />
      </div>

      {/* ── Ceremony details ── */}
      <section className={styles.section}>
        <span className={styles.sectionLabel}><s>Ceremony</s> (party)</span>
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
            <p><s>Ceremony</s> Party at 6:00pm</p>
            <p>Drinks reception 6:30pm</p>
            <p>Dinner at 8:00pm</p>
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
            <p>Urban Brewing</p>
            <p>CHQ Building, Custom House Quay, IFSC</p>
            <p>Dublin, D01 Y6P5</p>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailTitle}>Dress Code</span>
            <p>Ladies: spooky</p>
            <p>Gentlemen: spooky</p>
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
        <p>Debbie & Jason · 30 October 2027 · Leixlip, Ireland</p>
      </footer>

    </div>
  )
}
