# Project: Brealu Outdoor Rebranding & Website Migration

## Core Identity
- **Brand**: Brealu Outdoor
- **Domain**: `brealuoutdoor.com`
- **Slogan**: Breathe · Relax · Embrace.
- **Positioning**: Premium DTC (Direct-to-Consumer) manufacturer of professional aluminum pergola systems.

## Infrastructure
- **Hosting**: Cloudflare Pages (Project: `brealu-outdoor`)
- **Git Repository**: `brealu-group-official/brealu-outdoor`
- **DNS**: Nameservers moved to Cloudflare (`love.ns.cloudflare.com`, `rayden.ns.cloudflare.com`).
- **SEO**: Verified on Google Search Console. Sitemap submitted.
- **Deployment**: Local `index.html` updated via `index-v2.html`. Live site update requires Git synchronization (Push to the repository).

## Product Portfolio & Mapping (2026 Updated)
- **BRE-R230 (Flagship Retractable)**: 4m x 7m (4 posts), Wind 180-220 km/h, Snow 70-80cm. LED: Blade X / Gutter √. Smartphone √.
- **BRE-220 (Heavy Duty Custom)**: 4.5m x 6m (4 posts), Wind 180-220 km/h, Snow 80-100cm. LED: Blade √ / Gutter √.
- **BRE-175U (Elite Performance)**: 4m x 6m (4 posts), Wind 170-190 km/h, Snow 60-80cm. LED: Blade √ / Gutter √. Op: Motorized√, Manual√, Smartphone X. "Highly cost-effective aluminum alloy louvered pergola that supports customization."
- **BRE-140U (Ready to Ship)**: 4m x 5m (4 posts), Wind 170-190 km/h, Snow 50-60cm. LED: Blade X / Gutter √. Op: Motorized√, Manual√, Smartphone X. "Ready to Ship, Standard sizes in stock."
- **Other Products**: Aluminium Carport, Zip Screens, PVC Retractable Roof, Cassette Awning, Aluminium Shutter (Fixed/Sliding/Bi-folding).

## Design Preferences
- **Layout**: Hybrid approach. Header, Top Bar, and Banner (visuals + text) must strictly follow the original `index.html`. Logo height: 44px.
- **Banner Style**: Slogan "Breathe · Relax · Embrace" on a single line, font-weight 300, 1px letter spacing. Subtitle in white `rgba(255,255,255,0.9)`.
- **Trust Bar**: Floating card over banner/body transition. Emphasizes big numbers: 23+ (Years Factory), 3h (Fast Response), 18h (Design), 20yr (Warranty), 24/7 (Support).
- **Product Showcase (Studio Precision)**: 
    - **Unified Layout**: Triptych grid (1 landscape hero on top + 2 equal sub-images below). 
    - **Ratio**: 1.2fr (images) : 0.8fr (spec card).
    - **No Overlap**: Spec card placed alongside image collage with 30-40px gap (no negative margins).
    - **Integrated CTA**: Conversion button (Brealu Blue) placed at the bottom of the white spec card.
    - **Spacing**: Bottom padding reduced to 60px to match standardized vertical rhythm.
- **Add-ons Section**: 6-item grid featuring specific order: 1. Sheer Curtain, 2. Zip Screen, 3. Glass door, 4. Aluminium shutter, 5. Aluminum Operable Blade Screen, 6. Fixed Aluminum Wall.
- **Testimonials & Case Studies**: 5-case spotlight system featuring authentic global feedback.
    - **Featured Spotlight**: Florida (David W. - Hurricane-proof/Showroom/Bulk Orders). Layout: Triptych (Main + 2 Details).
    - **B2B Partnership**: UK (James H. - Factory Visit/Production Scale). Layout: Dual-img.
    - **Grid Cases**: Canada (Arthur W. - Storm/3D Design/Triptych), Norway (Robert L. - Architect/Snow), Australia (Michael K. - Contractor/Durability).
    - **Visuals**: Uses specialized layouts (Spotlight/Triptych/Dual-img) to showcase real installations, design drawings, and factory scenes. All case study images replaced with high-fidelity AliCDN assets.
- **Color Selection**: 4 standard finishes (RAL 9005 Black, 7016 Grey, 9016 White, Walnut Wood Grain) + 200+ custom RAL options.
- **Installation Guide**: Visual 4-step DIY process (Base, Beams, Louvers, Accessories).
- **How It Works**: Premium split layout over deep blue-black background (`#0F172A`). 
    - **Left**: 3-step text list: 1. "Submit Requirements", 2. "24h Technical Blueprint", 3. "Global Execution".
    - **Right**: Professional engineering drawing (L-shape/Blueprint).
    - **Icons**: Added `fa-clipboard-list`, `fa-drafting-compass`, `fa-shipping-fast`.
- **Manufacturing Strength**: "The Art of Precision" section.
    - **Process**: 5-step flow with 100px circular icons + shadows. Delivery uses `fa-truck-moving`.
    - **Visuals**: Horizontal 3-column grid for factory and equipment 实拍 images. Redundant stats grid removed.
- **Section Spacing**: Standardized vertical rhythm using `.section` (60px padding) and `.section-header` (32px margin-bottom) to eliminate excessive white space. `.product-showcase` bottom padding also reduced to 60px.
- **Global Reach Stats**: 150+ Countries, 23+ Years Mastery, 670+ Expert Staff, 100k SQM Facility.
- **Functionality**: Horizontal product slider with scroll-snap, automatic rotation (6s interval), and manual navigation arrows. 
- **Floating Contact Widgets**: Implemented right-side floating icon-only circular design, positioned 40px from the screen edge to prevent text overlap. WhatsApp (+8617812581015) and Email (boaz@brealuoutdoor.com).
- **Status**: `index-v2.html` has been deployed locally to `index.html`. Final refinements include 60px padding, icon-only pills, and a 5-case global testimonial system.
