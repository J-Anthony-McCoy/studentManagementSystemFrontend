// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ListGroup, ListGroupItem, Button } from "reactstrap";

// export const DeleteStudent = () => {
//   const [id, setId] = useState(0);
//   const updStudent = (id) => {
//     console.log(id);
//   };
//   return (
//     <div>
//       <ListGroup>
//         <ListGroupItem>
//           <div>
//             <Link className="btn btn-warning" onClick={() => updStudent(setId)}>
//               Update
//             </Link>
//             <Button color="danger">Delete</Button>
//           </div>
//         </ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// };

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const DeleteStudent = () => {
  const [id, setId] = useState(0);

  const delStudent = (e) => {
    e.preventDefault();
    console.log(id);
    axios.delete("http://localhost:8080/delete/" + id).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Delete Student</h1>
      <br></br>
      <Form>
        <FormGroup>
          <Label>Enter Student ID to Delete</Label>
          <Input
            type="number"
            onChange={(e) => setId(e.target.value)}
            placeholder="Student ID"
          ></Input>
        </FormGroup>
        <Button type="submit" onClick={delStudent}>
          Delete
        </Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default DeleteStudent;
