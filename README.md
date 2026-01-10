# ශ්‍රී ධර්මාකර විහාරය (Sri Dharmakara Viharaya) Website

A modern, responsive website for ශ්‍රී ධර්මාකර විහාරය (Sri Dharmakara Viharaya) built with React. This website provides information about the temple, events, Dhamma sermons, gallery, and donation options.

## Features

- **Home Page**: Vision, mission, services, and current events
- **About Page**: Resident monks, temple history, and Buddhism in Sri Lanka
- **Events Page**: Regular programs, special events, and Vassana retreat information
- **Dhamma Sermons**: Audio/video sermon library with categories
- **Gallery**: Photo gallery with category filtering
- **Contact Page**: Contact form and temple information
- **Donate Page**: Online donation form with multiple giving options

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Cloudinary (Image hosting and optimization)
- CSS3 (Responsive design)
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Temple
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Cloudinary (see Cloudinary Configuration section below)

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
Temple/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Events.js
│   │   ├── Events.css
│   │   ├── DhammaSermons.js
│   │   ├── DhammaSermons.css
│   │   ├── Gallery.js
│   │   ├── Gallery.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Donate.js
│   │   └── Donate.css
│   ├── utils/
│   │   └── cloudinary.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Updating Content

- **Home Page**: Edit `src/pages/Home.js` to update vision, mission, services, and events
- **About Page**: Edit `src/pages/About.js` for temple history and information
- **Events**: Update events in `src/pages/Events.js`
- **Contact Information**: Modify contact details in `src/pages/Contact.js`
- **Donation**: Customize donation options in `src/pages/Donate.js`

### Styling

- Main styles are in `src/App.css`
- Component-specific styles are in their respective CSS files
- Color scheme can be customized by changing the primary color `#8B4513` (brown) throughout the CSS files

### Cloudinary Configuration

This project uses Cloudinary for image hosting and optimization. Follow these steps to set it up:

1. **Create a Cloudinary account** (if you don't have one):
   - Visit [https://cloudinary.com](https://cloudinary.com)
   - Sign up for a free account

2. **Get your Cloudinary credentials**:
   - Log into your Cloudinary dashboard
   - Copy your **Cloud Name** from the dashboard

3. **Configure environment variables**:
   - Create a `.env` file in the root directory of the project
   - Add the following:
     ```
     REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
     ```
   - Replace `your-cloud-name` with your actual Cloudinary cloud name

4. **Upload images to Cloudinary**:
   - Use the Cloudinary Media Library or API to upload your images
   - Note the **Public ID** of each uploaded image (e.g., `temple/temple01` or `gallery/events/new-year-2024`)

5. **Update image references**:
   - **Home Page**: Update the `sliderImages` array in `src/pages/Home.js` with your Cloudinary public IDs
   - **Gallery**: Update the `galleryItems` array in `src/pages/Gallery.js` with your Cloudinary public IDs

**Note**: If Cloudinary is not configured, the app will fall back to using local images from the `public/images/` folder.

### Adding Images

**Option 1: Using Cloudinary (Recommended)**
- Upload images to Cloudinary
- Use the Cloudinary public IDs in your components
- Images will be automatically optimized and delivered in the best format

**Option 2: Local Images (Fallback)**
- Place images in the `public/images/` folder
- Reference them using `/images/image-name.jpg` in your components
- Update gallery items in `src/pages/Gallery.js` with actual image paths

### Integrating Backend

The contact and donation forms currently log to console. To integrate with a backend:

1. Create API endpoints for form submissions
2. Update form submission handlers in `Contact.js` and `Donate.js`
3. Add environment variables for API URLs (use `.env` file)

### Payment Integration

For the donation page, integrate with a payment processor:

- **Stripe**: Add Stripe.js and create payment intents
- **PayPal**: Integrate PayPal buttons
- **Other**: Add your preferred payment gateway

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for the Sri Lankan Buddhist Temple community.

## Support

For questions or issues, please contact the temple administration.

---

**Note**: This is a template website. Replace placeholder content, images, and contact information with actual temple details before going live.

