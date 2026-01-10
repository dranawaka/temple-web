import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <h1>About Us</h1>
          <p className="hero-description">
            Learn more about our temple, resident monks, history, and the rich tradition of Buddhism in Sri Lanka.
          </p>
        </div>
      </section>

      {/* Resident Monks Section */}
      <section id="monks" className="section">
        <div className="container">
          <h2 className="section-title">Resident Monks</h2>
          <div className="content-card">
            <p>
              Our temple is blessed with dedicated resident monks who guide our community in the practice 
              of Theravada Buddhism. They conduct regular Dhamma teachings, meditation sessions, and 
              provide spiritual guidance to all devotees.
            </p>
            <p>
              The resident monks follow the Vinaya (monastic discipline) and dedicate their lives to the 
              study and practice of the Buddha's teachings. They are available for counseling, blessings, 
              and religious ceremonies throughout the year.
            </p>
            <div className="monks-info">
              <h3>Venerable Monks</h3>
              <p>
                We are honored to have ordained monks who have received proper training in Buddhist 
                philosophy, meditation, and Pali language. They conduct weekly sermons, lead meditation 
                sessions, and organize special programs for major Buddhist observances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section id="history" className="section history-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="content-card">
            <p>
              ශ්‍රී ධර්මාකර විහාරය (Sri Dharmakara Viharaya) was established to serve the Buddhist community and promote 
              the teachings of Theravada Buddhism. Our temple has grown from humble beginnings to become 
              a vibrant center for Buddhist practice and cultural preservation.
            </p>
            <div className="history-timeline">
              <div className="timeline-item">
                <h3>Founding</h3>
                <p>
                  The temple was founded by dedicated members of the Sri Lankan Buddhist community who 
                  saw the need for a place of worship, learning, and cultural preservation.
                </p>
              </div>
              <div className="timeline-item">
                <h3>Growth and Development</h3>
                <p>
                  Over the years, the temple has expanded its services to include Dhamma schools, language 
                  classes, meditation programs, and various community services.
                </p>
              </div>
              <div className="timeline-item">
                <h3>Present Day</h3>
                <p>
                  Today, the temple serves as a spiritual home for many families and individuals seeking 
                  to practice Buddhism and connect with their cultural heritage. We continue to grow and 
                  adapt to serve our community better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buddhism in Sri Lanka Section */}
      <section id="buddhism" className="section buddhism-section">
        <div className="container">
          <h2 className="section-title">Buddhism in Sri Lanka</h2>
          <div className="content-card">
            <p>
              Buddhism was introduced to Sri Lanka in the 3rd century BCE by Venerable Mahinda, the son 
              of Emperor Ashoka of India. Since then, Sri Lanka has been one of the oldest and most 
              important centers of Theravada Buddhism in the world.
            </p>
            <div className="buddhism-facts">
              <div className="fact-item">
                <h3>Historical Significance</h3>
                <p>
                  Sri Lanka is home to the oldest continuously existing Buddhist institutions in the world. 
                  The island has preserved the Theravada tradition in its most authentic form, maintaining 
                  the Pali Canon and traditional practices for over 2,300 years.
                </p>
              </div>
              <div className="fact-item">
                <h3>Theravada Tradition</h3>
                <p>
                  Theravada Buddhism, meaning "The Way of the Elders," focuses on the original teachings 
                  of the Buddha as preserved in the Pali Canon. It emphasizes individual practice, 
                  meditation, and the monastic path to enlightenment.
                </p>
              </div>
              <div className="fact-item">
                <h3>Cultural Integration</h3>
                <p>
                  Buddhism in Sri Lanka is deeply integrated with Sinhalese culture. Major festivals like 
                  Vesak (Buddha's birth, enlightenment, and passing), Poson (arrival of Buddhism), and 
                  Esala Perahera reflect this rich cultural heritage.
                </p>
              </div>
              <div className="fact-item">
                <h3>Sacred Sites</h3>
                <p>
                  Sri Lanka is home to many sacred Buddhist sites, including the Temple of the Sacred 
                  Tooth Relic in Kandy, the ancient cities of Anuradhapura and Polonnaruwa, and numerous 
                  cave temples and monasteries that have been centers of Buddhist learning for centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

