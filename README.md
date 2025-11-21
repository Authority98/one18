# One18 Bakery Website

A modern, premium React website for One18 Bakery - Singapore's finest artisan bakery, home of the viral Supreme Circular Croissants.

## 🚀 Features

- **Premium UI/UX**: Creative design with glassmorphism, parallax effects, and smooth animations
- **Component-Based Architecture**: Reusable, modular React components
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS for fast development
- **Interactive Elements**: Play buttons, hover effects, and dynamic content
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Video Integration**: YouTube video modal with custom controls

## 📁 Project Structure

```
one18/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Fixed navigation with scroll effects
│   │   ├── MobileMenu.jsx          # Mobile menu overlay
│   │   ├── Hero.jsx                # Hero with video modal and floating elements
│   │   ├── BestsellersSection.jsx  # Masonry gallery of best sellers
│   │   ├── CateringSection.jsx     # Catering with play button overlays
│   │   ├── QualitySection.jsx      # "The One18 Difference" timeline
│   │   ├── LocationsSection.jsx    # Store locations with maps
│   │   ├── TestimonialsSection.jsx # Horizontal scrolling reviews
│   │   ├── CTASection.jsx          # Call-to-action section
│   │   ├── Footer.jsx              # Footer with social links
│   │   ├── VideoModal.jsx          # YouTube video modal
│   │   ├── SectionTag.jsx          # Reusable section tag component
│   │   └── BackToTop.jsx           # Scroll to top button
│   ├── data/
│   │   └── collectionData.js       # Product data for bestsellers
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles & animations
├── public/
│   └── hero-croissant-v2.png       # Hero image
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors
- **Brand Dark**: `#2C1810` - Primary text and section tags
- **Brand Accent**: `#E07A5F` - Call-to-action and highlights
- **Brand Gold**: `#F2CC8F` - Decorative accents
- **Brand Cream**: `#F4F1DE` - Background and light elements
- **Background**: `#F9F7F2` - Main page background

### Typography
- **Abril Fatface**: Display headings and titles
- **DM Sans**: Body text and UI elements
- **Dancing Script**: Decorative script accents

### Design Principles
- Premium, artisanal aesthetic
- Smooth animations and transitions
- Consistent spacing and rhythm
- Rich textures and depth

## 📦 Key Components

### SectionTag
Reusable pill-shaped tag component used across all sections for visual consistency.
- Props: `children`, `className`, `rotate`
- Default style: Dark background with light text

### Hero Section
- Video modal with YouTube integration
- Rotating text ring animation
- Floating review card
- Play button with backdrop blur

### Bestsellers Section
- Masonry grid layout for products
- Product data from `collectionData.js`
- Hover effects with image scaling
- Link to external ordering system (Oddle)

### Catering Section
- Creative play button overlays on images
- Pulsing animation effects
- "Watch Video" hover text
- Gradient background with soft glows
- Mobile-optimized layout

### Quality Section
- 4-step process timeline
- Staggered card layout
- Animated SVG connecting lines
- Tag positioned above title

### Testimonials Section
- Horizontal scrolling card layout
- User avatars and ratings
- "Join the Family" call-to-action card
- Snap scrolling for better UX

## 🔧 Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🌐 External Integrations

- **Oddle**: Online ordering system
  - Northbridge location: `https://one18bakerynorthbridge.oddle.me/en_SG`
  - Main menu: `https://one18bakehouse.oddle.me/en_SG`
- **YouTube**: Video content via VideoModal component
- **Unsplash**: High-quality images for catering and products
- **Pravatar**: User avatar placeholders

## 🚀 Deployment

This project can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Fast initial load with Vite
- Optimized images from CDN (Unsplash)
- Lazy loading for offscreen content
- Smooth 60fps animations
- Minimal bundle size

## 📄 License

© 2025 One18 Bakery. All rights reserved.

## 🙏 Credits

Designed and developed for One18 Bakery, Singapore's premier artisan bakery specializing in Supreme Circular Croissants and French pastries.
