import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>ශ්‍රී ධර්මාකර විහාරය</h1>
          <p className="hero-subtitle-sinhala">Sri Dharmakara Viharaya</p>
          <p className="hero-quote">
            "Appamado amatapadam – Pamado maccuno padam<br />
            Appamatta na miyanti – Ye pamatta yatha mata"
          </p>
          <p className="hero-subtitle">
            Mindfulness is the way to the Deathless (Nibbana); unmindfulness is the way to Death. 
            Those who are mindful do not die; those who are not mindful are as if already dead. – Buddha
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="section">
        <div className="container">
          <div className="vision-mission">
            <div className="card">
              <h2 className="card-title">Our Vision</h2>
              <p className="card-content">
                The vision of ශ්‍රී ධර්මාකර විහාරය (Sri Dharmakara Viharaya) is to spread Theravada Buddhist teachings, 
                promote Buddhist lifestyle, and guide devotees on a path to enlightenment.
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Our Mission</h2>
              <p className="card-content">
                Our mission includes providing religious and social services, conducting Dhamma classes 
                for children, teaching the Sinhala Language, and offering meditation classes. Services 
                of the temple which are conducted within the framework of the teachings of the Buddha 
                are available to everyone regardless of their own religious and other beliefs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Devotions Section */}
      <section className="section daily-devotions">
        <div className="container">
          <h2 className="section-title">Daily Buddhist Devotions</h2>
          <div className="devotions-content">
            <p>
              We invite all devotees to join us for daily Buddhist devotions and meditation practice. 
              These sessions provide an opportunity for spiritual growth, inner peace, and connection 
              with the Dhamma teachings.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid">
            <div className="service-card">
              <h3 className="service-title">Buddhist Meditation</h3>
              <p>Introduction and meditation classes for beginners and experienced practitioners.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Buddhist Funeral Services</h3>
              <p>Traditional Buddhist funeral services for the Asian community with proper ceremonies.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Spiritual Care</h3>
              <p>Spiritual care and support for the ill and hospitalized community members.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Marriage Blessings</h3>
              <p>Buddhist blessings and ceremonies for marriage celebrations.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Buddhist Counseling</h3>
              <p>Guidance and counseling based on Buddhist principles and teachings.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Thripitaka Lessons</h3>
              <p>Educational classes on the Thripitaka, the three baskets of Buddhist scriptures.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Cultural Lectures</h3>
              <p>Buddhist cultural lectures and workshops for school children and adults.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Language Classes</h3>
              <p>Sinhala language classes to preserve cultural heritage and communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Events Section */}
      <section className="section current-events">
        <div className="container">
          <h2 className="section-title">Current Events</h2>
          <div className="events-list">
            <div className="event-item">
              <h3>1st Sunday of each month: Dhamma School</h3>
              <p className="event-time">10:00 AM (MDT)</p>
              <p className="event-description">
                Classes for children teaching Buddhism and Sinhalese language.
              </p>
            </div>
            <div className="event-item">
              <h3>4th Sunday of each month: Poya Program</h3>
              <p className="event-time">10:00 AM (MDT)</p>
              <p className="event-description">
                All day retreat for adults and children (similar to observing sil during full-moon poya day).
              </p>
            </div>
            <div className="event-item">
              <h3>Vassana Retreat 2024</h3>
              <p className="event-description">
                Annual three-month retreat period (Vassa) following the traditional Buddhist monastic calendar. 
                Join us for this special period of intensive practice and study.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

