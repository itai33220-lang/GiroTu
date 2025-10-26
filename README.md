# GiroTu Website - Complete Bootstrap 5 Responsive Website

A modern, fully responsive multi-page website for GiroTu wine and culinary experiences, built with Bootstrap 5.

## 🌟 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Bootstrap 5**: Latest Bootstrap framework with custom styling
- **Multiple Pages**: 7 complete pages with consistent design
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Form Validation**: Built-in validation for all forms
- **SEO Optimized**: Meta tags, semantic HTML, and structured content
- **Accessible**: ARIA labels, keyboard navigation, and sufficient contrast

## 📁 Project Structure

```
GiroTu-website/
├── index.html              # Home page with hero, features, experiences
├── experiences.html        # All experiences with filtering
├── private-tours.html      # Private tour packages and inquiry form
├── producers-places.html   # Partner wineries and producers
├── about.html             # Company story, team, timeline
├── why-girotu.html        # Unique selling points and benefits
├── contact.html           # Contact form, info, map, FAQs
├── css/
│   └── style.css          # Custom styles with variables
├── js/
│   └── script.js          # Custom JavaScript functionality
├── images/                # Image assets (add your images here)
└── assets/                # Icons, fonts, etc.
```

## 🎨 Design Specifications

### Color Scheme
- Primary: #6B2C4C (Burgundy)
- Secondary: #D4AF37 (Gold)
- Accent: #8B4367 (Mauve)
- Dark Background: #1a1a1a
- Light Background: #f8f9fa

### Typography
- Font Family: 'Poppins', sans-serif (via Google Fonts)
- Headings: Bold, large, clear hierarchy
- Body Text: 16-18px, comfortable line height

### Navigation
- **Position**: Static/Relative (NOT fixed)
- **Behavior**: Scrolls away with page content
- **Style**: Glassmorphism with pill shape (border-radius: 50px)
- **Hover**: Individual nav items get white pill background
- **Responsive**: Hamburger menu on mobile/tablet

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local testing)

### Installation

1. **Clone or download** the project files
2. **Open index.html** in your browser to view the website
3. **Optional**: Use a local server for better testing
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

4. **Access the website** at `http://localhost:8000`

## 📄 Pages Overview

### 1. Home (index.html)
- Hero section with CTA buttons
- About section with key features
- Experiences showcase
- Destinations carousel
- Testimonials
- Call-to-action section
- Footer

### 2. Experiences (experiences.html)
- Filter buttons for different categories
- Grid of experience cards
- Detailed information and pricing
- Booking modal

### 3. Private Tours (private-tours.html)
- Package comparison (Essential, Premium, Luxury)
- Benefits section
- Special occasions
- Detailed inquiry form

### 4. Producers & Places (producers-places.html)
- Partner wineries showcase
- Food producers section
- Location information

### 5. About (about.html)
- Company story
- Mission and values
- Team members with photos
- Timeline of milestones

### 6. Why GiroTu (why-girotu.html)
- Key benefits and differentiators
- Statistics with animated counters
- Comparison with competitors
- Additional testimonials

### 7. Contact (contact.html)
- Contact form with validation
- Contact information
- Google Maps integration
- FAQ accordion

## 🎯 Key Features

### Navigation Bar
- Static position (scrolls with page)
- Glassmorphism effect with backdrop blur
- Pill-shaped hover states
- Fully responsive with mobile menu
- Smooth transitions

### Interactive Elements
- **Smooth Scrolling**: For anchor links
- **Scroll Animations**: Fade-in effects using Intersection Observer
- **Form Validation**: Bootstrap validation with custom messages
- **Filter System**: Dynamic filtering on experiences page
- **Carousels**: Auto-playing with pause on hover
- **Modals**: Booking forms with smooth animations
- **Back to Top**: Auto-appearing scroll button

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: ≥ 992px
- Uses Bootstrap responsive grid system

## 🛠️ Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #6B2C4C;
  --secondary-color: #D4AF37;
  --accent-color: #8B4367;
  /* ... more variables */
}
```

### Adding Images
1. Place images in the `/images/` folder
2. Update `src` attributes in HTML files
3. Use descriptive `alt` text for accessibility

### Modifying Content
- All text content is in HTML files
- Update contact information in footer (appears on all pages)
- Modify social media links

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⚡ Performance

- Lazy loading for images
- Minified Bootstrap CSS/JS (CDN)
- Optimized animations
- Efficient JavaScript

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Alt text for all images
- Form labels and validation messages

## 📦 Dependencies

### External Libraries (via CDN)
- Bootstrap 5.3.2 (CSS & JS)
- Bootstrap Icons 1.11.1
- Google Fonts (Poppins)

No installation required - all dependencies loaded via CDN.

## 🔧 JavaScript Functionality

- Smooth scroll to sections
- Active navigation highlighting
- Scroll-triggered animations
- Form validation and submission
- Filter functionality
- Modal handling
- Carousel controls
- Counter animations
- Back to top button
- Newsletter subscription

## 📝 Form Handling

All forms include:
- HTML5 validation
- Bootstrap validation classes
- Custom error messages
- Loading states on submission
- Success/error alerts

**Note**: Form submissions are currently simulated. To make forms functional:
1. Set up a backend API endpoint
2. Update the `handleFormSubmit()` function in `script.js`
3. Add actual form processing logic

## 🗺️ Google Maps

The contact page includes an embedded Google Map. To use your own location:
1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `contact.html`

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Site will be published

### Netlify/Vercel
1. Connect your repository
2. Deploy automatically

### Traditional Hosting
1. Upload all files to your web host
2. Ensure `index.html` is in the root directory

## 📊 SEO Optimization

- Meta descriptions on all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Descriptive headings hierarchy
- Image alt attributes
- Clean, readable URLs

## 🎨 Design Elements

### Cards
- Hover lift effect
- Image zoom on hover
- Consistent padding and spacing
- Shadow effects

### Buttons
- Multiple styles (primary, outline, learn-more)
- Hover animations
- Icon integration
- Responsive sizing

### Sections
- Consistent padding (py-5)
- Alternating backgrounds
- Fade-in animations
- Container max-width for readability

## 📞 Support

For questions or issues:
- Email: info@girotu.com (update with your email)
- Phone: +1 (555) 123-4567 (update with your phone)

## 📄 License

This project is created for GiroTu. All rights reserved.

## 🙏 Credits

- Bootstrap Team for the excellent framework
- Unsplash for placeholder images
- Bootstrap Icons for icon set
- Google Fonts for Poppins font

## 🔄 Future Enhancements

Potential improvements:
- Blog section
- Online booking system integration
- Payment gateway
- Customer reviews system
- Multi-language support
- Image gallery/lightbox
- Video integration
- Live chat widget
- Newsletter automation
- Social media feed integration

---

**Built with ❤️ using Bootstrap 5**

Last Updated: October 2025
