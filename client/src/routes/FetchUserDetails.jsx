import React, { useContext } from "react";
import { UserContext } from "../context/userDetails";

export default function FetchUserDetails() {
  const { username } = useContext(UserContext);
  return <>{username ? `Welcome ${username}` : "Welcome, ________"}</>;
}
