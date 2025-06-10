import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Filter, Send, Youtube, Instagram, X, Check, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Influencer {
  id: string;
  name: string;
  handle: string;
  genre: string;
  followers: string;
  responseTime: string;
  availability: 'available' | 'busy' | 'unavailable';
  engagement: string;
  tags: string[];
  image: string;
}

const influencers: Influencer[] = [
  // {
  //   id: '1',
  //   name: 'Sarah Chen',
  //   handle: '@sarahchen',
  //   genre: 'Music',
  //   followers: '2.4M',
  //   responseTime: '< 2h',
  //   availability: 'available',
  //   engagement: '4.8%',
  //   tags: ['Pop', 'Electronic'],
  //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces'
  // },
  {
    id: '2',
    name: 'Marcus Johnson',
    handle: '@marcusj',
    genre: 'Gaming',
    followers: '1.8M',
    responseTime: '< 4h',
    availability: 'busy',
    engagement: '5.2%',
    tags: ['FPS', 'Streaming'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    handle: '@emmarod',
    genre: 'Fashion',
    followers: '3.2M',
    responseTime: '< 1h',
    availability: 'available',
    engagement: '6.1%',
    tags: ['Streetwear', 'Luxury'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=faces'
  },
  {
    id: '4',
    name: 'Alex Kim',
    handle: '@alexkim',
    genre: 'Tech',
    followers: '1.5M',
    responseTime: '< 3h',
    availability: 'unavailable',
    engagement: '3.9%',
    tags: ['Gadgets', 'Reviews'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces'
  },
  {
    id: '5',
    name: 'Sophie Chen',
    handle: '@sophiechen',
    genre: 'Lifestyle',
    followers: '2.1M',
    responseTime: '< 2h',
    availability: 'available',
    engagement: '4.8%',
    tags: ['Wellness', 'Travel'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces'
  },
  {
    id: '6',
    name: 'David Park',
    handle: '@davidpark',
    genre: 'Fitness',
    followers: '1.9M',
    responseTime: '< 5h',
    availability: 'busy',
    engagement: '5.5%',
    tags: ['Workout', 'Nutrition'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces'
  },
  {
    id: '7',
    name: 'Luna Martinez',
    handle: '@lunamartinez',
    genre: 'Beauty',
    followers: '2.8M',
    responseTime: '< 1h',
    availability: 'available',
    engagement: '6.3%',
    tags: ['Makeup', 'Skincare'],
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=faces'
  }
];

function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 bg-green-950 border border-green-800 rounded-lg p-4 flex items-center gap-3 shadow-lg z-50"
          style={{backgroundColor: '#1c3523'}}
        >
          <div className="w-4 h-4 rounded-full bg-green-800 flex items-center justify-center">
            <Check size={12} className="text-white" />
          </div>
          <p className="text-sm text-green-100">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InviteModal({ isOpen, onClose, influencer, onSend }: { 
  isOpen: boolean; 
  onClose: () => void; 
  influencer: Influencer;
  onSend: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#141415] border border-opacity-10 border-white rounded-lg w-full max-w-md p-6"
        style={{
          backgroundColor: '#141415'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold text-white">Invite {influencer.name}</h3>
          <button onClick={onClose} className="p-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-opacity-60 text-white mb-1">Subject</label>
            <input
              type="text"
              defaultValue={`Collaboration Opportunity with ${influencer.name}`}
              className="w-full px-3 py-2 bg-opacity-5 bg-white text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-opacity-20 focus:ring-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-opacity-60 text-white mb-1">Message</label>
            <textarea
              defaultValue={`Hi ${influencer.name.split(' ')[0]},\n\nI hope this message finds you well. I'm reaching out from Influur Pulse to discuss a potential collaboration opportunity. Your content in ${influencer.genre} has caught our attention, and we believe your ${influencer.followers} followers would be a great fit for our upcoming campaign.\n\nWould you be interested in learning more about this opportunity?\n\nBest regards,\nAlessandra`}
              rows={8}
              className="w-full px-3 py-2 bg-opacity-5 bg-white text-white rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-opacity-20 focus:ring-white resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-opacity-60 text-white hover:text-opacity-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSend}
            className="px-3 py-1.5 text-xs font-medium text-white bg-opacity-10 bg-white hover:bg-opacity-20 transition-colors rounded-md flex items-center gap-1.5"
          >
            <Send size={10} />
            Send Invite
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function InfluencerCard({ influencer }: { influencer: Influencer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const availabilityColors = {
    available: 'bg-green-500',
    busy: 'bg-yellow-500',
    unavailable: 'bg-red-500',
  };

  const handleSend = () => {
    setIsModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111111] border border-opacity-10 border-white rounded-md p-4 hover:border-opacity-20 hover:border-white transition-colors"
        style={{
          backgroundColor: '#141415',
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="w-22 h-24 rounded-md overflow-hidden">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">{influencer.name}</h3>
              <p className="text-xs text-opacity-60 text-white">{influencer.handle}</p>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-xs text-opacity-40 text-white">{influencer.genre}</span>
                <span className="text-xs text-opacity-40 text-white">•</span>
                <span className="text-xs text-opacity-40 text-white">{influencer.followers} followers</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <button className="p-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
                  <Youtube size={16} />
                </button>
                <button className="p-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
                  <Instagram size={14} />
                </button>
                <button className="p-1 text-opacity-60 text-white hover:text-opacity-100 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-xs text-opacity-60 text-white">
              <Clock className="w-3 h-3 mr-1" />
              {influencer.responseTime}
            </div>
            <div className={`w-2 h-2 rounded-full ${availabilityColors[influencer.availability]}`} />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 mt-2">
            {influencer.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 rounded-full bg-opacity-10 bg-white text-opacity-60 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-xs px-2 py-1 rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white hover:bg-opacity-20 transition-colors flex items-center gap-1.5"
          >
            <Send size={10} />
            Invite
          </button>
        </div>
      </motion.div>

      <InviteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        influencer={influencer}
        onSend={handleSend}
      />
      <Toast 
        message="Message sent successfully" 
        isVisible={showToast} 
      />
    </>
  );
}

export default function TopInfluencers() {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Engagement');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(influencers.length - cardsPerView, prev + 1));
  };

  const visibleInfluencers = influencers.slice(currentIndex, currentIndex + cardsPerView);

  const sortOptions = [
    { label: 'Engagement', value: 'Engagement' },
    { label: 'Followers', value: 'Followers' },
    { label: 'Response Time', value: 'Response Time' },
    { label: 'Availability', value: 'Availability' }
  ];

  const filterOptions = [
    { label: 'Available', value: 'available' },
    { label: 'Response < 2h', value: 'quick_response' },
    { label: 'High Engagement', value: 'high_engagement' },
    { label: 'Verified', value: 'verified' }
  ];

  const toggleFilter = (value: string) => {
    setSelectedFilters(prev => 
      prev.includes(value) 
        ? prev.filter(f => f !== value)
        : [...prev, value]
    );
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xs font-semibold tracking-wide uppercase text-opacity-80 text-white">Top Influencers</h2>
          <p className="text-sm text-opacity-60 text-white mt-1.5">Discover and connect with top creators</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button 
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              className="px-2 py-1 text-xs rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white flex items-center gap-1.5"
            >
              <Filter className="w-3 h-3" />
              <span>Filter</span>
              {selectedFilters.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-opacity-10 bg-white text-white">
                  {selectedFilters.length}
                </span>
              )}
              <ChevronDown size={12} className="text-opacity-60" />
            </button>
            {isFilterDropdownOpen && (
              <div 
                className="absolute left-0 mt-1 w-40 rounded-md bg-[#141415] border border-opacity-10 border-white shadow-lg z-10"
                style={{backgroundColor: '#141415'}}
              >
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleFilter(option.value)}
                    className={`w-full px-2 py-1.5 text-xs text-left flex items-center gap-2 ${
                      selectedFilters.includes(option.value)
                        ? 'text-white bg-opacity-10 bg-white' 
                        : 'text-opacity-60 text-white hover:text-white hover:bg-opacity-5 hover:bg-white'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-sm border ${
                      selectedFilters.includes(option.value)
                        ? 'border-white bg-white'
                        : 'border-opacity-40 border-white'
                    }`}>
                      {selectedFilters.includes(option.value) && (
                        <Check size={10} className="text-[#141415]" />
                      )}
                    </div>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="px-2 py-1 text-xs rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white flex items-center gap-1.5"
            >
              Sort by {selectedSort}
              <ChevronDown size={12} className="text-opacity-60" />
            </button>
            {isSortDropdownOpen && (
              <div 
                className="absolute right-0 mt-1 w-32 rounded-md bg-[#141415] border border-opacity-10 border-white shadow-lg z-10"
                style={{backgroundColor: '#141415'}}
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedSort(option.value);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full px-2 py-1.5 text-xs text-left ${
                      selectedSort === option.value 
                        ? 'text-white bg-opacity-10 bg-white' 
                        : 'text-opacity-60 text-white hover:text-white hover:bg-opacity-5 hover:bg-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`p-1 text-xs rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white hover:bg-opacity-20 transition-colors ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ChevronLeft size={14} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= influencers.length - cardsPerView}
              className={`p-1 text-xs rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:text-white hover:bg-opacity-20 transition-colors ${
                currentIndex >= influencers.length - cardsPerView ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
          <button className="text-xs text-opacity-60 text-white hover:text-white flex items-center gap-1.5">
            View All
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {visibleInfluencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>
    </section>
  );
} 