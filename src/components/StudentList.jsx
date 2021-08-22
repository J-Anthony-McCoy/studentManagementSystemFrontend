import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const StudentList = () => {
  return (
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
  );
};

export default StudentList;
