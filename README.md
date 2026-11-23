# Jitendra Advocates — Official Website Package

A complete, mobile-friendly, multi-page production website for **Jitendra Advocates**, designed for static deployment on Netlify or any modern web host. The design, geometric branding, and visual identity reference the modern luxury dark aesthetic of **https://pnradvocates.com/**.

---

## Practice Identity

- **Website Name:** Jitendra Advocates
- **Head Advocate:** Advocate Jitendra Agrawal
- **Office Address:** Bajrang Marg, Chhawani, Neem Ka Thana
- **Court Focus:** Rajasthan High Court and District Court matters
- **Practice Focus:** Civil, criminal and related litigation
- **Town Name Standardization:** Formatted consistently as **Neem Ka Thana** across all desktop and mobile views, metadata, Open Graph tags, schema structured data, directions links, and supporting pages.

---

## Design & Visual Identity (Referenced from pnradvocates.com)

1. **Modern Geometric Branding & Logo:**
   - **Geometric Mark:** Features a modern quadrant geometric mark in pure white and champagne gold (`#b9a47a`) set on an obsidian shield (`#080808`), directly inspired by the visual identity of `https://pnradvocates.com/`.
   - **Favicon:** Implemented as a scalable vector SVG (`assets/favicon.svg`) and high-resolution PNG (`assets/advocate-emblem.png`).
   - **Wordmark:** Styled in bold, authoritative typography reading **“Jitendra Advocates”**, with the subtitle `Advocate Jitendra Agrawal · Neem Ka Thana`.

2. **Luxury Dark Theme & Architecture:**
   - **Palette:** Jet black background (`#080808`), obsidian surface layers (`#0f1115`), glassmorphic frosted cards (`rgba(18, 22, 30, 0.75)` with `backdrop-filter: blur(12px)`), hairline borders (`rgba(255, 255, 255, 0.08)`), and refined champagne gold accents (`#b9a47a`).
   - **Typography:** Classical Roman display headings (`Cinzel` and `Playfair Display`) paired with modern, legible body copy (`Inter`).
   - **Courthouse Artwork:** A custom, neutral Indian courthouse architectural illustration (`assets/courthouse-illustration.svg`) depicting neoclassical columns, pediment with scales of justice, arched corridors, and a Rajasthan sandstone palette.
   - **Clean Experience:** Built with a direct, modern browsing experience without intrusive overlay windows or footer notices.

---

## Multi-Page Architecture

Rather than crowding everything onto a single long page, the website is structured into dedicated, modular pages:

1. **Home (`index.html`):**
   - Hero banner with practice introduction, verified opening quote, and quick links.
   - Head Advocate spotlight preview.
   - Practice areas preview grid.
   - Court jurisdictions statement band.
   - Consultation appointment call-to-action banner.
   - Chambers location overview card.

2. **Head Advocate Profile (`advocate.html`):**
   - Dedicated profile of Advocate Jitendra Agrawal.
   - Focus on civil and criminal litigation across Rajasthan High Court and District Courts.
   - Chambers particulars at Bajrang Marg, Chhawani, Neem Ka Thana.
   - Factual and verified: strictly omits unverified credentials, awards, case outcomes, or testimonials.

3. **Practice Directory (`practice-areas.html`):**
   - Full 28 practice cards across all 6 core categories (Civil & Property, Criminal Matters, Family & Matrimonial, Commercial & Revenue, Rajasthan High Court, Legal Drafting & Notices).
   - Equal prominence for civil and criminal litigation.
   - Live search and filter pills supporting bilingual queries: `land dispute`, `partition`, `बंटवारा`, `bail`, `anticipatory bail`, `cheque bounce`, `injunction`, `divorce`, `maintenance`, `MACT`, `quashing`.

4. **Court Matters & Forums (`court-matters.html`):**
   - Distinct sections: **“Rajasthan High Court Matters”** and **“District Court Matters & Specialized Forums”**.
   - Identifies forums: Family Courts, Consumer Commission (DCDRC), Revenue Courts (SDO/Tehsildar/Board of Revenue), and MACT.
   - Clarifies that High Court matters are briefed and coordinated directly from the Neem Ka Thana chambers without implying a separate office at a High Court seat.

5. **Court Resources & Client Guide (`court-resources.html`):**
   - Verified official court portals: eCourts Services, Rajasthan High Court case status, cause lists, and India Code.
   - First-visit client checklist covering notices received, previous orders, relevant documents, and a chronological timeline of events.

6. **Book an Appointment (`appointment.html`):**
   - Interactive consultation scheduler.
   - Choice of consultation mode: In-Person Chambers Consultation (Bajrang Marg, Chhawani, Neem Ka Thana) or Telephonic Consultation.
   - Date picker (minimum date set to current date) + 9 selectable time slot buttons.
   - Case category selector and detailed case description field for the client to explain their dispute.
   - Client contact details (name, phone, optional email, city/tehsil).
   - Generates an instant booking confirmation summary with a reference ID (`JA-2026-XXXX`) and print option.

7. **Contact & Location (`contact.html`):**
   - Exact contact block:
     ```text
     Jitendra Advocates
     Head Advocate: Advocate Jitendra Agrawal
     Bajrang Marg, Chhawani, Neem Ka Thana
     ```
   - “Get Directions” button pointing to:  
     `https://www.google.com/maps/search/?api=1&query=Bajrang%20Marg%2C%20Chhawani%2C%20Neem%20Ka%20Thana`

8. **Supporting Pages:**
   - `privacy.html`: Privacy notice for website visitors and appointment scheduling.
   - `credits.html`: Typography and artwork attributions.
   - `sitemap.xml`: Complete search engine sitemap.
   - `netlify.toml`: Netlify build settings, caching headers, and security policies.

---

## File Manifest

```text
├── index.html                   # Homepage
├── advocate.html                # Head Advocate profile
├── practice-areas.html          # Searchable 28-card litigation directory
├── court-matters.html           # High Court & District Court jurisdictions
├── court-resources.html         # Official judicial portals & First-Visit Checklist
├── appointment.html             # Interactive appointment booking page
├── contact.html                 # Chambers location & Google Maps directions
├── privacy.html                 # Privacy notice
├── credits.html                 # Asset attributions and design credits
├── styles.css                   # Luxury dark responsive styles
├── script.js                    # Navigation, search, and appointment scheduler
├── netlify.toml                 # Netlify deployment and security headers
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap
├── README.md                    # Project documentation
└── assets/
    ├── advocate-emblem.png      # High-resolution modern geometric mark (256x256)
    ├── emblem.svg               # Scalable vector geometric emblem
    ├── favicon.svg              # Scalable vector emblem favicon (64x64)
    └── courthouse-illustration.svg # Neutral Indian courthouse architectural illustration
```

---

## Deployment on Netlify

1. Upload the `Jitendra_Advocates_Website.zip` directly via the Netlify dashboard (drag and drop deploy) or connect the repository.
2. The publish directory is the root of the archive (where `index.html` is located).
3. `netlify.toml` automatically configures clean URLs, asset caching, and security headers.
