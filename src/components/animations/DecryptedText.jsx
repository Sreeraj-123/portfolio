import React, { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText = ({ text, speed = 40, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;

    const startDecrypt = () => {
      setIsDecrypting(true);
      let iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText((prev) => 
          text.split('').map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypting(false);
        }

        iteration += 1 / 3; 
      }, speed);
    };

    if (delay > 0) {
      timeout = setTimeout(startDecrypt, delay);
    } else {
      startDecrypt();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default DecryptedText;
