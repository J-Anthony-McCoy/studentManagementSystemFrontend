import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

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
          <span className="p3">First Name</span>
          <span className="p4">Last Name</span>
          <span className="p5">Grade</span>
        </h3>
        {students.map((s) => (
          <p key={s.id}>
            <span className="p1">{s.firstName}</span>
            <span>{s.lastName}</span>
            <span className="p2">{s.grade}</span>
          </p>
        ))}
      </div>
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex">
          <div className="m1-auto">
            <Link className="btn btn-warning mr-5" to="update/1">
              Update
            </Link>
            <Button color="danger">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
      <button onClick={getStudents}>Get Students</button>
    </div>
  );
};

export default StudentList;
