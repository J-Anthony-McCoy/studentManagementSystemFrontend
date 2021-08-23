import React, { useEffect, useState } from "react";
import axios from "axios";
import ListOfStudents from "./ListOfStudents";
import SearchBar from "./SearchBar";

export const SearchPage = () => {
  const [valueInput, setValueInput] = useState("");
  const [defaultList, setDefaultList] = useState();
  const [studentList, setStudentList] = useState();

  const fetchData = async () => {
    return await axios.get("http://localhost:8080/students").then((res) => {
      console.log("API data", res.data.firstName);
      setStudentList(res.data.firstName);
      setDefaultList(res.data.firstName);
    });
  };

  const updateInput = async (input) => {
    const filtered = defaultList.filter((student) => {
      return student.firstName.toLowerCase().includes(input.toLowerCase());
    });
    setValueInput(input);
    setStudentList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Student Search</h2>
      <SearchBar keyWord={valueInput} setKeyWord={updateInput} />
      <ListOfStudents studentList={studentList} />
    </>
  );
};

export default SearchPage;
