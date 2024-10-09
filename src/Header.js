import React from 'react';

function Header({ data }) {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <h1>{data.name}</h1>
          <p>{data.title}</p>
        </div>
        <div className="header-right">
          <div className="contact-item">
            <span className="label">Email:</span> 
            <a href={`mailto:${data.email}`} className="contact-link">{data.email}</a>
          </div>
          <div className="contact-item">
            <span className="label">Web:</span> 
            <span className="contact-text">{data.web}</span>
          </div>
          <div className="contact-item">
            <span className="label">Mobile:</span> 
            <span className="contact-text">{data.mobile}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
