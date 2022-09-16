import React from 'react';
import './Text.css';
function Text({ textType = 'large', style, children }) {
  return (
    <section className={`${textType}`} style={style}>
      {children}
    </section>
  );
}

export default Text;
