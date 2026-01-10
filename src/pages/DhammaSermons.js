import React, { useState } from 'react';
import './DhammaSermons.css';

const DhammaSermons = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sermonCategories = [
    { id: 'all', name: 'All Sermons' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'dhammatalks', name: 'Dhamma Talks' },
    { id: 'poya', name: 'Poya Day Sermons' },
    { id: 'special', name: 'Special Occasions' }
  ];

  // Sample sermon data - replace with actual data from backend/API
  const sermons = [
    {
      id: 1,
      title: 'The Four Noble Truths',
      category: 'dhammatalks',
      date: '2024-01-15',
      duration: '45 min',
      description: 'An introduction to the foundational teachings of the Buddha - the Four Noble Truths that explain the nature of suffering and the path to liberation.'
    },
    {
      id: 2,
      title: 'Mindfulness Meditation Practice',
      category: 'meditation',
      date: '2024-01-22',
      duration: '30 min',
      description: 'A practical guide to mindfulness meditation, including breathing techniques and body awareness practices.'
    },
    {
      id: 3,
      title: 'Vesak Poya Day Sermon',
      category: 'poya',
      date: '2024-05-23',
      duration: '60 min',
      description: 'A special sermon delivered on Vesak Poya Day, commemorating the birth, enlightenment, and passing away of the Buddha.'
    },
    {
      id: 4,
      title: 'The Eightfold Path',
      category: 'dhammatalks',
      date: '2024-02-05',
      duration: '50 min',
      description: 'Understanding the Noble Eightfold Path - the Buddha\'s prescription for ending suffering and achieving enlightenment.'
    },
    {
      id: 5,
      title: 'Walking Meditation',
      category: 'meditation',
      date: '2024-02-12',
      duration: '25 min',
      description: 'Learn the practice of walking meditation as a complementary practice to seated meditation.'
    },
    {
      id: 6,
      title: 'New Year Blessing Ceremony',
      category: 'special',
      date: '2024-04-13',
      duration: '40 min',
      description: 'A special sermon delivered during the Sinhala and Tamil New Year blessing ceremony.'
    }
  ];

  const filteredSermons = selectedCategory === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  return (
    <div className="sermons-page">
      <section className="hero-section">
        <div className="container">
          <h1>Dhamma Sermons</h1>
          <p className="hero-description">
            Listen to teachings of the Buddha and guidance from our resident monks. 
            These sermons cover various aspects of Buddhist practice, meditation, and daily life applications.
          </p>
        </div>
      </section>

      <section className="section sermons-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {sermonCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sermons Grid */}
          <div className="sermons-grid">
            {filteredSermons.length > 0 ? (
              filteredSermons.map(sermon => (
                <div key={sermon.id} className="sermon-card">
                  <div className="sermon-header">
                    <span className="sermon-category">{sermonCategories.find(c => c.id === sermon.category)?.name}</span>
                    <span className="sermon-duration">{sermon.duration}</span>
                  </div>
                  <h3 className="sermon-title">{sermon.title}</h3>
                  <p className="sermon-date">
                    <strong>Date:</strong> {new Date(sermon.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="sermon-description">{sermon.description}</p>
                  <div className="sermon-actions">
                    <button className="btn btn-play">Listen Now</button>
                    <button className="btn btn-secondary">Download</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-sermons">
                <p>No sermons found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Sermons */}
      <section className="section upcoming-section">
        <div className="container">
          <h2 className="section-title">Upcoming Sermons</h2>
          <div className="upcoming-info">
            <p>
              Join us for live Dhamma sermons during our regular programs. Sermons are typically 
              delivered during Poya day observances (4th Sunday of each month) and special events. 
              Check our Events page for the schedule.
            </p>
            <div className="upcoming-notice">
              <h3>Live Attendance</h3>
              <p>
                All devotees are welcome to attend sermons in person at the temple. We also 
                provide online streaming for those who cannot attend in person. Contact us for 
                more information about online access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Sermon */}
      <section className="section request-section">
        <div className="container">
          <div className="request-card">
            <h3>Request a Topic</h3>
            <p>
              Is there a specific Buddhist teaching or topic you would like to learn more about? 
              Contact us with your suggestions, and we'll consider it for future sermons.
            </p>
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DhammaSermons;

