import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  // Web3Forms logic
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    const formData = new FormData(event.target);

    // IMPORTANT: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "5e9ae97f-71b5-4028-96ab-eae779b9f6ea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus('success');
        event.target.reset();
        setTimeout(() => setStatus('idle'), 5000); // Return to form after 5s
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, 
            or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Kozhikode, Kerala (Open to Remote)</span>
          </div>
        </div>

        <div className="glass-panel" style={{ overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4rem 2rem',
                  minHeight: '420px',
                  textAlign: 'center'
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(100, 255, 218, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64ffda',
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(100, 255, 218, 0.3)'
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </motion.div>
                <h3 style={{ color: '#ffffff', fontSize: '1.8rem', margin: '0 0 10px 0' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Sreeraj V R" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="sreerajvr10@gmail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Hello, I'd like to discuss..."></textarea>
                </div>
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <button 
                  type="submit" 
                  className="btn-primary submit-btn" 
                  disabled={status === 'submitting'}
                  style={{ opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'submitting' ? (
                    <>Sending <i className="fa-solid fa-circle-notch fa-spin"></i></>
                  ) : status === 'error' ? (
                    <>Error: Try Again <i className="fa-solid fa-circle-exclamation"></i></>
                  ) : (
                    <>Send Message <i className="fa-regular fa-paper-plane"></i></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
      <footer className="footer">
        <p>Built with React & Vite. Styled from scratch.</p>
        <p>&copy; {new Date().getFullYear()} Sreeraj V R. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
