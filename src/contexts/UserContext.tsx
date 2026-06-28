import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../services/userService';
import { initData } from '@telegram-apps/sdk';

interface UserContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        let telegramId = 0;
        const telegramUser = initData.user();
        if (telegramUser) {
          telegramId = telegramUser.id;
          alert("1: "+telegramId);
        } else {
          telegramId = 6249158607;
            alert("2: "+telegramId);
        }

        const data = await getUser(telegramId); // telegram id
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
