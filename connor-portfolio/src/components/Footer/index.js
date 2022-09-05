import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        <div>
        &copy;{new Date().getFullYear()} Connor Allen
        </div>
        <button type="link">
        <a href="https://github.com/coneboybebop" target ="_blank">GitHub</a>
        </button>
        <button type="link">
        <a href="https://www.linkedin.com/in/connor-allen-93754324a" target="_blank">LinkedIn</a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;