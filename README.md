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

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

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

### Adding Images

1. Place images in the `public` folder
2. Reference them using `/image-name.jpg` in your components
3. Update gallery items in `src/pages/Gallery.js` with actual image paths

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

