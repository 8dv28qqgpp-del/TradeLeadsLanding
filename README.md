# Trade Leads Digital - Landing Page

A premium, production-ready landing page for Trade Leads Digital, a digital marketing agency specializing in complete online presence solutions for Australian trade businesses.

## Features

### Complete Landing Page Sections

1. **Hero Section** - Bold headline with dual CTAs and trust indicators
2. **Problem Section** - Emotional hook highlighting pain points
3. **Package Section** - Complete service offering with pricing
4. **Features Section** - Six key features with icons
5. **How It Works** - 4-step timeline from demo to leads
6. **Testimonials** - Real client feedback with 5-star ratings
7. **Pricing Section** - Transparent pricing with setup and monthly fees
8. **FAQ Section** - Accordion-style answers to common questions
9. **Final CTA** - Compelling call-to-action with trust badges
10. **Footer** - Complete site navigation and contact info

### Technical Features

- **Fully Responsive** - Mobile-first design optimized for all devices
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Contact Form** - Modal form with Supabase integration
- **Lead Management** - Database storage for all form submissions
- **Fast Performance** - Optimized build with code splitting
- **SEO Ready** - Semantic HTML and proper heading hierarchy
- **Accessibility** - WCAG compliant with good contrast ratios

### Tech Stack

- React 18 + TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Lucide React for icons
- Supabase for database and lead storage

## Design System

### Colors

- **Primary Blue**: #1e40af (Deep blue for trust and professionalism)
- **Secondary Orange**: #f59e0b (Bright orange for CTAs and energy)
- **Text**: #1f2937 (Charcoal gray)
- **Background**: #ffffff with #f9fafb accents

### Typography

- Modern sans-serif font stack
- 150% line spacing for body text
- 120% line spacing for headings
- Clear hierarchy with bold weights

### Spacing

- Consistent 8px spacing system
- Proper alignment throughout
- Intentional white space for readability

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Database Setup

The project uses Supabase for storing lead submissions. A `leads` table is automatically created with the following fields:

- `id` - Unique identifier
- `business_name` - Trade business name
- `contact_name` - Contact person name
- `phone` - Phone number
- `email` - Email address
- `trade_type` - Type of trade
- `service_area` - Geographic area
- `status` - Lead status (new, contacted, qualified, converted)
- `created_at` - Submission timestamp
- `updated_at` - Last update timestamp

## Customization

### Update Contact Information

Edit the following files to update contact details:

- `src/components/Header.tsx` - Phone number in header
- `src/components/Footer.tsx` - Email and phone in footer

### Modify Pricing

Edit `src/components/Pricing.tsx` to update:
- Setup fee amount
- Monthly fee amount
- Payment terms

### Update Testimonials

Edit `src/components/Testimonials.tsx` to add/modify client testimonials.

### Change Colors

Update Tailwind config in `tailwind.config.js` or use Tailwind's color utilities directly in components.

## Deployment

This project can be deployed to:

- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

Make sure to set environment variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## License

Proprietary - Trade Leads Digital © 2025

## Contact

- Email: contact@tradeleadsdigital.com.au
- Phone: 1300 532 379
- Website: [Coming Soon]
