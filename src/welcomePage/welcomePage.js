import React from 'react';
import Logout from '../logout/logout';
import './welcomePage.css';

function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="header-container">
        <h1>Bienvenido</h1>
        <div className="logout-container">
          <Logout />
        </div>
      </div>
      <div className="iframe-container">
        <iframe 
          title="DANE REPORTE" 
          src="https://app.powerbi.com/view?r=eyJrIjoiYjVjNDFiYTgtMTc3YS00OGE1LTlhYWEtNGQzMzczNzcyYjljIiwidCI6IjAwNTRhYWU4LWU0YTUtNDRlYy1iZDg5LWJlNDkyYmU5NGU1NyIsImMiOjR9" 
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default WelcomePage;
