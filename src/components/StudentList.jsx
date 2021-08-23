import React, { useState } from "react";
import axios from "axios";

export const StudentList = () => {
  const [students, setStudents] = useState([]);

  const getStudents = () => {
    axios.get("http://localhost:8080/students").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  return (
    <div>
      <div>
        <h1>All Students</h1>
        <h3>
          <span className="p3">ID</span>
          <span className="p3">First Name</span>
          <span className="p4">Last Name</span>
          <span className="p5">Grade</span>
        </h3>
        {students.map((s) => (
          <p key={s.id}>
            <span className="p1">{s.id}</span>
            <span className="p1">{s.firstName}</span>
            <span>{s.lastName}</span>
            <span className="p2">{s.grade}</span>
          </p>
        ))}
      </div>
      <button onClick={getStudents}>Get Students</button>
    </div>
  );
};

export default StudentList;
