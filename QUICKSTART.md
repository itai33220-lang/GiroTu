# GiroTu Website - Quick Start Guide

## 🚀 Open the Website

Simply double-click on **index.html** to open the website in your default browser.

## 📄 All Pages

- **index.html** - Home page
- **experiences.html** - Browse all experiences
- **private-tours.html** - Private tour packages
- **producers-places.html** - Our partners
- **about.html** - About GiroTu
- **why-girotu.html** - Why choose us
- **contact.html** - Contact form

## ✨ Key Features

### Navigation
- The navbar is **static** (scrolls with page)
- Has a glassmorphism effect with blur
- Hover over nav items for pill-shaped highlight
- Mobile: Click hamburger menu for navigation

### Interactions
- **Scroll animations**: Content fades in as you scroll
- **Filter experiences**: Click filter buttons on experiences page
- **Book tours**: Click "Book Now" to open booking modal
- **Forms**: All forms have validation
- **Back to top**: Button appears when scrolling down

## 🎨 Customization Tips

### Change Colors
Open `css/style.css` and edit the CSS variables at the top:
```css
:root {
  --primary-color: #6B2C4C;
  --secondary-color: #D4AF37;
  /* Change these colors */
}
```

### Replace Images
1. Add your images to the `images/` folder
2. In HTML files, find `<img src="https://images.unsplash.com/...">` 
3. Replace with `<img src="./images/your-image.jpg">`

### Update Contact Info
Edit footer section in each HTML file:
- Address
- Phone numbers  
- Email addresses
- Social media links

### Change Text
All text is in the HTML files - just edit directly!

## 📱 Test Responsiveness

### In Browser
1. Open developer tools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select different devices to test

### Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 991px  
- **Desktop**: ≥ 992px

## 🔧 Technical Details

### Built With
- **Bootstrap 5.3.2** (via CDN)
- **Bootstrap Icons** (via CDN)
- **Google Fonts** - Poppins (via CDN)
- **Vanilla JavaScript** (no jQuery needed)

### Browser Support
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## 📝 Forms

Currently, forms show a success message but don't actually send data.

**To make forms functional:**
1. Set up a backend (Node.js, PHP, etc.)
2. Edit `js/script.js` → `handleFormSubmit()` function
3. Add your API endpoint

## 🗺️ Map

The contact page shows a Google Map of Napa Valley.

**To change location:**
1. Go to Google Maps
2. Find your location
3. Click Share → Embed map
4. Copy iframe code
5. Replace iframe in `contact.html`

## 🎯 Page Features

### Home (index.html)
- Hero with CTA buttons
- Features section
- 6 experience cards
- Destinations carousel
- 3 testimonials
- Call-to-action
- Footer

### Experiences (experiences.html)
- Filter by category
- 9 experience cards
- Booking modal
- Pricing included

### Private Tours (private-tours.html)
- 3 pricing packages
- Benefits section
- Inquiry form
- Special occasions

### Producers & Places (producers-places.html)
- 6 partner wineries
- Food producers section

### About (about.html)
- Company story
- Mission & values
- 4 team members
- Timeline (2015-2025)

### Why GiroTu (why-girotu.html)
- 6 key benefits
- Statistics with counters
- Testimonials
- Call-to-action

### Contact (contact.html)
- Contact form
- Contact info cards
- Google Map
- FAQ accordion

## 💡 Tips

1. **Images**: Replace Unsplash placeholder images with your own
2. **Content**: Update all text to match your business
3. **Colors**: Choose colors that match your brand
4. **Logo**: Add your logo image and update navbar
5. **Social Media**: Update all social media links
6. **SEO**: Update meta descriptions for each page

## 🐛 Common Issues

**Issue**: Styles not loading
- **Fix**: Check file paths in `<link>` tags
- Make sure `style.css` is in `css/` folder

**Issue**: Scripts not working
- **Fix**: Check browser console (F12) for errors
- Make sure `script.js` is in `js/` folder

**Issue**: Images not showing
- **Fix**: Check image paths
- Make sure images are in correct folder
- Check file extensions (.jpg, .png, etc.)

## 📞 Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all file paths are correct
3. Make sure you're opening index.html
4. Try a different browser

## ✅ Checklist Before Launch

- [ ] Replace all placeholder images
- [ ] Update all text content
- [ ] Change contact information
- [ ] Update social media links
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Check all internal links
- [ ] Update meta descriptions
- [ ] Add favicon
- [ ] Test in multiple browsers

## 🌟 Enjoy Your Website!

Your GiroTu website is ready to go. Customize it to match your brand and start attracting customers!

---

**Questions?** Check the full README.md for detailed documentation.
