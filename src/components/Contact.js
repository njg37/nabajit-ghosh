import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section className="contact" data-aos="fade-up">
    <h2>Contact Me</h2>

    {/* Interactive Contact Form */}
    <div className="contact-form">
      <form action="https://formspree.io/f/xdkowbjq" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          aria-label="Your full name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          aria-label="Your email address"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          aria-label="Your message"
        ></textarea>
        <button
          type="submit"
          className="send-button"
          aria-label="Send your message"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Options */}
    <div className="contact-list">
      <div className="contact-card">
        <a href="mailto:nabajitghosh225@gmail.com">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>nabajitghosh225@gmail.com</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="tel:+918837337805">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 8837337805</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://linkedin.com/in/nabajit-ghosh" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/nabajit-ghosh</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://github.com/njg37" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <p>github.com/njg37</p>
        </a>
      </div>
    </div>

    {/* Map */}
<div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610038.2376575996!2d85.72333497713865!3d22.986787792658098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8995f0c000001%3A0x1b0e47423189e1be!2sWest%20Bengal!5e0!3m2!1sen!2sin!4v1637170255408!5m2!1sen!2sin"
    title="Location"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

  </section>
);

export default Contact;
