import React from 'react';
import './Events.css';

const Events = () => {
  const currentEvents = [
    {
      title: 'Dhamma School',
      frequency: '1st Sunday of each month',
      time: '10:00 AM (MDT)',
      description: 'Classes for children teaching Buddhism and Sinhalese language. All children are welcome to join these educational sessions that combine spiritual teachings with cultural preservation.',
      type: 'regular'
    },
    {
      title: 'Poya Program',
      frequency: '4th Sunday of each month',
      time: '10:00 AM (MDT)',
      description: 'All day retreat for adults and children (similar to observing sil during full-moon poya day). This is a special observance day where devotees can practice meditation, listen to Dhamma talks, and observe the eight precepts.',
      type: 'regular'
    },
    {
      title: 'Vassana Retreat 2024',
      frequency: 'Annual Event',
      time: 'Full Day',
      description: 'The annual three-month retreat period (Vassa) following the traditional Buddhist monastic calendar. This is a special period for intensive practice, study, and spiritual growth. Join us for daily meditation sessions, Dhamma talks, and special programs.',
      type: 'special'
    }
  ];

  const howToJoin = [
    {
      step: '1',
      title: 'Check the Schedule',
      description: 'Review our monthly calendar to see upcoming events and their dates.'
    },
    {
      step: '2',
      title: 'Register if Required',
      description: 'Some special events may require registration. Contact us to confirm attendance for larger events.'
    },
    {
      step: '3',
      title: 'Arrive on Time',
      description: 'Please arrive a few minutes early to settle in and prepare for the session.'
    },
    {
      step: '4',
      title: 'Participate Respectfully',
      description: 'Come with an open heart and mind, ready to learn and practice the Dhamma teachings.'
    }
  ];

  return (
    <div className="events-page">
      <section className="hero-section">
        <div className="container">
          <h1>Events</h1>
          <p className="hero-description">
            Join us for regular programs, special observances, and retreats throughout the year.
          </p>
        </div>
      </section>

      {/* Current Events */}
      <section className="section current-events-section">
        <div className="container">
          <h2 className="section-title">Current Events</h2>
          <div className="events-grid">
            {currentEvents.map((event, index) => (
              <div key={index} className={`event-card ${event.type}`}>
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  {event.type === 'special' && <span className="event-badge">Special Event</span>}
                </div>
                <div className="event-details">
                  <p className="event-frequency">
                    <strong>When:</strong> {event.frequency}
                  </p>
                  <p className="event-time">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section how-to-join-section">
        <div className="container">
          <h2 className="section-title">How to Join any Event</h2>
          <div className="how-to-join-grid">
            {howToJoin.map((item, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vassana Retreat Detail */}
      <section className="section vassana-section">
        <div className="container">
          <h2 className="section-title">Vassana Retreat 2024</h2>
          <div className="retreat-content">
            <div className="retreat-info">
              <h3>About Vassana (Rainy Season Retreat)</h3>
              <p>
                Vassana is the traditional three-month annual retreat observed by Theravada Buddhist 
                monks during the rainy season. This practice dates back to the time of the Buddha and 
                is a period for intensive meditation practice, Dhamma study, and spiritual development.
              </p>
              <h4>What to Expect:</h4>
              <ul className="retreat-list">
                <li>Daily meditation sessions in the morning and evening</li>
                <li>Dhamma talks by resident monks</li>
                <li>Study of Buddhist scriptures (Suttas)</li>
                <li>Special Poya day observances</li>
                <li>Community service activities</li>
                <li>Opportunities for individual guidance and counseling</li>
              </ul>
              <p className="retreat-note">
                <strong>Note:</strong> All devotees are welcome to participate in Vassana activities. 
                You can join for individual sessions or participate in the full retreat. For more 
                information, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-card">
            <h3>Questions About Events?</h3>
            <p>
              If you have any questions about our events or would like more information, please don't 
              hesitate to contact us. We're here to help guide you in your spiritual journey.
            </p>
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

