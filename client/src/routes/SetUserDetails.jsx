import React, { useState, useContext } from "react";
import { UserContext } from "../context/userDetails";
import { useNavigate } from "react-router-dom";

export default function SetUserDetails() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { setUsername } = useContext(UserContext);

  const handleSetName = () => {
    setUsername(name);
    navigate("/user");
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleSetName}>Set User Name</button>
    </>
  );
}
