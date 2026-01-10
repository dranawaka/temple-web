import React, { useState } from 'react';
import './Gallery.css';

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

  // Sample gallery items - replace with actual images from backend/API
  const galleryItems = [
    { id: 1, category: 'events', title: 'New Year Celebration 2024', image: '/api/placeholder/400/300' },
    { id: 2, category: 'poya', title: 'Vesak Poya Day Observance', image: '/api/placeholder/400/300' },
    { id: 3, category: 'dhammaschool', title: 'Dhamma School Children', image: '/api/placeholder/400/300' },
    { id: 4, category: 'temple', title: 'Temple Building', image: '/api/placeholder/400/300' },
    { id: 5, category: 'vassana', title: 'Vassana Retreat 2024', image: '/api/placeholder/400/300' },
    { id: 6, category: 'events', title: 'Poson Poya Day', image: '/api/placeholder/400/300' },
    { id: 7, category: 'dhammaschool', title: 'Language Classes', image: '/api/placeholder/400/300' },
    { id: 8, category: 'poya', title: 'Esala Poya Observance', image: '/api/placeholder/400/300' },
    { id: 9, category: 'temple', title: 'Meditation Hall', image: '/api/placeholder/400/300' },
    { id: 10, category: 'vassana', title: 'Retreat Participants', image: '/api/placeholder/400/300' },
    { id: 11, category: 'events', title: 'Wedding Blessing', image: '/api/placeholder/400/300' },
    { id: 12, category: 'dhammaschool', title: 'Children\'s Program', image: '/api/placeholder/400/300' }
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
              {filteredItems.map(item => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="gallery-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(item.title);
                      }}
                    />
                    <div className="gallery-overlay">
                      <h3 className="gallery-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
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

