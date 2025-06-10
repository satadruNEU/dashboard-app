import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, TrendingUp, Brain, X, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Alert {
  id: string;
  type: 'warning' | 'suggestion' | 'insight';
  title: string;
  message: string;
  icon: React.ElementType;
  color: 'yellow' | 'green' | 'purple';
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Pending Posts',
    message: "3 creators haven't posted yet — Pulse will auto-remind",
    icon: AlertCircle,
    color: 'yellow',
  },
  {
    id: '2',
    type: 'suggestion',
    title: 'Engagement Opportunity',
    message: 'Your latest post is trending. Consider boosting it.',
    icon: TrendingUp,
    color: 'green',
  },
  {
    id: '3',
    type: 'insight',
    title: 'Campaign Relaunch',
    message: "Would you like to relaunch 'Sound Mirage' with top-performing influencers from last month?",
    icon: Brain,
    color: 'purple',
  },
];

function DetailsModal({ isOpen, onClose, alert, onAction }: { 
  isOpen: boolean; 
  onClose: () => void; 
  alert: Alert;
  onAction: (approved: boolean) => void;
}) {
  if (!isOpen) return null;

  const Icon = alert.icon;
  const colorClasses = {
    yellow: 'text-yellow-500 bg-opacity-10 bg-yellow-500',
    green: 'text-green-500 bg-opacity-10 bg-green-500',
    purple: 'text-purple-500 bg-opacity-10 bg-purple-500',
  };

  const getActionDetails = (type: string) => {
    switch (type) {
      case 'warning':
        return {
          title: "Pulse AI Action",
          description: "Would you like Pulse AI to automatically send reminders to the 3 creators who haven't posted yet?",
          action: "Send Automated Reminders"
        };
      case 'suggestion':
        return {
          title: "Pulse AI Action",
          description: "Would you like Pulse AI to boost your trending post with an optimized budget allocation?",
          action: "Boost Post"
        };
      case 'insight':
        return {
          title: "Pulse AI Action",
          description: "Would you like Pulse AI to relaunch 'Sound Mirage' with the identified top-performing influencers?",
          action: "Relaunch Campaign"
        };
      default:
        return {
          title: "Pulse AI Action",
          description: "Would you like Pulse AI to proceed with the recommended action?",
          action: "Proceed"
        };
    }
  };

  const actionDetails = getActionDetails(alert.type);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#141415] border border-opacity-10 border-white rounded-lg w-full max-w-md p-6"
        style={{backgroundColor: '#141415'}}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md ${colorClasses[alert.color]}`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{actionDetails.title}</h3>
          </div>
          <button onClick={onClose} className="p-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-opacity-60 text-white">{actionDetails.description}</p>
          
          <div className="p-3 rounded-md bg-opacity-5 bg-white border border-opacity-10 border-white">
            <h4 className="text-sm font-medium text-white mb-2">Pulse AI will:</h4>
            <ul className="text-xs text-opacity-60 text-white space-y-1">
              <li>• {actionDetails.action}</li>
              <li>• Monitor and report results</li>
              <li>• Adjust strategy if needed</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => {
              onAction(false);
              onClose();
            }}
            className="px-4 py-1.5 text-xs font-medium text-opacity-60 text-white hover:text-opacity-100 transition-colors"
          >
            No, I'll handle it
          </button>
          <button
            onClick={() => {
              onAction(true);
              onClose();
            }}
            className="px-4 py-1.5 text-xs font-medium text-white bg-opacity-10 bg-white hover:bg-opacity-20 transition-colors rounded-md flex items-center gap-1.5"
          >
            Yes, proceed
            <ArrowRight size={10} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 rounded-lg p-4 flex items-center gap-3 shadow-lg z-50 bg-green-950 border border-green-800"
          style={{backgroundColor: '#1c3523'}}
        >
          <div className="w-4 h-4 rounded-full flex items-center justify-center bg-green-800">
            <Check size={12} className="text-white" />
          </div>
          <p className="text-sm text-green-100">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AlertCard({ alert }: { alert: Alert }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const Icon = alert.icon;
  const colorClasses = {
    yellow: 'text-yellow-500 bg-opacity-10 bg-yellow-500',
    green: 'text-green-500 bg-opacity-10 bg-green-500',
    purple: 'text-purple-500 bg-opacity-10 bg-purple-500',
  };

  const handleAction = (approved: boolean) => {
    if (approved) {
      setToastMessage('Pulse AI will proceed with the action');
    } else {
      setToastMessage('You will handle this action manually');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111111] border border-opacity-10 border-white rounded-md p-3 hover:border-opacity-20 hover:border-white transition-colors"
        style={{
          backgroundColor: '#141415',
        }}
      >
        <div className="flex items-start space-x-3">
          <div className={`p-1.5 rounded-md ${colorClasses[alert.color]}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-white">{alert.title}</h3>
            <p className="text-xs text-opacity-60 text-white mt-0.5">{alert.message}</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-xs px-2 py-1 rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white hover:bg-opacity-20 transition-colors flex items-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight size={10} />
            </button>
            <button className="text-xs px-2 py-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </motion.div>

      <DetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        alert={alert}
        onAction={handleAction}
      />

      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
      />
    </>
  );
}

export default function AIActionCenter() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xs font-semibold tracking-wide uppercase text-opacity-80 text-white">Pulse AI Action Center</h2>
          <p className="text-sm text-opacity-60 text-white mt-1.5">Smart insights and recommendations</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-xs text-opacity-60 text-white hover:text-white flex items-center gap-1.5">
            View All
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </section>
  );
} 