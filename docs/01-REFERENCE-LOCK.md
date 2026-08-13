# 01 — REFERENCE LOCK: VISUAL + STRUCTURAL FORENSICS

> **Reference Target:** Chobani Homepage (`https://www.chobani.com/`)  
> **Visual Source of Truth:** `referencia/reference-full.png.png`  
> **Behavioral Source of Truth:** `referencia/reference-url.txt`  
> **Status:** LOCKED — READY FOR CLIENT MAPPING

---

## 1. PAGE SILHOUETTE & RHYTHM

The reference layout is a **multi-atmosphere, story-driven editorial showcase**. It does not use a monotone white/gray background or repetitive 3-column cards. Instead, it alternates between **rich textured hero environments**, **spacious product selection canvases**, and **deep dark-colored brand mission sections**.

### Atmospheric Scroll Rhythm:
1. **Header:** Clean White (`#FFFFFF`) fixed sticky bar with dark forest green typography.
2. **Scene 1 (Hero):** Warm Amber & Sunburst Orange Gingham tablecloth field with a dramatic top-right to bottom-left diagonal product visual mass.
3. **Scene 2 (Search & Finder):** Spacious Off-White / Ivory canvas (`#FDFBF7`) with playful corner illustrations and a horizontal floating pack-shot carousel.
4. **Scene 3 (Recipes / Cooking):** Crisp White (`#FFFFFF`) with left-aligned editorial typography, light blue kitchen line art, and a 4-card horizontal recipe scroll.
5. **Scene 4 (Impact & Mission):** Full-bleed Deep Forest Green (`#1A3C34`) with folk-art floral borders, 4-column pillar grid, and clean outline buttons.
6. **Scene 5 (Newsroom):** Light Off-White (`#F9F8F3`) field with a megaphone motif and editorial article cards.
7. **Scene 6 (Campaign Feature):** Deep Slate Teal (`#0F4C5C`) with woven fabric texture, floating fruit illustratives, and a heavy bottom product trio anchor.
8. **Footer:** Deep Forest Green (`#1A3C34`) with clean newsletter inline form and multi-column directory links.

---

## 2. VISUAL SCENE MAP

### Scene 0: Sticky Navigation Header
- **Height Estimate:** ~2.5% of total height (~65px fixed).
- **Dominant Background:** Solid White (`#FFFFFF`), `position: fixed`, `z-index: 1100`.
- **Container Behavior:** Full-bleed edge-to-edge container (94% max-width inner wrapper).
- **Visual Mass:** Centered serif logo ("Chobani."), balanced left and right text navigation links.
- **Dominant Typography:** Clean serif text (`Chobani-Serif-Regular`, ~16px), dark forest green (`#1B3A32`).
- **Transition:** Permanent top overlay; subtle shadow or crisp bottom edge separator.

---

### Scene 1: Seasonal Hero (Warm Gingham Tabletop Experience)
- **Height Estimate:** ~16% of page height.
- **Dominant Background:** Warm Amber & Orange checkered gingham pattern (`#F7931E` / `#E56B00` gingham grid) with natural wood grain visible at top right.
- **Container Behavior:** Full-bleed visual field, no artificial rounded borders or padding boxes.
- **Visual Mass:**
  - *Left Mass (35% width):* Floating typography block ("Pumpkin Spice / Picks of the patch / [Learn more]").
  - *Right/Center Mass (65% width):* High-density 3D tabletop product composition (tilted box, open tub, spoon, pie slice, tall creamer bottle, coffee mug).
- **Dominant Typography:** Display Serif, oversized headline ("Picks of the patch", ~64px-72px), deep dark brown color (`#2B1704`).
- **Image Dimensions:** Dynamic product & food composition occupying ~60% of horizontal viewport width and full vertical scene height.
- **Alignment:** Left-aligned copy, right-heavy visual artwork.
- **Negative Space:** Asymmetrical; left side leaves generous background space around typography.
- **Overlaps:** Product packaging, pie slice, and creamer bottle overlap each other to create genuine depth.
- **Transition:** Sharp flat color cut from warm orange gingham to off-white canvas.

---

### Scene 2: Search & Interactive Product Finder Canvas
- **Height Estimate:** ~10% of page height.
- **Dominant Background:** Off-White / Ivory (`#FDFBF7`).
- **Container Behavior:** Centered container (~1200px max-width) with high vertical padding.
- **Visual Mass:**
  - Centered text query ("What Chobani® flavor or product are you looking for?").
  - Giant horizontal search input field ("Type something ...") with spoon icon.
  - Floating horizontal product lineup (6 pack-shots lined up side-by-side with generous breathing room).
- **Dominant Typography:** Medium serif heading (~28px-32px), light gray italic placeholder text (~36px).
- **Image Dimensions:** Pack-shots ~100px-140px tall each, floating without background containers.
- **Horizontal Alignment:** Center-aligned text and input field.
- **Overlaps / Motifs:** Playful hand-drawn fruit & yogurt illustrations on top left (spoon & tub) and top right (watermelon slice, cherries, berries).
- **Transition:** Smooth vertical flow into white recipe scene.

---

### Scene 3: Culinary Recipe Showcase ("Chobani Cooking")
- **Height Estimate:** ~16% of page height.
- **Dominant Background:** Pure White (`#FFFFFF`).
- **Container Behavior:** Full-width container with left-aligned header offset.
- **Visual Mass:**
  - *Top Left:* Asymmetrical header block ("Chobani Cooking / Make it with Greek Yogurt").
  - *Top Right:* Light blue line-art illustrations (whisk, measuring cup, egg carton, bowl).
  - *Main Content:* Horizontal carousel grid of 4 square recipe cards (Overnight Oats, Cinnamon French Toast, Blueberry Banana Açaí Bowl, Weston's Oat...).
- **Dominant Typography:** Large serif headline ("Make it with Greek Yogurt", ~48px-56px), dark green text (`#1B3A32`).
- **Image Dimensions:** Square 1:1 recipe photography cards with dark teal bottom banner containing category badge and title.
- **Negative Space:** High top and left padding around headline.
- **Overlaps:** Carousel peek on 4th card with circular navigation arrow button on right edge (`>`).
- **Transition:** Contrast jump to full-bleed dark green impact scene.

---

### Scene 4: Brand Mission & Impact ("Shaping the Future of Food")
- **Height Estimate:** ~18% of page height.
- **Dominant Background:** Full-bleed Deep Forest Green (`#1A3C34`).
- **Container Behavior:** Full-bleed background with max 1400px inner content grid.
- **Visual Mass:**
  - Centered hero statement ("Chobani is Shaping the Future of Food").
  - 4-column pillar grid (Community Wellness, Inclusivity, Food Insecurity, Sustainability).
  - Illustrative folk-art border graphics (flowers, butterflies, plants) framing the top, bottom, and side edges.
- **Dominant Typography:** Large white serif headline (~52px-60px), crisp white body text and column titles.
- **Image Dimensions:** Folk-art icons above each pillar title (~80px-100px height).
- **Buttons:** Dark green background with white outline border (`border: 1px solid #FFFFFF`) and white text.
- **Negative Space:** Balanced 4-column vertical rhythm with generous whitespace between columns.
- **Transition:** Flat edge transition to light off-white newsroom canvas.

---

### Scene 5: Editorial Newsroom ("Chobani Newsroom - Have you heard?")
- **Height Estimate:** ~15% of page height.
- **Dominant Background:** Light Off-White (`#F9F8F3`).
- **Container Behavior:** Centered layout with left graphic accent.
- **Visual Mass:**
  - Centered section header ("Chobani Newsroom / Have you heard?").
  - Left Megaphone Icon graphic radiating light beams.
  - Horizontal carousel row of 4 square news/article cards with photo backgrounds and text overlays.
- **Dominant Typography:** Serif section header (~40px-48px), bold condensed overlay copy on article cards.
- **Overlaps:** Right circular carousel arrow button (`>`) overlapping the edge of the 4th card.
- **Transition:** Dramatic color shift to dark textured slate teal.

---

### Scene 6: Special Campaign Feature ("Hero Batch")
- **Height Estimate:** ~18% of page height.
- **Dominant Background:** Deep Woven Slate Teal (`#0F4C5C` or `#13404D`) with textured fabric pattern background.
- **Container Behavior:** Full-bleed scene canvas.
- **Visual Mass:**
  - *Center Top:* Large white serif title ("Hero Batch"), paragraph copy, and solid white pill button ("Learn more").
  - *Flanking Visuals:* Scattered 3D/illustrated berries (strawberries, blueberries, raspberries, blackberries) floating around the upper canvas.
  - *Center Bottom:* Trio of large Chobani Hero Batch yogurt containers anchored at the bottom edge (outer two angled inward, center tub standing upright).
- **Dominant Typography:** Large white serif title (~56px-64px), crisp white body text (~16px).
- **Image Dimensions:** Product tubs occupy ~70% of lower horizontal span.
- **Transition:** Direct transition to deep forest green footer.

---

### Scene 7: Footer
- **Height Estimate:** ~7% of page height.
- **Dominant Background:** Full-bleed Deep Forest Green (`#1A3C34`).
- **Container Behavior:** Multi-row responsive layout.
- **Visual Mass:** Newsletter subscription row (input + button), site directory links, region selector, social icons, legal copyright bar.
- **Typography:** Small serif and sans-serif text in light cream (`#EAE8E1`).

---

## 3. GEOMETRY MAP (NORMALIZED COORDINATES)

| ELEMENT / SCENE | X POSITION (% VIEWPORT) | Y POSITION (% PAGE) | WIDTH (% VIEWPORT) | HEIGHT (% SCENE) | ALIGNMENT / BEHAVIOR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sticky Header Bar** | 0% | 0% | 100% | ~65px fixed | Fixed top, 3-column split (Nav - Logo - Actions) |
| **Scene 1 Headline Block** | 5% | 3% | 35% | ~60% | Left-aligned floating text stack over gingham |
| **Scene 1 Product Mass** | 40% | 2% | 58% | ~90% | Right-aligned diagonal 3D food composition |
| **Scene 2 Title & Input** | 20% | 19% | 60% | ~40% | Centered text & wide input bar with spoon icon |
| **Scene 2 Packshots Row** | 5% | 24% | 90% | ~40% | 6-item horizontal flex row with even gaps |
| **Scene 3 Headline Stack** | 5% | 28% | 50% | ~25% | Left-aligned, top-right kitchen illustrations |
| **Scene 3 Recipe Grid** | 5% | 33% | 92% | ~65% | 4-card horizontal carousel with peek on right |
| **Scene 4 Mission Header** | 15% | 46% | 70% | ~20% | Centered large statement with floral border |
| **Scene 4 4-Pillar Grid** | 5% | 52% | 90% | ~65% | 4 equal columns with top icons & bottom outline buttons |
| **Scene 5 Newsroom Header**| 20% | 66% | 60% | ~20% | Centered header with left megaphone graphic |
| **Scene 5 Article Cards** | 5% | 71% | 92% | ~65% | 4 square cards horizontal carousel with arrow |
| **Scene 6 Hero Title & CTA**| 20% | 83% | 60% | ~35% | Centered text with floating berry illustratives |
| **Scene 6 Product Trio** | 10% | 89% | 80% | ~55% | Bottom-anchored 3-container composition |
| **Footer Layout** | 3% | 94% | 94% | 100% | 2-row layout (Newsletter top, Directory bottom) |

---

## 4. TYPOGRAPHIC GEOMETRY MAP

- **Primary Headline Font:** `Chobani-Serif-Regular` / `Chobani-Serif-SemiBold` (High-contrast, elegant warmth, soft bracketed serifs).
- **Secondary Body Font:** `Chobani-Sans-Regular` / `Chobani-Sans-Medium` (Clean, highly legible geometric sans).
- **Scale Contrast:**
  - *Oversized Hero Headlines:* `4.5rem - 5.5rem` (72px - 88px) on desktop.
  - *Section Headlines:* `3rem - 3.75rem` (48px - 60px).
  - *Card Titles & Subheadings:* `1.25rem - 1.75rem` (20px - 28px).
  - *Body Text:* `1rem - 1.125rem` (16px - 18px).
  - *Eyebrows / Badges / Captions:* `0.75rem - 0.875rem` (12px - 14px), uppercase or small serif.
- **Typographic Alignments:** Alternates between **Left-aligned editorial stacks** (Hero, Cooking) and **Center-aligned authoritative statements** (Mission, Newsroom, Campaign Feature).

---

## 5. IMAGE GEOMETRY & ART DIRECTION MAP

- **Scene 1 (Hero):** Organic cutout 3D prop arrangement over full-bleed gingham texture background. No rectangular bounding boxes around hero products.
- **Scene 2 (Finder):** Floating transparent PNG pack-shots with crisp product shadows. Corner line-art drawings.
- **Scene 3 (Recipes):** 1:1 Aspect ratio square cropped photography cards with dark teal bottom captions.
- **Scene 4 (Impact):** Illustrated folk-art icons and decorative floral frame borders.
- **Scene 5 (Newsroom):** Square 1:1 editorial cards featuring photography with direct text overlays.
- **Scene 6 (Campaign):** Floating fruit cutouts + 3D bottom-anchored product trio overlapping the scene floor.

---

## 6. COLOR-FIELD MAP

```
[SCENE 0: WHITE #FFFFFF] -> 
[SCENE 1: WARM AMBER GINGHAM #F7931E] -> 
[SCENE 2: OFF-WHITE CANVAS #FDFBF7] -> 
[SCENE 3: PURE WHITE #FFFFFF] -> 
[SCENE 4: DEEP FOREST GREEN #1A3C34] -> 
[SCENE 5: LIGHT OFF-WHITE #F9F8F3] -> 
[SCENE 6: WOVEN SLATE TEAL #0F4C5C] -> 
[FOOTER: DEEP FOREST GREEN #1A3C34]
```

*Color Field Behavior Rule:* The background atmosphere changes intentionally with every major scene. There are no monotonous single-color long pages.

---

## 7. MOTION & INTERACTION MAP (URL BEHAVIOR)

1. **Sticky Header:** Stays fixed at `top: 0` with high z-index and smooth link underline hover transitions (`text-underline-offset: 25px`).
2. **Horizontal Carousels:** Smooth drag/swipe and arrow click sliding on Recipe Cards (Scene 3) and Newsroom Cards (Scene 5).
3. **Button Hover States:**
   - Solid Pill Buttons: Color invert / opacity shift on hover.
   - Outline Pill Buttons (`border: 1px solid #FFF`): Background fills with subtle white overlay (`rgba(255,255,255,0.1)`) on hover.
4. **Input Focus:** Search bar input smoothly underlines and glows upon focus.
5. **Scroll Choreography:** Subtle reveal transitions as sections enter the viewport (fade + slight vertical rise).

---

## 8. RESPONSIVE BREAKPOINT ADAPTATION MAP

- **Desktop (≥ 1240px):** Full 3-column header, multi-card horizontal rows, floating 3D compositions, generous side padding (94% max-width container).
- **Tablet (900px - 1239px):** Carousel items scale to show 2.5 cards visible; search bar width adjusts to 100%.
- **Mobile (< 900px):**
  - Header collapses to hamburger drawer + centered logo.
  - Scene 1 Hero text stacks above product visual mass.
  - Scene 4 Impact 4-column grid stacks into 1-column or 2x2 grid.
  - Horizontal carousels retain touch-swipe overflow peeking for natural mobile UX.

---

## 9. THE 10 STRUCTURAL SIGNATURES OF THE REFERENCE

If logo, copy, colors, and photos were removed, the layout remains recognizable by these **10 Immutable Structural Signatures**:

1. **Top Gingham / Textured Full-Bleed Hero Field** with left-aligned headline typography and right-aligned 3D product composition.
2. **Interactive Search & Finder Canvas** featuring centered headline, oversized search bar, and floating pack-shot lineup.
3. **Left-Aligned Editorial Recipe Showcase** with top-right line-art kitchen illustrations and 4-card horizontal carousel.
4. **Full-Bleed Dark Forest Green Impact Section** framed with folk-art floral/botanical border illustrations.
5. **4-Pillar Mission Grid** with top icons, paragraph copy, and uniform bottom outline pill buttons.
6. **Centered Newsroom Editorial Grid** accented by a left megaphone graphic motif and scrollable article cards.
7. **Woven Dark Teal Campaign Feature** with floating fruit cutouts and a heavy 3-container bottom-anchored product mass.
8. **Alternating Atmospheric Background Colors** (Warm Amber Gingham -> Off-White -> White -> Dark Forest Green -> Off-White -> Woven Teal -> Dark Green).
9. **Horizontal Overflow Carousel Peeking** with right circular arrow navigation buttons on recipe and news cards.
10. **Consistent Pill-Shaped Action Buttons** (Solid dark, solid white, and crisp outline variants).

---

`REFERENCE STRUCTURE LOCKED — READY FOR CLIENT MAPPING`
