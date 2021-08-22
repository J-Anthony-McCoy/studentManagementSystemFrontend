import React from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const UpdateStudent = () => {
  return (
    <div>
      <h1>Update Student Information</h1>
      <br></br>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" placeholder="Enter Student First Name"></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default UpdateStudent;
