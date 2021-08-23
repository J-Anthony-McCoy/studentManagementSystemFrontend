import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");

  const addStudent = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(grade);
    const postStudent = {
      firstName,
      lastName,
      grade,
    };
    axios.post("http://localhost:8080/save", postStudent).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Create a New Student</h1>
      <br></br>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Student First Name"
          ></Input>
          <Label>Last Name</Label>
          <Input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Student Last Name"
          ></Input>
          <Label>Grade</Label>
          <Input
            type="text"
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Student Grade"
          ></Input>
        </FormGroup>
        <Button type="submit" onClick={addStudent}>
          Submit
        </Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default CreateStudent;
