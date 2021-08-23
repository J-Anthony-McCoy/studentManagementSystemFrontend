import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const StudentList = () => {
  const [printStudents, setPrintStudents] = useState([]);

  const getStudents = () => {
    axios.get("http://localhost:8080/students").then((response) => {
      console.log(response);
      setPrintStudents(response.data.map);
    });
  };

  return (
    <div>
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex">
          <p>Student One</p>
          <div className="m1-auto">
            <Link className="btn btn-warning mr-5" to="update/1">
              Update
            </Link>
            <Button color="danger">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
      <button onClick={getStudents}>Get Students</button>
      {printStudents}
    </div>
  );
};

export default StudentList;
