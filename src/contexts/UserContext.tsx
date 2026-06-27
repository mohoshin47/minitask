import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/userService";

interface UserContextType {
  user: any;
  setUser: React.Dispatch<
    React.SetStateAction<any>
  >;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});


export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUser(6249158607); // telegram id
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () =>
  useContext(UserContext);