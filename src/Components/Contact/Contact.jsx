import React, { useState } from 'react'
import './Contact.css'
import contactImg from '../Asset/portimg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Update any field by its name
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  // Social links — edit href values with your real links
  const socials = [
    { label: 'GitHub',   icon: '🐙', href: 'https://github.com' },
    { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { label: 'Twitter',  icon: '🐦', href: 'https://twitter.com' },
    { label: 'Email',    icon: '✉️', href: 'mailto:karan@example.com' },
  ];

  return (
    <div id='contact' className='contact'>
      <div className="contact_container">

        {/* ── Left Side — Image + Info ── */}
        <div className="contact_left">
          <img src={contactImg} alt="Contact Karan" className="contact_img" />

          {/* Quick info cards below the image */}
          <div className="contact_info">
            <div className="info_card">
              <span className="info_icon">📍</span>
              <div>
                <p className="info_label">Location</p>
                <p className="info_value">Gurugram, India</p>
              </div>
            </div>
            <div className="info_card">
              <span className="info_icon">✉️</span>
              <div>
                <p className="info_label">Email</p>
                <p className="info_value">sahkaran778380@example.com</p>
              </div>
            </div>
            <div className="info_card">
              <span className="info_icon">⚡</span>
              <div>
                <p className="info_label">Status</p>
                <p className="info_value available">Available for work</p>
              </div>
            </div>
          </div>

          {/* Social icons row */}
          <div className="contact_socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="social_btn" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right Side — Form ── */}
        <div className="contact_right">
          <p className="contact_eyebrow">Get in touch</p>
          <h1 className="contact_title">Contact <span>Me</span></h1>
          <p className="contact_subtitle">
            Have a project in mind or want to collaborate? Fill out the form
            and I'll get back to you within 24 hours.
          </p>

          {/* Success message shown after submit */}
          {submitted && (
            <div className="success_msg">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}

          <form className="contact_form" onSubmit={handleSubmit}>
            {/* Row: Name + Email side by side */}
            <div className="form_row">
              <div className="form_group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Karan Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="karan@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="form_group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text"
                placeholder="Project Inquiry / Collaboration"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message textarea */}
            <div className="form_group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5"
                placeholder="Hi Karan, I'd like to work with you on..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit_btn">
              Send Message <span className="btn_arrow">→</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;