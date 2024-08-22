import React from 'react';
import StudentCard from './StudentCard';
// Import AttendanceButton if you plan to use it later
// import AttendanceButton from './AttendanceButton';

const students = [
  { id: '2300033403', name: 'P.Hemachand', branch: 'CSE', year: '2nd' },
  { id: '2300002060', name: 'G.Priya', branch: 'ECE', year: '2nd' },
  { id: '2300033777', name: 'P.Dhawan', branch: 'CSIT', year: '2nd' },
  { id: '2300096961', name: 'G.Preethi', branch: 'CSE', year: '2nd' }, // Changed ID
  { id: '2300096962', name: 'G.Prabhas', branch: 'CSE', year: '2nd' }, // Changed ID
];

const Student= () => {
  return (
    <div>
      <h3>Student Details</h3>
      <div className="student-cards-container">
        {students.map(student => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            branch={student.branch}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Student;