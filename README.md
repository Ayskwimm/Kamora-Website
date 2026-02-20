# Kamora - Modern Responsive Promotional Website

A stunning, modern promotional website built with React.js, featuring smooth animations, responsive design, and exceptional user experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with beautiful gradients and animations
- **Fully Responsive**: Mobile-first design that looks perfect on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Interactive Components**: Carousel, forms with validation, hover effects
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Clean Architecture**: Modular, reusable components with best practices

## 🛠️ Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: React Icons for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Package Manager**: npm

## 📁 Project Structure

```
kamora/
├── public/
│   └── index.html          # Main HTML file with SEO meta tags
├── src/
│   ├── assets/
│   │   └── styles.css      # Custom CSS and Tailwind imports
│   ├── components/
│   │   ├── About.jsx       # About section component
│   │   ├── Button.jsx      # Reusable button component
│   │   ├── Card.jsx        # Reusable card component
│   │   ├── Contact.jsx     # Contact form with validation
│   │   ├── Features.jsx    # Features grid section
│   │   ├── Hero.jsx        # Hero section with animations
│   │   ├── Pricing.jsx     # Pricing cards with toggle
│   │   └── Testimonials.jsx # Testimonials carousel
│   ├── layout/
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Header.jsx      # Navigation header
│   │   └── Layout.jsx      # Main layout wrapper
│   ├── pages/
│   │   └── Home.jsx        # Home page with all sections
│   ├── hooks/              # Custom React hooks (if needed)
│   ├── utils/              # Utility functions (if needed)
│   ├── App.jsx             # Main App component with routing
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── README.md              # This file
```

## 🎨 Website Sections

### 1. Hero Section
- Full-width gradient background with animated elements
- Compelling headline and subheadline
- Call-to-action buttons with hover animations
- Statistics display
- Smooth entrance animations

### 2. Features Section
- 6 feature cards with icons
- Responsive grid layout
- Hover effects and animations
- Call-to-action section

### 3. About Section
- Image and text layout
- Company statistics
- Core values display
- Fade-in animations on scroll

### 4. Testimonials Section
- Interactive carousel with smooth transitions
- Auto-play functionality
- Manual navigation controls
- Customer ratings
- Additional testimonials grid

### 5. Pricing Section
- 3 pricing tiers
- "Most Popular" highlight
- Monthly/Yearly billing toggle
- Feature comparison
- FAQ section

### 6. Contact Section
- Interactive form with real-time validation
- Success message animation
- Contact information display
- Business hours

### 7. Footer
- Company information
- Navigation links
- Social media icons
- Newsletter signup (ready for implementation)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/kamora.git
cd kamora
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Features Demonstrated

### React Best Practices
- Functional components with hooks
- Custom reusable components
- Proper state management
- Clean component architecture
- Props validation and default values

### Modern CSS Techniques
- Tailwind CSS utility classes
- Custom CSS variables
- Responsive design patterns
- Smooth transitions and animations
- Glass morphism effects

### User Experience
- Smooth scrolling navigation
- Form validation with error messages
- Loading states and animations
- Mobile-responsive design
- Accessibility considerations

### Performance Optimization
- Lazy loading with intersection observers
- Optimized animations
- Efficient re-renders
- Code splitting ready
- SEO meta tags

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and can be easily customized:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Pink (#EC4899)

### Fonts
The project uses Inter and Poppins fonts from Google Fonts. These can be changed in the `public/index.html` file.

### Animations
Animations are powered by Framer Motion. Custom animations can be added to individual components.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact us at hello@kamora.com

---

**Built with ❤️ by the Kamora team**
