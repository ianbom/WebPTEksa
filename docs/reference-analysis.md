# HKA visual and structural audit

**Reference:** https://hka.co.id/ — inspected 22 Oct 2026 in a rendered browser. Inner routes inspected: `/tentang/`, `/produk/`, `/layanan/`, `/artikel/`, `/kontak/`, and the product detail `/product/vertical-mast-lift-8-meter-hm0608e/`.

## Homepage structure observed
1. White desktop header: small HKA logo at far left, single horizontal uppercase menu across the center, language toggles, and a deep-navy contact block at far right. Header approximately 80 px tall in the captured browser view.
2. Full-width, image-led hero carousel: warehouse/forklift photography, white title at left over a navy gradient overlay that deepens toward the bottom; short copy and gold underlined CTA; small centered slide dots.
3. Deep-navy services block. The title and explanatory paragraph are a two-column row; four numbered service entries sit in a single horizontal white/light-gray strip, alternating pale surfaces. Numbers are oversized navy/gold.
4. Spacious white company introduction. Label and headline on the left; body copy on the right, then significant whitespace/image-led interlude in the source rendering.
5. Deep-navy product showcase. Section label/title at left, text CTA right, then four-column pale product cards with equipment imagery, taxonomies, name, and text CTA.
6. White advantages area with checklist claims and numerical counters; source displays animation/counter content, but Liftco adaptation must use only verified values, not HKA's company/client numbers.
7. Client logo presentation and separate article listing, with spacious margins and modest metadata/title hierarchy.
8. Dark gradient testimonial region (source content appears placeholder-like and is not migrated).
9. Deep-navy footer with brand/CTA column, quick navigation, office/workshop contact columns, social links, horizontal divider, centered copyright.

## Design language
- Palette: deep navy (visually around #08286d), white, cool gray, and vivid warm yellow/gold accents. These are observed approximations, not extracted source CSS tokens.
- Typography: rendered sans-serif, close to a modern geometric/grotesk face. The exact font could not be confidently identified in browser UI; implementation uses Roboto as a compatible locally loaded webfont.
- Content width: desktop sections align to approximately 40 px side gutters in the 1265 px capture; typical content max-width near 1200–1240 px. Hero spans full viewport.
- Section rhythm: broad vertical whitespace, typically 80–110 px on desktop; sharply defined navy-to-white section transitions.
- Buttons and links: uppercase, compact, mostly square-corner treatments; gold filled CTA or text link with arrow and thin underline. No large rounded-card template.
- Cards: rectangular, minimal border/shadow, industrial product photography centered on light gray.
- Hero overlay: dark blue gradient; image remains dominant. Text is large and left aligned, with image subject visible across the full background.

## Page patterns inspected
- **About:** page-title banner followed by profile, vision/mission, values, team and client sections. The source's client/team identities and unverified claims are excluded from Liftco.
- **Products:** title/introduction, category/brand filters at left, product cards at right. Product detail uses image carousel/visual panel beside title, brand/type identifiers, inquiry action, description, specifications when supplied, and related products.
- **Services:** page title, eyebrow and headline, descriptive introduction, four service blocks (sales, rental, maintenance/repair, spare parts), closing/footer.
- **Articles:** editorial listing with category/date metadata, card images and titles; source includes dated posts. Liftco's education pages are newly authored and therefore do not invent article dates/authors.
- **Contact:** two-column information and form section plus location map; footer repeats office/workshop details. Liftco form is email handoff only, no fake success state.

## Responsive observations and limitations
The browser snapshot confirmed menu structure and desktop composition. Automated viewport controls were not available in the live browser tool during this audit, so exact HKA behavior at 1920/1440/1024/768/390/375 px and carousel animation timing remain unverified. Responsive implementation uses standard stacked layouts and a keyboard-operable mobile menu; these are not claimed to be pixel-measured against HKA at every viewport.

## Visual evidence
| 2026-10-22 | Not captured as a repository file | The reference homepage and internal pages were visually inspected in the browser; no exportable screenshot file was available from the browser tool. |
