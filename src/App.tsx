import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import Earn from './pages/Earn';
import Create from './pages/Create';
import Referral from './pages/Referral';
import Withdraw from './pages/Withdraw';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('earn');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleVisible = () => {
      if (document.visibilityState === 'visible') {
        console.log('App Resume');

        setRefreshKey((prev) => prev + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisible);

    return () => {
      document.removeEventListener('visibilitychange', handleVisible);
    };
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case 'earn':
        return <Earn />;
      case 'create':
        return <Create />;
      case 'referral':
        return <Referral />;
      case 'withdraw':
        return <Withdraw />;
      case 'profile':
        return <Profile />;
      default:
        return <Earn />;
    }
  };

  return (
    <div className="bg-[#050B17] min-h-screen text-white">
      <Toaster position="top-center" />
      {renderPage()}

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
