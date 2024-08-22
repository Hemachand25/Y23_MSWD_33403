import React from 'react'

const Courses = () => {
  return (
    <div>
        <h3>Course Details</h3>
        <table border="1px" width="80%" align="center">
        <thead>
            <tr>
                <th>Course Code</th>
                <th>Name</th>
                <th>LTPS</th>
                <th>Credits</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>23UC2205</td>
                <td>DDCA</td>
                <td>3-0-2-3</td>
                <td>4</td>
            </tr>
            <tr>
                <td>23UC1206</td>
                <td>DDA</td>
                <td>0-0-2-3</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Courses