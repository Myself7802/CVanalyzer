import React, { useState } from 'react';

function Home() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a PDF file');
      setPdfFile(null);
    }
  };

  return (
    <div className="home" style={{ 
      display: 'flex', 
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="content" style={{ 
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          marginBottom: '20px',
          lineHeight: 1.2
        }}>CV Parser Clone</h1>
        <p style={{ marginBottom: '20px' }}>
          Accurately parse. Affordably priced. Easy to integrate.
        </p>
        <div className="features" style={{ marginBottom: '20px' }}>
          <p>Radically accurate.</p>
          <p>Radically cheap.</p>
          <p>Radically easy to integrate.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange} 
            style={{ marginBottom: '10px' }} 
          />
          <span>{pdfFile ? 'File chosen' : 'No file chosen'}</span>
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '20px',
            cursor: 'pointer'
          }}>Try it</button>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#2196F3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '20px',
            cursor: 'pointer'
          }}>Sign up to get free trial</button>
        </div>
        <p>No credit card required.</p>
      </div>
      <div className="pdf-preview" style={{ 
        flex: 1,
        padding: '20px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{ marginBottom: '20px' }}>PDF Preview</h2>
        {pdfFile ? (
          <iframe
            src={pdfFile}
            style={{ width: '100%', flexGrow: 1, border: 'none' }}
            title="PDF Preview"
          />
        ) : (
          <p>Upload a PDF to see the preview here.</p>
        )}
      </div>
    </div>
  );
}

export default Home;