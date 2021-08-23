// import React from "react";
// import { Link } from "react-router-dom";

// import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// export const UpdateStudent = () => {
//   return (
//     <div>
//       <h1>Update Student Information</h1>
//       <br></br>
//       <Form>
//         <FormGroup>
//           <Label>First Name</Label>
//           <Input type="text" placeholder="Enter Student First Name"></Input>
//         </FormGroup>
//         <Button type="submit">Submit</Button>
//         <Link to="/" className="btn btn-danger">
//           Cancel
//         </Link>
//       </Form>
//     </div>
//   );
// };

// export default UpdateStudent;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const UpdateStudent = () => {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");

  const updStudent = (e) => {
    e.preventDefault();
    console.log(id);
    const update = {
      firstName,
      lastName,
      grade,
    };
    axios.put("http://localhost:8080/update/" + id, update).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Update Student</h1>
      <br></br>
      <Form>
        <FormGroup>
          <Label>Enter Student ID to Update</Label>
          <Input
            type="number"
            onChange={(e) => setId(e.target.value)}
            placeholder="Student ID"
          ></Input>
        </FormGroup>
        {/* <Button type="submit" onClick={updStudent}>
          Update
        </Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link> */}
      </Form>
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
        <Button type="submit" onClick={updStudent}>
          Submit
        </Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default UpdateStudent;
