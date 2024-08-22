import React, { useState } from 'react';
import './Schedule.css'; // Import the CSS file for styling

const Schedule = () => {
  const [inputValue, setInputValue] = useState('');

  const [data, setData] = useState([
    { Day: 'Monday', Hours: '1-2', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Tuesday', Hours: '5-6', Course: 'AOOP', Room: 'C117', LTPS: 'S' },
    { Day: 'Wednesday', Hours: '3-4', Course: 'Linux', Room: 'C524', LTPS: 'L' },
    { Day: 'Thursday', Hours: '7-8', Course: 'AIML', Room: 'M108', LTPS: 'T' },
    { Day: 'Friday', Hours: '10-11', Course: 'SIL', Room: 'SAC', LTPS: 'S' },
    { Day: 'Saturday', Hours: '1-2', Course: 'DAA', Room: 'C011', LTPS: 'L' },
  ]);

  const filteredData = inputValue.trim() === ''
    ? data
    : data.filter(item => item.Day.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div className="schedule-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Type a day to filter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="day-input"
        />
      </div>
      <div className="cards-container">
        {filteredData.map(filteredItem => (
          <div key={`${filteredItem.Day}-${filteredItem.Hours}`} className="card">
            <h3>{filteredItem.Course}</h3>
            <p><strong>Day:</strong> {filteredItem.Day}</p>
            <p><strong>Hours:</strong> {filteredItem.Hours}</p>
            <p><strong>Room:</strong> {filteredItem.Room}</p>
            <p><strong>LTPS:</strong> {filteredItem.LTPS}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
