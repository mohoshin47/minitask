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

        // console.log("Mounted:", initData.isMounted());
console.log("Raw:", initData.raw());
console.log("State:", initData.state());
console.log("StUserate:", initData.user());
alert("Raw: "+ initData.raw()+ "State "+initData.state()+" User "+initData.user())

        let telegramId = 6249158607;
        try {
          const telegramUser = initData.user();

          if (telegramUser) {
            telegramId = telegramUser.id;
            alert('tg: ' + telegramId);
          }
        } catch (e) {
          console.log('Browser mode');
          alert('browser mode');
        }

        alert(telegramId);

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
