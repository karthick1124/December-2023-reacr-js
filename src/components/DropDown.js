import React, { useState } from 'react';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Customize messages based on selected option
    switch (selectedValue) {
      case 'option1':
        setMessage('You selected Option 1!');
        break;
      case 'option2':
        setMessage('Option 2 is your choice!');
        break;
      case 'option3':
        setMessage('Option 3 is the chosen one!');
        break;
      default:
        setMessage('');
    }
  };

  return (
    <div>
      <h2>Dropdown Form</h2>
      <form>
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DropdownForm;
