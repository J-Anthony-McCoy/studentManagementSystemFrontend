import React from "react";

function ListOfStudents({ studentList = [] }) {
  return (
    <div>
      {studentList.map((data) => {
        if (data) {
          console.log(data.firstName);
          return (
            <div>
              <h1>{data.firstName}</h1>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ListOfStudents;
