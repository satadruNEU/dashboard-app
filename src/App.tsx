import { useState } from 'react';
import Layout from './components/Layout';
import Login from './components/Login';
import CampaignPerformance from './components/CampaignPerformance';
import TopInfluencers from './components/TopInfluencers';
import AIActionCenter from './components/AIActionCenter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout onLogout={handleLogout}>
      <div className="space-y-8">
        <CampaignPerformance />
        <TopInfluencers />
        <AIActionCenter />
      </div>
    </Layout>
  );
}

export default App;
