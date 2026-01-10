import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountChange = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('');
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = customAmount || amount;
    if (!donationAmount) {
      alert('Please select or enter a donation amount');
      return;
    }
    // Here you would typically send the donation to a payment processor
    console.log('Donation submitted:', {
      type: donationType,
      amount: donationAmount,
      ...formData
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAmount('');
      setCustomAmount('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const donationAreas = [
    {
      title: 'General Donation',
      description: 'Support the general operations and maintenance of the temple.'
    },
    {
      title: 'Dhamma School',
      description: 'Help fund educational programs for children, including Buddhism classes and Sinhala language instruction.'
    },
    {
      title: 'Building Fund',
      description: 'Contribute to temple construction, renovation, and facility improvements.'
    },
    {
      title: 'Monks\' Support',
      description: 'Support the resident monks\' daily needs and educational resources.'
    },
    {
      title: 'Events & Programs',
      description: 'Fund special events, retreats, and community programs throughout the year.'
    },
    {
      title: 'Meditation Hall',
      description: 'Support the meditation hall and equipment for meditation classes.'
    }
  ];

  return (
    <div className="donate-page">
      <section className="hero-section">
        <div className="container">
          <h1>Donate</h1>
          <p className="hero-description">
            Your generous support helps us continue spreading the Dhamma teachings and serving our community. 
            Every contribution, no matter the size, makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section donation-section">
        <div className="container">
          <div className="donation-content">
            <div className="donation-form-container">
              <h2 className="section-title">Make a Donation</h2>
              {submitted ? (
                <div className="success-message">
                  <h3>Thank You for Your Donation!</h3>
                  <p>Your generosity helps us continue our mission. You will receive a confirmation email shortly.</p>
                </div>
              ) : (
                <form className="donation-form" onSubmit={handleSubmit}>
                  {/* Donation Type */}
                  <div className="form-section">
                    <h3>Donation Type</h3>
                    <div className="donation-type-buttons">
                      <button
                        type="button"
                        className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                        onClick={() => setDonationType('one-time')}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                        onClick={() => setDonationType('monthly')}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="form-section">
                    <h3>Select Amount</h3>
                    <div className="amount-buttons">
                      {presetAmounts.map(preset => (
                        <button
                          key={preset}
                          type="button"
                          className={`amount-btn ${amount === preset.toString() ? 'active' : ''}`}
                          onClick={() => handleAmountChange(preset.toString())}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                    <div className="custom-amount">
                      <label htmlFor="customAmount">Or Enter Custom Amount</label>
                      <div className="custom-amount-input">
                        <span className="currency">$</span>
                        <input
                          type="number"
                          id="customAmount"
                          name="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="0.00"
                          min="1"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="form-section">
                    <h3>Donor Information</h3>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows="4"
                        placeholder="Add a personal message or dedication..."
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-donate">
                    {donationType === 'monthly' ? 'Set Up Monthly Donation' : 'Donate Now'}
                  </button>
                  <p className="donation-note">
                    * All donations are tax-deductible. You will receive a receipt for your donation.
                  </p>
                </form>
              )}
            </div>

            {/* Donation Areas */}
            <div className="donation-areas-container">
              <h2 className="section-title">Donation Areas</h2>
              <p className="areas-description">
                You can specify how you'd like your donation to be used. If not specified, 
                your donation will go to our general fund.
              </p>
              <div className="donation-areas">
                {donationAreas.map((area, index) => (
                  <div key={index} className="donation-area-card">
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section other-ways-section">
        <div className="container">
          <h2 className="section-title">Other Ways to Give</h2>
          <div className="other-ways">
            <div className="way-card">
              <h3>Mail a Check</h3>
              <p>
                Send a check payable to "ශ්‍රී ධර්මාකර විහාරය (Sri Dharmakara Viharaya)" to:<br />
                123 Temple Street<br />
                City, State 12345
              </p>
            </div>
            <div className="way-card">
              <h3>In-Person</h3>
              <p>
                You can make donations in person during temple hours. Visit us during our 
                regular office hours or during special events.
              </p>
            </div>
            <div className="way-card">
              <h3>Planned Giving</h3>
              <p>
                Interested in planned giving or large donations? Please contact us to discuss 
                options and arrange your contribution.
              </p>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

