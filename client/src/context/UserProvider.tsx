import { createContext, useState, useEffect } from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

interface UserContextInterface {
  user: User;
  setUser: (obj: Object) => void;
}

type User = {
  username?: string;
  id?: number;
};

const defaultState = { user: {}, setUser: () => {} };

export const UserContext = createContext<UserContextInterface>(defaultState);

const UserProvider = ({ children }: Props) => {
  useEffect(() => {
    axios
      .get("/api/logged_in")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((error) => console.log(error));
  }, []);
  const [user, setLoggedInUser] = useState({});

  const setUser = (user: User): void => {
    setLoggedInUser(user);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
