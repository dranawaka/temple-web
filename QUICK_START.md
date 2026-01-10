# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Cloudinary (Optional but Recommended)**
   - Create a free account at [cloudinary.com](https://cloudinary.com)
   - Get your Cloud Name from the dashboard
   - Create a `.env` file in the project root:
     ```
     REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
     ```
   - Replace `your-cloud-name` with your actual Cloudinary cloud name
   - If not set up, the app will use local images as fallback

3. **Start Development Server**
   ```bash
   npm start
   ```
   The website will open at `http://localhost:3000`

## What's Included

✅ Complete React application with routing
✅ Responsive design that works on all devices
✅ All main pages:
   - Home (Vision, Mission, Services, Events)
   - About (Monks, History, Buddhism in Sri Lanka)
   - Events (Regular programs, Vassana retreat)
   - Dhamma Sermons (with category filtering)
   - Gallery (with category filtering)
   - Contact (with form)
   - Donate (with donation form)

## Customization Steps

### 1. Update Contact Information
Edit `src/pages/Contact.js` and update:
- Address
- Phone numbers
- Email addresses
- Office hours

### 2. Add Real Images

**Option A: Using Cloudinary (Recommended)**
- Upload images to your Cloudinary account
- Note the Public IDs of your images (e.g., `temple/temple01`, `gallery/events/new-year-2024`)
- Update `src/pages/Home.js` with Cloudinary public IDs for slider images
- Update `src/pages/Gallery.js` with Cloudinary public IDs in the `galleryItems` array

**Option B: Local Images (Fallback)**
- Place images in the `public/images/` folder
- Update image paths in `src/pages/Home.js` and `src/pages/Gallery.js`

### 3. Add Sermons
- Add sermon data to the `sermons` array in `src/pages/DhammaSermons.js`
- Connect to a backend API or media hosting service for actual audio/video

### 4. Integrate Forms
- Connect Contact form to your backend API
- Integrate Donate form with a payment processor (Stripe, PayPal, etc.)

### 5. Update Content
- Edit page content in respective `.js` files in the `src/pages/` directory
- Update styles in corresponding `.css` files

### 6. Deploy
```bash
npm run build
```
Deploy the `build` folder to your hosting service (Netlify, Vercel, AWS, etc.)

## Color Scheme

Primary colors used:
- Brown (#8B4513) - Main theme color
- Gold (#FFD700) - Accent color
- Orange (#D2691E) - Secondary accent

To change colors, update the CSS files throughout the project.

## Next Steps

1. Customize content for your specific temple
2. Add real images and media
3. Integrate backend services for forms and donations
4. Set up domain and hosting
5. Test on various devices and browsers

