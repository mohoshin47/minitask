import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";
import { GlobalConfigProvider } from "./contexts/GlobalConfigContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <GlobalConfigProvider>
      <App />
        </GlobalConfigProvider>
       <Toaster position="top-center" reverseOrder={false} />
    </UserProvider>
  </StrictMode>,
)
