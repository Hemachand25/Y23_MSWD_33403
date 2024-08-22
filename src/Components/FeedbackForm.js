import React, { useState } from 'react';

const FeedbackForm = () => {
  const [courseName, setCourseName] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      courseName,
      facultyName,
      communicationSkills,
      remarks,
    };

    setSubmissions([...submissions, newSubmission]);

    // Clear the form fields
    setCourseName('');
    setFacultyName('');
    setCommunicationSkills('');
    setRemarks('');
  };

  return (
    <div>
<style>
  {`
    table {
      width: 60%; /* Reduced width of the table */
      border-collapse: collapse;
      margin: 20px auto;
    }

    table td, table th {
      padding: 8px; /* Reduced padding */
      text-align: center;
      border: 1px solid #ddd;
      font-size: 0.9em; /* Slightly smaller font size */
    }

    table th {
      background-color: #008080; /* Teal background for header */
      color: white; /* White text for header */
    }

    table tr:nth-child(even) {
      background-color: #f2f2f2; /* Light gray background for even rows */
    }

    table tr:hover {
      background-color: #e0e0e0; /* Slightly darker gray for hover effect */
    }

    button {
      padding: 8px 16px; /* Reduced padding for button */
      background-color: #008080; /* Teal background for button */
      color: white; /* White text for button */
      border: none;
      cursor: pointer;
      border-radius: 4px; /* Smaller border-radius */
      font-size: 0.9em; /* Slightly smaller font size */
    }

    button:hover {
      background-color: #005757; /* Darker teal for button hover */
    }

    form {
      margin: 20px auto;
      max-width: 500px; /* Reduced max-width */
    }

    input[type="text"] {
      width: 100%;
      padding: 6px; /* Reduced padding */
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 0.9em; /* Slightly smaller font size */
    }

    input[type="radio"] {
      margin-right: 5px;
    }
  `}
</style>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="courseName">Course</label></td>
              <td><input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Enter Course" /></td>
            </tr>
            <tr>
              <td><label htmlFor="facultyName">Faculty</label></td>
              <td><input type="text" id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} placeholder="Enter Faculty Name" /></td>
            </tr>
            <tr>
              <td>Rate communication skills</td>
              <td>
                <label>
                  <input type="radio" name="recommend" value="Very Good" checked={communicationSkills === 'Very Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Very Good
                </label>
                <label>
                  <input type="radio" name="recommend" value="Good" checked={communicationSkills === 'Good'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Good
                </label>
                <label>
                  <input type="radio" name="recommend" value="Bad" checked={communicationSkills === 'Bad'} onChange={(e) => setCommunicationSkills(e.target.value)} /> Bad
                </label>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="remarks">Remarks:</label></td>
              <td><input type="text" id="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter any remarks" /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Display the submissions */}
      {submissions.length > 0 && (
        <div>
          <h2>SUBMISSIONS</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Faculty</th>
                <th>Communication Skills</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.courseName}</td>
                  <td>{submission.facultyName}</td>
                  <td>{submission.communicationSkills}</td>
                  <td>{submission.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
