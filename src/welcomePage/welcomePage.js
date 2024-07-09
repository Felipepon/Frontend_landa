import React from 'react';
import Logout from '../logout/logout';

function WelcomePage() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Logout />
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <iframe 
          title="DANE REPORTE" 
          style={{ width: '80%', height: '500px', border: 'none' }}
          src="https://app.powerbi.com/view?r=eyJrIjoiYjVjNDFiYTgtMTc3YS00OGE1LTlhYWEtNGQzMzczNzcyYjljIiwidCI6IjAwNTRhYWU4LWU0YTUtNDRlYy1iZDg5LWJlNDkyYmU5NGU1NyIsImMiOjR9" 
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default WelcomePage;
