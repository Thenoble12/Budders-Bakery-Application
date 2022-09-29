import { useState, createContext, useMemo } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState("");

  const value = useMemo(() => ({ username, setUsername }), [username]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
