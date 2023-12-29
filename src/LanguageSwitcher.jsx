import  { useState } from 'react';

const LanguageSwitcher = () => {
  // State to track the current language
  const [currentLanguage, setCurrentLanguage] = useState('english');

  // Function to toggle the language
  const toggleLanguage = () => {
    // Update the language based on the current value
    const newLanguage = currentLanguage === 'english' ? 'bangla' : 'english';
    setCurrentLanguage(newLanguage);
  };

  return (
    <div>
      {/* Display content based on the current language */}
      {currentLanguage === 'english' ? (
        <p>This is English content.</p>
      ) : (
        <p>এটি বাংলা কনটেন্ট।</p>
      )}

      {/* Button to toggle language */}
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
};

export default LanguageSwitcher;
