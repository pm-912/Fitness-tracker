import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 SWEATify. All rights reserved.</p>
      <div style={styles.linksContainer}>
        <a href="https://github.com/pm-912" target="_blank" style={styles.link}>Peter Martin</a>
        <a href="https://github.com/shinhy" target="_blank" style={styles.link}>Hye-Ji Shin</a>
        <a href="https://github.com/johri" target="_blank" style={styles.link}>Johria Mehboob</a>
        <a href="https://github.com/Bilalk789" target="_blank" style={styles.link}>Bilal Khan</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px', 
  },
  link: {
    margin: '0 10px', 
    textDecoration: 'none',
    color: '#333',
  },
};

export default Footer;
