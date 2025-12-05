// components/BookingButtonWithModal.js (Updated Modal Component)
import React, { useState } from 'react';

// IMPORTANT: Replace this with your actual Google Calendar embed URL
const CALENDAR_EMBED_SRC = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vZwLPFQsK2P2pLEQUZQ8bdR_z3acsnrCFyFw0ZF3XAYeTDxXuB-dwp5lUs5i3k9CbNd7Y6oXn?gv=true";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // --- Styles for Responsive Design ---
  
  // 1. Backdrop: Ensures full screen coverage
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker background for focus
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '10px', // Small padding for very narrow screens
  };

  // 2. Modal Content: Key for responsiveness
  const contentStyle = {
    backgroundColor: 'white',
    padding: '10px', // Reduced padding on mobile
    borderRadius: '8px',
    width: '100%', // Takes full width on mobile
    maxWidth: '800px', 
    maxHeight: '100%', // Occupies most of the vertical space
    height: '90vh', // Sets height relative to viewport height
    overflowY: 'auto', 
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  // 3. Iframe: Ensures it fills the modal space
  const iframeStyle = {
    border: 0,
    width: '100%',
    // Adjust height dynamically or use 100% and manage parent height
    height: 'calc(100% - 40px)', // Takes 100% of parent height minus space for the heading/close button
    minHeight: '400px', // Minimum height for usability
    display: 'block',
  };

  // --- Render ---
  return (
    <div style={backdropStyle} onClick={onClose}>
      <div 
        style={contentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            background: 'none', 
            border: 'none', 
            fontSize: '24px', 
            cursor: 'pointer',
            padding: '5px',
          }}
          aria-label="Close Appointment Booking"
        >
          &times;
        </button>
        
        <h2 style={{marginTop: '0', fontSize: '1.2rem', paddingBottom: '10px'}}>Book an Appointment</h2>
        
        {/* Iframe for the Google Calendar Schedule */}
        <iframe
          src={CALENDAR_EMBED_SRC}
          style={iframeStyle}
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
        ></iframe>
      </div>
    </div>
  );
};

// (BookingButtonWithModal component is the same as before, just uses the updated Modal)
export const BookingButtonWithModal = ({ 
    label = 'Book an Appointment', 
    className = '', 
    ...rest 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        onClick={handleOpenModal} 
        className={className}
        {...rest}
      >
        {label}
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};