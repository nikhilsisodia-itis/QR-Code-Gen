import React, { useEffect, useState } from 'react';

const LinktreePage = () => {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('My Links');

  useEffect(() => {
    // Get links from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const linksParam = urlParams.get('links');
    const titleParam = urlParams.get('title');
    
    if (linksParam) {
      try {
        const decodedLinks = JSON.parse(decodeURIComponent(linksParam));
        setLinks(decodedLinks);
      } catch (error) {
        console.error('Error parsing links:', error);
      }
    }
    
    if (titleParam) {
      setTitle(decodeURIComponent(titleParam));
    }
  }, []);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const getDisplayText = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url.length > 30 ? url.substring(0, 30) + '...' : url;
    }
  };

  const handleLinkClick = (url) => {
    // Add protocol if missing
    let fullUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
      fullUrl = 'https://' + url;
    }
    
    try {
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening link:', error);
      // Fallback: try to navigate to the original URL
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px'
        }}>
          🔗
        </div>
        
        <h1 style={{
          margin: '0 0 10px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#333'
        }}>
          {title}
        </h1>
        
        <p style={{
          margin: '0 0 30px 0',
          color: '#666',
          fontSize: '14px'
        }}>
          Click on any link below to visit
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link)}
              style={{
                background: '#f8f9fa',
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                padding: '16px 20px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#333',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'block',
                width: '100%',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#e9ecef';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f8f9fa';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{ marginBottom: '4px', fontWeight: '600' }}>
                {getDisplayText(link)}
              </div>
              <div style={{ fontSize: '12px', color: '#666', opacity: 0.8 }}>
                {link.length > 40 ? link.substring(0, 40) + '...' : link}
              </div>
            </button>
          ))}
        </div>

        {links.length === 0 && (
          <div style={{
            padding: '40px 20px',
            color: '#666',
            fontSize: '16px'
          }}>
            No links found. Please check the QR code.
          </div>
        )}

        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '10px',
          fontSize: '12px',
          color: '#666'
        }}>
          💡 This page was generated from a QR code
        </div>
      </div>
    </div>
  );
};

export default LinktreePage;
