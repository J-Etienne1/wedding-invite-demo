/*
 * ─────────────────────────────────────────────────────────────
 *  ALL EDITABLE WEDDING DETAILS LIVE IN THIS FILE.
 *  Change text here — no need to touch any other file.
 *
 *  Anything marked TODO is a placeholder that still needs
 *  real information before the invite goes out.
 * ─────────────────────────────────────────────────────────────
 */

// Live site (GitHub Pages). If the repo is ever renamed or moved to a custom
// domain, update this AND the `base` option in vite.config.js AND the absolute
// og:/twitter: URLs in index.html — link previews break silently otherwise.
export const SITE_URL = 'https://j-etienne1.github.io/wedding-invite-demo'

// Vite serves this project from a sub-path, so asset URLs must be built from
// BASE_URL rather than hard-coded with a leading slash.
const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export const couple = {
  eyebrow: 'You are cordially summoned to witness the union of',
  nameOne: 'Debbie',
  nameTwo: 'Jason',
  date: 'Saturday, the 30th of October, 2027',
  shortDate: '30 October 2027',
  location: 'Dublin, Ireland',
}

export const venue = {
  name: 'Urban Brewing',
  addressLines: ['CHQ Building, Custom House Quay, IFSC', 'Dublin, D01 Y6P5'],
  mapsUrl: 'https://maps.app.goo.gl/BRx5t59BWMYhSsfR6',
}

export const dressCode = {
  headline: 'Black',
  lines: [
    'We wear black. Always.',
    'You, however, are free —',
    'come as you feel most yourself.',
  ],
}

// `tbc: true` renders a quiet "time to be confirmed" note under the entry.
// Remove the flag once a time is locked in.
export const timeline = [
  {
    time: '5:00pm',
    title: 'Drinks & Canapés',
    detail: 'Arrive, find a glass, find us.',
    tbc: true,
  },
  {
    time: '6:00pm',
    title: 'Dinner',
    detail: 'Sit down, eat well.',
    tbc: true,
  },
  {
    time: '9:00pm',
    title: 'The Party',
    detail: 'DJ, dancing, no early nights.',
    tbc: true,
  },
]

export const rsvp = {
  // TODO: confirm this is the live form before sending the invite.
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSeZqqP81W9EG8mtIZ5Wm4OXZsELwUyZ490WjTE4aqT4HOZ8sA/viewform?usp=header',
  // TODO: set the real reply-by date.
  deadline: 'PLACEHOLDER — set reply-by date',
  note: "Let us know if you can join us, any dietary requirements, and whether you're bringing a plus one.",
  buttonText: 'RSVP Now',
}

export const accommodation = {
  intro:
    'The venue has arranged rates at a couple of nearby hotels. Ring them directly, quote the reference below, and the discount is applied. Worth booking early — it is a Saturday on a bank holiday weekend.',
  // TODO: replace all three fields per hotel with the real details from the venue.
  hotels: [
    {
      name: 'PLACEHOLDER — First Hotel',
      distance: 'PLACEHOLDER — minutes walk from the venue',
      phone: '+353 1 000 0001',
      reference: 'PLACEHOLDER — first booking reference',
    },
    {
      name: 'PLACEHOLDER — Second Hotel',
      distance: 'PLACEHOLDER — minutes walk from the venue',
      phone: '+353 1 000 0002',
      reference: 'PLACEHOLDER — second booking reference',
    },
  ],
}

export const portrait = {
  src: asset('portrait-1200.jpg'),
  srcSmall: asset('portrait-800.jpg'),
  alt: 'Illustrated portrait of Debbie and Jason in wedding dress and suit, hands joined over a headstone reading "30.10.27 — Till Death", surrounded by bats and roses.',
  credit: 'Portrait by Loki Pookadubh',
}

export const nav = [
  { id: 'details', label: 'Details' },
  { id: 'timeline', label: 'Evening' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'stay', label: 'Stay' },
]
