import React from 'react'
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Tejindra. All rights reserved.</p>
    </footer>
  )
}

export default Footer
