import React from "react";
import { Header } from "../components/Header";
import { StudentList } from "../components/StudentList";

export const Home = () => {
  return (
    <div>
      <Header />
      <StudentList />
    </div>
  );
};

export default Home;
