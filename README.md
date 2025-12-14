# Adventure Triangle - Pre-Launch Landing Page

**Discover. Connect. Experience. Adventure. anywhere.**

A modern, responsive pre-launch landing page for Adventure Triangle - the global adventure ecosystem connecting explorers with unforgettable experiences across water, air, and land adventures.

## Features

- **Smooth Scroll & Animations**: Beautiful scroll-reveal animations with Framer Motion
- **Mobile-First Design**: Fully responsive across all devices with elegant mobile navigation
- **Interactive Forms**: Partner onboarding, launch event registration, and beta user signup
- **Admin Dashboard**: View all form submissions with dummy authentication
- **Modern UI**: Built with Next.js 16, React 19, and TailwindCSS v4
- **Dummy Backend**: All forms save to localStorage (easily expandable to real APIs)

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **React**: 19.2.0
- **Styling**: TailwindCSS v4.1.9
- **Animations**: Framer Motion 12.23.26
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: 5.x

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

Check your versions:
\`\`\`bash
node --version
npm --version
\`\`\`

## Installation

### 1. Clone or Download the Project

If you have the project as a ZIP file:
\`\`\`bash
# Extract the ZIP file and navigate to the folder
cd adventure-triangle
\`\`\`

Or clone from repository:
\`\`\`bash
git clone <repository-url>
cd adventure-triangle
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required packages including:
- Next.js and React
- TailwindCSS
- Framer Motion for animations
- Radix UI components
- Form handling libraries
- And all other dependencies

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
adventure-triangle/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with fonts
│   ├── globals.css        # Global styles and theme
│   ├── admin/
│   │   └── page.tsx       # Admin dashboard
│   └── api/               # API routes (if needed)
├── components/
│   ├── navigation.tsx     # Header navigation
│   ├── hero-section.tsx   # Hero with tagline
│   ├── about-section.tsx  # About Adventure Triangle
│   ├── mission-section.tsx # Water | Air | Land missions
│   ├── winter-trekking-section.tsx # Science of adventure
│   ├── partner-onboarding.tsx # Partner application form
│   ├── launch-event-section.tsx # Event registration
│   ├── beta-registration.tsx # Beta user signup
│   ├── campaign-section.tsx # #FeelTheAdventure
│   ├── footer.tsx         # Footer with links
│   └── ui/                # Reusable UI components
├── public/
│   └── logo.png           # Adventure Triangle logo
├── package.json           # Dependencies
└── README.md             # This file
\`\`\`

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Features & Sections

### 1. Hero Section
- Powerful tagline: "Discover. Connect. Experience. Adventure. anywhere."
- Dual CTAs: "Join as Beta User" and "Become a Partner"
- Stunning gradient background

### 2. About Adventure Triangle
- Company mission and vision
- Headquartered in Toronto, Canada
- Launch date: January 26, 2026

### 3. Winter Trekking Science
- Educational content about adventure benefits
- Snow Mirror Effect, Cold-Shock Endorphins, Cortisol Reduction
- Engaging card-based layout

### 4. Mission Section
- Water Adventures (Diving, Sailing, Surfing)
- Air Adventures (Paragliding, Skydiving, Hot Air Balloons)
- Land Adventures (Hiking, Camping, Rock Climbing)

### 5. Partner Onboarding
- Business name, contact info, adventure categories
- Form validation with Zod
- Saves to localStorage

### 6. Launch Event Registration
- Register for January 26, 2026 Toronto event
- Name, email, and attendance confirmation
- Form submission tracking

### 7. Beta User Registration
- Early access signup form
- Adventure preferences selection
- Experience level and special requests

### 8. #FeelTheAdventure Campaign
- Social media integration (Facebook, LinkedIn, Instagram, TikTok)
- Community engagement

### 9. Admin Dashboard
- View all form submissions
- Dummy authentication (admin@adventure.com / admin123)
- Statistics overview
- Access at `/admin`

## Dummy Authentication

For testing the admin dashboard:

- **Email**: admin@adventure.com
- **Password**: admin123

## Customization

### Colors & Theme

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
@theme inline {
  --color-primary: ...;
  --color-secondary: ...;
  /* Update colors here */
}
\`\`\`

### Content

All content can be edited in the respective component files under `components/` directory.

### Forms

Forms currently save to `localStorage`. To connect to a real backend:

1. Create API routes in `app/api/`
2. Replace `localStorage.setItem()` calls with `fetch()` to your API
3. Update form handlers in each form component

Example:
\`\`\`typescript
// Replace this:
localStorage.setItem('partners', JSON.stringify(partners));

// With this:
await fetch('/api/partners', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

The production build will be optimized and ready to deploy.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized animations with reduced motion support
- Lazy loading images
- Smooth scrolling with hardware acceleration
- Responsive images with proper sizing
- Code splitting with Next.js

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Clear npm Cache

If you encounter installation issues:
\`\`\`bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
\`\`\`

### TypeScript Errors

Ensure TypeScript is properly installed:
\`\`\`bash
npm install --save-dev typescript @types/node @types/react @types/react-dom
\`\`\`

## Future Enhancements

- Connect to real database (Supabase/Neon)
- Real authentication system
- Payment integration with Stripe
- Real-time adventure booking
- User profiles and dashboards
- Review and rating system
- Email notifications
- Advanced search and filters

## Support

For issues or questions:
- Email: info@adventuretriangle.com
- Location: Toronto, Canada
- Website: [Coming Soon]

## License

This project is private and proprietary to Adventure Triangle.

---

**Built with ❤️ for Adventure Triangle**

*"Where Every Journey Becomes Legend"*
