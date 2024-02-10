import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome To Home Page</h2>
      <Link to={'/'}>Go to SignUp page</Link><br/>
    </div>
  );
};

export default Home;
