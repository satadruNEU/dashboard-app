import Layout from './components/Layout';
import CampaignPerformance from './components/CampaignPerformance';
import TopInfluencers from './components/TopInfluencers';
import AIActionCenter from './components/AIActionCenter';

function App() {
  return (
    <Layout>
      <CampaignPerformance />
      <TopInfluencers />
      <AIActionCenter />
    </Layout>
  );
}

export default App;
