import React, { useState } from 'react';
import './Gallery.css';
import { getThumbnail, getResponsiveImage, isCloudinaryConfigured } from '../utils/cloudinary';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'poya', name: 'Poya Day' },
    { id: 'vassana', name: 'Vassana Retreat' },
    { id: 'dhammaschool', name: 'Dhamma School' },
    { id: 'temple', name: 'Temple' }
  ];

  // Helper function to get image URL
  // Uses Cloudinary if configured, otherwise falls back to placeholder
  const getImageUrl = (publicId) => {
    if (isCloudinaryConfigured() && publicId) {
      return getThumbnail(publicId, 400);
    }
    return '/api/placeholder/400/300';
  };

  // Gallery items with Cloudinary public IDs
  // Replace these with your actual Cloudinary image public IDs
  // Format: { id, category, title, imagePublicId }
  // Example Cloudinary public IDs: 'gallery/events/new-year-2024', 'gallery/poya/vesak-2024', etc.
  const galleryItems = [
    { id: 1, category: 'events', title: 'New Year Celebration 2024', imagePublicId: 'gallery/events/new-year-2024' },
    { id: 2, category: 'poya', title: 'Vesak Poya Day Observance', imagePublicId: 'gallery/poya/vesak-2024' },
    { id: 3, category: 'dhammaschool', title: 'Dhamma School Children', imagePublicId: 'gallery/dhammaschool/children-2024' },
    { id: 4, category: 'temple', title: 'Temple Building', imagePublicId: 'gallery/temple/building' },
    { id: 5, category: 'vassana', title: 'Vassana Retreat 2024', imagePublicId: 'gallery/vassana/retreat-2024' },
    { id: 6, category: 'events', title: 'Poson Poya Day', imagePublicId: 'gallery/events/poson-2024' },
    { id: 7, category: 'dhammaschool', title: 'Language Classes', imagePublicId: 'gallery/dhammaschool/language-classes' },
    { id: 8, category: 'poya', title: 'Esala Poya Observance', imagePublicId: 'gallery/poya/esala-2024' },
    { id: 9, category: 'temple', title: 'Meditation Hall', imagePublicId: 'gallery/temple/meditation-hall' },
    { id: 10, category: 'vassana', title: 'Retreat Participants', imagePublicId: 'gallery/vassana/participants-2024' },
    { id: 11, category: 'events', title: 'Wedding Blessing', imagePublicId: 'gallery/events/wedding-blessing' },
    { id: 12, category: 'dhammaschool', title: 'Children\'s Program', imagePublicId: 'gallery/dhammaschool/children-program' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="hero-section">
        <div className="container">
          <h1>Gallery</h1>
          <p className="hero-description">
            Browse through photos from our temple activities, events, and community gatherings.
          </p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredItems.length > 0 ? (
            <div className="gallery-grid">
              {filteredItems.map(item => {
                const imageUrl = getImageUrl(item.imagePublicId);

                return (
                  <div key={item.id} className="gallery-item">
                    <div className="gallery-image-container">
                      <img 
                        src={imageUrl} 
                        alt={item.title}
                        className="gallery-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(item.title);
                        }}
                      />
                      <div className="gallery-overlay">
                        <h3 className="gallery-title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-items">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upload Section */}
      <section className="section upload-section">
        <div className="container">
          <div className="upload-card">
            <h3>Share Your Photos</h3>
            <p>
              Have photos from temple events or activities? We'd love to see them! 
              Contact us to share your photos with the community.
            </p>
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

