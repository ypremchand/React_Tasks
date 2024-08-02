// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial employee data
  const [employees, setEmployees] = useState([
    { name: 'John Doe', age: 28, salary: 50000, designation: 'Software Engineer' },
    { name: 'Jane Smith', age: 34, salary: 60000, designation: 'Project Manager' },
    { name: 'Jim Brown', age: 45, salary: 70000, designation: 'UX Designer' },
    { name: 'Jill White', age: 29, salary: 55000, designation: 'Front-End Developer' }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Data</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>${employee.salary.toLocaleString()}</td>
                <td>{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;


