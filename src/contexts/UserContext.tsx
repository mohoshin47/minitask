import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../services/userService';

interface UserContextType {
  user: any;
  loading: boolean;
  loadUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  loadUser: async () => {},
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      let telegramId = 6249158607;

      const tg = window.Telegram?.WebApp;

      if (tg?.initDataUnsafe?.user) {
        telegramId = tg.initDataUnsafe.user.id;
      }

      const data = await getUser(telegramId);

      setUser(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loadUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
