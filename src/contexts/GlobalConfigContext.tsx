import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getGlobalConfig } from "../services/userService";

const GlobalConfigContext =
  createContext<any>(null);

export const GlobalConfigProvider = ({
  children,
}: any) => {
  const [config, setConfig] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadConfig =
      async () => {
        try {
          const data =
            await getGlobalConfig();

          setConfig(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

    loadConfig();
  }, []);

  return (
    <GlobalConfigContext.Provider
      value={{
        config,
        loading,
      }}
    >
      {children}
    </GlobalConfigContext.Provider>
  );
};

export const useGlobalConfig =
  () =>
    useContext(
      GlobalConfigContext
    );