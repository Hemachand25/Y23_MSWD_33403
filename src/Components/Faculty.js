import React from 'react';
import './Faculty.css';

const Faculty = () => {
  return (
    <div>
      <h3>Faculty Details</h3>
      <div className="student-cards-container">
        <div className="student-card">
          <div className="card-body">
            <h4 className="card-title">Lasya</h4>
            <p className="card-text">ID: 1224</p>
            <p className="card-text">Dept: CSE-H</p>
            <p className="card-text">Designation: Professor</p>
          </div>
        </div>
        <div className="student-card">
          <div className="card-body">
            <h4 className="card-title">Dr. Murali Mohan</h4>
            <p className="card-text">ID: 3340</p>
            <p className="card-text">Dept: IOT</p>
            <p className="card-text">Designation: Professor</p>
          </div>
        </div>
        <div className="student-card">
          <div className="card-body">
            <h4 className="card-title">Dr. Priya</h4>
            <p className="card-text">ID: 3318</p>
            <p className="card-text">Dept: ECE</p>
            <p className="card-text">Designation: Professor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;