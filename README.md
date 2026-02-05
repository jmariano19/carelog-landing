# CareLog Landing Page

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```

## Assets
Assets are located in `public/`:
- `final-phone.png` (Main phone visual)
- `benefit-card-user.png` ("For you" card)
- `benefit-card-doctor.png` ("For your doctor" card)
- `doc-summary-final.png` (Doctor Summary section image)

UI uses pixel-perfect referencing of these assets.

## Notes
- Mobile-first layout, optimized for ~420px width.
- Language toggle persists via `localStorage`.
- Motion respects `prefers-reduced-motion`.
