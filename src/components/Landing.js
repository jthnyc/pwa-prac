import React, {useState} from "react";

const Landing = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Enter Password: </h1>
      <form onSubt={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Landing;
