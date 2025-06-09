import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  BarChart2, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  PanelRightClose,
  PanelRightOpen,
  Plus,
  PlusIcon,
  Clock,
  Sparkles,
  Inbox,
  Settings as SettingsIcon,
  DollarSign,
  BookOpen,
  Users as UsersIcon,
  LogOut,
  Monitor,
  Sun,
  Moon,
  CheckCircle2,
  AlertCircle,
  Info,
  Hash,
  User,
  Image
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '#', active: true },
  { name: 'Recents', icon: Clock, href: '#', active: false },
  { name: 'Analytics', icon: BarChart2, href: '#', active: false },
  { name: 'Influencers', icon: Users, href: '#', active: false },
  { name: 'Inbox', icon: Inbox, href: '#', active: false },
  { name: 'Pulse AI', icon: Sparkles, href: '#', active: false },
  { name: 'Settings', icon: Settings, href: '#', active: false },
];

function ProfileDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute right-4 top-16 w-[250px] bg-[#141415] border border-opacity-10 border-white rounded-xl shadow-lg overflow-hidden"
        style={{backgroundColor: '#141415'}}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-1.5">
          <div className="h-10 px-1.5">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex min-w-0 flex-1 flex-col items-start">
                <div className="w-full truncate text-start text-sm font-medium text-white">Alessandra</div>
                <div className="h-4 w-full truncate text-start text-sm font-medium text-opacity-60 text-white">alessandra@influur.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-opacity-10 bg-white"></div>

        <div className="p-1.5">
          <a href="#" className="flex h-8 w-full items-center gap-3 px-1.5 text-sm text-white hover:bg-opacity-5 hover:bg-white rounded-md transition-colors">
            <SettingsIcon className="w-4 h-4 text-opacity-60" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex h-8 w-full items-center gap-3 px-1.5 text-sm text-white hover:bg-opacity-5 hover:bg-white rounded-md transition-colors">
            <DollarSign className="w-4 h-4 text-opacity-60" />
            <span>Pricing</span>
          </a>
          <a href="#" className="flex h-8 w-full items-center gap-3 px-1.5 text-sm text-white hover:bg-opacity-5 hover:bg-white rounded-md transition-colors">
            <BookOpen className="w-4 h-4 text-opacity-60" />
            <span>Documentation</span>
          </a>
          <a href="#" className="flex h-8 w-full items-center gap-3 px-1.5 text-sm text-white hover:bg-opacity-5 hover:bg-white rounded-md transition-colors">
            <UsersIcon className="w-4 h-4 text-opacity-60" />
            <span>Community</span>
          </a>
        </div>

        <div className="h-px bg-opacity-10 bg-white"></div>

        <div className="p-1.5">
          <div className="flex h-8 items-center px-1.5">
            <span className="text-sm font-medium text-opacity-60 text-white">Credit Balance</span>
          </div>
          <div className="flex h-8 w-full items-center justify-between px-1.5 text-sm text-white">
            <span>Monthly credits</span>
            <span>5.00</span>
          </div>
          <div className="mt-1 rounded-lg p-2 bg-opacity-10 bg-blue-500">
            <p className="text-sm text-blue-100">
              Upgrade your plan to buy more credits.{' '}
              <button className="font-medium underline hover:text-blue-200">Upgrade plan</button>
            </p>
          </div>
        </div>

        <div className="h-px bg-opacity-10 bg-white"></div>

        <div className="p-1.5">
          <div className="flex h-8 items-center px-1.5">
            <span className="text-sm font-medium text-opacity-60 text-white">Preferences</span>
          </div>
          <div className="flex h-8 w-full items-center justify-between px-1.5">
            <span className="text-sm text-white">Theme</span>
            <div className="flex gap-0.5 items-center h-fit overflow-hidden rounded-full border border-opacity-10 border-white p-0.5">
              <button className="flex items-center justify-center w-6 h-6 rounded-full bg-opacity-10 bg-white">
                <Monitor className="w-3 h-3 text-white" />
              </button>
              <button className="flex items-center justify-center w-6 h-6 rounded-full">
                <Sun className="w-3 h-3 text-opacity-60 text-white" />
              </button>
              <button className="flex items-center justify-center w-6 h-6 rounded-full">
                <Moon className="w-3 h-3 text-opacity-60 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-opacity-10 bg-white"></div>

        <div className="p-1.5">
          <button className="flex h-8 w-full items-center gap-3 px-1.5 text-sm text-white hover:bg-opacity-5 hover:bg-white rounded-md transition-colors">
            <LogOut className="w-4 h-4 text-opacity-60" />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function TeamDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute left-40 top-14 border border-opacity-10 border-white rounded-xl shadow-lg overflow-hidden"
        style={{
          backgroundColor: '#141415',
          width: '260px',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-1.5 flex flex-col gap-1"
        style={{paddingBottom: '16px',
          paddingTop: '8px'
        }}>
          <div className="relative flex h-[48px] cursor-pointer items-center justify-between">
            <div className="relative flex w-full select-none items-center gap-3 whitespace-nowrap rounded-md px-1.5 text-sm text-white outline-none transition-colors hover:bg-opacity-5 hover:bg-white">
              <div className="flex w-full items-center justify-between gap-2">
                <span className="relative flex shrink-0 select-none items-center justify-center overflow-hidden size-6 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                    alt="Avatar" 
                    className="h-8 w-8 object-cover"
                  />
                </span>
                <div className="flex min-w-0 flex-1 flex-col items-start">
                  <div className="w-full truncate text-start text-sm font-medium text-white">Personal</div>
                  <div className="h-4 w-full truncate text-start text-sm font-medium text-opacity-60 text-white">Free</div>
                </div>
                <div className="text-opacity-60 text-white">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8 content-center px-1.5 text-sm text-opacity-60 text-white flex-none">Other Teams</div>

          <div className="relative flex h-[48px] cursor-pointer items-center justify-between">
            <div className="relative flex w-full select-none items-center gap-3 whitespace-nowrap rounded-md px-1.5 text-sm text-white outline-none transition-colors hover:bg-opacity-5 hover:bg-white">
              <div className="flex w-full items-center justify-between gap-2">
                <span className="relative flex shrink-0 select-none items-center justify-center overflow-hidden size-6 rounded-lg">
                  <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                </span>
                <div className="flex min-w-0 flex-1 flex-col items-start">
                  <div className="w-full truncate text-start text-sm font-medium text-white">Create New Team</div>
                  <div className="h-4 w-full truncate text-start text-sm font-medium text-opacity-60 text-white">Start Team plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-opacity-10 bg-white"></div>

        <div className="p-1.5">
          <button className="w-full h-8 px-3 text-sm font-medium text-white bg-opacity-10 bg-white hover:bg-opacity-20 transition-colors rounded-lg">
            Upgrade to Premium
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function NotificationDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute right-14 top-14 border border-opacity-10 border-white rounded-xl shadow-lg overflow-hidden"
        style={{
          backgroundColor: '#141415',
          width: '360px',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-1.5 flex flex-col gap-1"
          style={{
            paddingBottom: '16px',
            paddingTop: '12px'
          }}>
          <div className="flex items-center justify-between px-1.5 mb-2">
            <h3 className="text-sm font-medium text-white">Notifications</h3>
            <button className="text-xs text-opacity-60 text-white hover:text-opacity-100 transition-colors">
              Mark all as read
            </button>
          </div>

          <div className="space-y-1">
            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Campaign "Summer Collection" has been approved</p>
                  <p className="text-xs text-opacity-60 text-white mt-0.5">2 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">3 influencers have not responded to your invites</p>
                  <p className="text-xs text-opacity-60 text-white mt-0.5">15 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Info className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">New feature: AI-powered content suggestions</p>
                  <p className="text-xs text-opacity-60 text-white mt-0.5">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-opacity-10 bg-white my-2"></div>

          <button className="w-full text-center text-sm text-opacity-60 text-white hover:text-opacity-100 transition-colors py-1">
            View all notifications
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function SearchDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute left-1/3 -translate-x-[30rem] top-14 border border-opacity-10 border-white rounded-xl shadow-lg overflow-hidden"
        style={{
          backgroundColor: '#141415',
          width: '32rem',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-1.5 flex flex-col gap-1"
          style={{
            paddingBottom: '16px',
            paddingTop: '12px'
          }}>
          <div className="flex items-center justify-between px-1.5 mb-2">
            <h3 className="text-sm font-medium text-white">Recent Searches</h3>
            <button className="text-xs text-opacity-60 text-white hover:text-opacity-100 transition-colors">
              Clear all
            </button>
          </div>

          <div className="space-y-1">
            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <div className="mt-0.5">
                  <Hash className="w-4 h-4 text-opacity-60 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">#summercollection</p>
                </div>
              </div>
              <span className="text-xs text-opacity-40 text-white">2 days ago</span>
            </div>

            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <div className="mt-0.5">
                  <User className="w-4 h-4 text-opacity-60 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Sarah Johnson</p>
                </div>
              </div>
              <span className="text-xs text-opacity-40 text-white">1 week ago</span>
            </div>

            <div className="relative flex cursor-pointer items-center justify-between p-1.5 rounded-md hover:bg-opacity-5 hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <div className="mt-0.5">
                  <Image className="w-4 h-4 text-opacity-60 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Beach photoshoot</p>
                </div>
              </div>
              <span className="text-xs text-opacity-40 text-white">2 weeks ago</span>
            </div>
          </div>

          <div className="h-px bg-opacity-10 bg-white my-2"></div>

          <div className="px-1.5">
            <h3 className="text-sm font-medium text-white mb-2">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center gap-2 p-2 text-sm text-white bg-opacity-5 bg-white hover:bg-opacity-10 transition-colors rounded-lg">
                <Plus className="w-4 h-4" />
                New Campaign
              </button>
              <button className="flex items-center gap-2 p-2 text-sm text-white bg-opacity-5 bg-white hover:bg-opacity-10 transition-colors rounded-lg">
                <Users className="w-4 h-4" />
                Find Influencers
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 z-40 h-screen"
        initial={{ width: 240 }}
        animate={{ width: sidebarOpen ? 240 : 60 }}
        transition={{ duration: 0.2 }}
        // style={{ backgroundColor: '#141415' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-12 px-3 pt-4 pl-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-md text-white flex items-center">
                  <span className="font-normal">influur</span>
                  <span className="font-semibold ml-1">pulse</span>
                </h1>
                <span aria-hidden="true" className="text-alpha-400 w-4 min-w-4 select-none text-center text-lg hidden sm:block" style={{opacity: 0.2}}>/</span>
                <button 
                  onClick={() => setTeamOpen(!teamOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-opacity-60 text-white hover:text-opacity-100 transition-colors rounded-md hover:bg-opacity-5 hover:bg-white"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium">Personal</span>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-opacity-10 bg-white text-opacity-60 text-white">Free</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7071 2.39644C8.31658 2.00592 7.68341 2.00592 7.29289 2.39644L4.46966 5.21966L3.93933 5.74999L4.99999 6.81065L5.53032 6.28032L7.99999 3.81065L10.4697 6.28032L11 6.81065L12.0607 5.74999L11.5303 5.21966L8.7071 2.39644ZM5.53032 9.71966L4.99999 9.18933L3.93933 10.25L4.46966 10.7803L7.29289 13.6035C7.68341 13.9941 8.31658 13.9941 8.7071 13.6035L11.5303 10.7803L12.0607 10.25L11 9.18933L10.4697 9.71966L7.99999 12.1893L5.53032 9.71966Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-2 pt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center w-[224px] h-8 px-2 py-1.5 rounded-[6px] transition-colors ${
                  item.active 
                    ? 'bg-opacity-5 bg-white text-white' 
                    : 'text-opacity-60 text-white hover:text-white hover:bg-opacity-5 hover:bg-white'
                }`}
                style={{ borderRadius: '6px' }}
              >
                <item.icon className="w-5 h-5" strokeWidth={1.75} />
                {sidebarOpen && <span className="ml-3 text-sm">{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Header */}
      <motion.header
        className="sticky top-0 z-30"
        style={{backgroundColor: '#0a0a0a'}}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-12 px-4 py-4"
          style={{paddingBottom: 0,
            marginBottom: 6
          }}>
            <div className="w-[200px]" /> {/* Spacer for left side */}
            
            <div className="flex-1 flex justify-center ml-64">
              <div className="w-full max-w-2xl">
                <div className="relative flex items-center">
                  <div className="absolute left-2 flex items-center justify-center w-4 h-4">
                    <Search className="w-4 h-4 text-opacity-40 text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for campaigns, influencers..."
                    className="w-full h-8 pl-8 pr-3 text-sm bg-opacity-5 bg-white text-white placeholder:text-opacity-40 placeholder:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-20 focus:ring-white"
                    onClick={() => setSearchOpen(true)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="p-1.5 text-opacity-60 text-white hover:text-white hover:bg-opacity-5 hover:bg-white transition-colors relative"
                style={{ borderRadius: '6px' }}
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="relative w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-opacity-20 hover:ring-white transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                  alt="Profile" 
                  className="w-8 h-8 object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {profileOpen && (
          <ProfileDropdown 
            isOpen={profileOpen} 
            onClose={() => setProfileOpen(false)} 
          />
        )}
        {teamOpen && (
          <TeamDropdown 
            isOpen={teamOpen} 
            onClose={() => setTeamOpen(false)} 
          />
        )}
        {notificationOpen && (
          <NotificationDropdown 
            isOpen={notificationOpen} 
            onClose={() => setNotificationOpen(false)} 
          />
        )}
        {searchOpen && (
          <SearchDropdown 
            isOpen={searchOpen} 
            onClose={() => setSearchOpen(false)} 
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.main
        className="p-4"
        initial={{ marginLeft: 240 }}
        animate={{ marginLeft: sidebarOpen ? 240 : 60 }}
        transition={{ duration: 0.2 }}
      >
        <div 
          className="max-w-8xl mx-auto space-y-4 border border-opacity-10 border-white rounded-[8px] p-4"
          style={{ 
            borderRadius: '8px',
            backgroundColor: '#0f0f10'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSidebar}
                className="flex items-center justify-center text-opacity-60 text-white hover:text-opacity-100 transition-colors"
              >
                {sidebarOpen ? <PanelRightOpen size={18} /> : <PanelRightClose size={18} />}
              </button>
              <div>
                <h1 className="text-xl font-semibold">
                  Hi Alessandra,{' '}
                  <a 
                    href="#" 
                    style={{ 
                      color: '#FBBF24',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#FCD34D'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#FBBF24'}
                  >
                    3 alert
                  </a>
                  {' '}needs your attention
                </h1>
              </div>
            </div>
            <button 
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-button-bg border border-button-border hover:bg-button-hover transition-colors"
              style={{ borderRadius: '6px'}}
            >
              <PlusIcon className='w-3.5 h-3.5' />
              Start New Campaign
            </button>
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </motion.main>
    </div>
  );
} 