# NightPulse Seattle

A student-led, all-night music festival proposal focused on community wellness, high-energy music, and sustainability in Seattle.

## 🎵 Project Overview

NightPulse Seattle is a comprehensive grant proposal website for a University of Washington student initiative. The site showcases research on music festivals' mental health benefits, community impact, and sustainability goals.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd nightpulse-seattle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nightpulse-seattle/
├── app/
│   ├── layout.tsx                    # Root layout with navbar & footer
│   ├── page.tsx                      # Homepage with hero & features
│   ├── globals.css                   # Global styles & animations
│   ├── tickets/
│   │   └── page.tsx                  # Tickets page with timeline
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── mental-health-benefits/
│   │       └── page.tsx              # Full blog post
│   └── infographic/
│       └── page.tsx                  # Data visualization page
├── components/
│   ├── Navbar.tsx                    # Sticky navigation with mobile menu
│   ├── Footer.tsx                    # Reusable footer
│   ├── Button.tsx                    # Primary/secondary button variants
│   ├── Card.tsx                      # Glassmorphism card component
│   ├── NewsletterForm.tsx            # Email signup with validation
│   └── Infographic.tsx               # Visual data display
├── tailwind.config.ts                # Tailwind with UW brand colors
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies & scripts
└── README.md                         # This file
```

## 🎨 Design System

### Colors (UW Brand)

- **Primary Purple**: `#4b2e83`, `#32006e`
- **Gold**: `#b7a57a`, `#e8e3d3`
- **Background Gradient**: `#0a0612` → `#1a0f2e` → `#2a1854`

### Key Features

- ✨ **Glassmorphism effects** with backdrop blur
- 🎭 **Smooth animations** (fade-in, slide-up, gradient shift)
- 📱 **Fully responsive** design (mobile-first)
- ♿ **Accessibility** features (ARIA labels, keyboard navigation)
- 🎯 **No backend required** - purely static/client-side

### Components

1. **Navbar** - Sticky header with responsive hamburger menu
2. **Button** - Two variants (primary gradient, secondary glass)
3. **Card** - Hover effects with purple glow shadows
4. **NewsletterForm** - Client-side validation with success states
5. **Infographic** - Data visualization with icons & stats

## 📄 Pages

### Homepage (`/`)
- Hero section with event branding
- Three feature cards (Mental Health, Community, Sustainability)
- Impact section with detailed benefits
- Three-step program overview
- Call-to-action section

### Tickets (`/tickets`)
- Coming soon notice
- Three-phase timeline
- Email signup form
- Expected approval timeline

### Blog (`/blog`)
- Featured post card
- Coming soon placeholder
- Clean, minimal layout

### Blog Post (`/blog/mental-health-benefits`)
- Full article with research citations
- Multiple content sections
- Infographic embed placeholder
- Social sharing ready

### Infographic (`/infographic`)
- Visual data display
- Download PDF button (placeholder)
- Social share buttons (placeholders)
- Additional context cards

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Unicode emoji (no external deps)
- **Deployment**: Static export ready

## 🔧 Development Notes

### Styling Conventions

- Use `glass-effect` utility for glassmorphism
- Use `gradient-text` and `gradient-text-purple` for text gradients
- Animations: `animate-fade-in`, `animate-slide-up`
- Hover states include `scale-105` and `glow-purple`/`glow-gold`

### Form Handling

All forms are client-side only:
- Email validation using regex
- Success/error states with animations
- Console logging (no backend calls)

### Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus states on all buttons/links
- Keyboard-navigable mobile menu

### Performance

- Optimized for static export
- No external API calls
- Minimal dependencies
- CSS-only animations

## 📝 Customization

### Updating Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  uw: {
    purple: '#4b2e83',
    'purple-dark': '#32006e',
    gold: '#b7a57a',
    'gold-light': '#e8e3d3',
  }
}
```

### Adding Pages

1. Create new file in `app/your-page/page.tsx`
2. Add route to Navbar component
3. Follow existing page patterns

### Modifying Content

All content is in TSX files - no CMS required. Edit directly in component files.

## 🚀 Deployment

This project is configured for static export:

```bash
npm run build
```

The `out/` directory contains the static site ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Educational project for ENGL 131 - University of Washington

## 👥 Credits

- **Design**: NightPulse Team
- **Development**: Student Grant Proposal Initiative
- **University**: University of Washington

---

Built with 💜 for the UW community
