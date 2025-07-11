# Influencer Management Dashboard

A modern, responsive dashboard built with React, TypeScript, and Vite. This dashboard is optimized for screen widths between 1360px and 1440px.

## Live Demo

The dashboard is deployed and available at: [https://dashboard-app-qwerty.vercel.app/](https://dashboard-app-qwerty.vercel.app/)

## Features

### 1. Dashboard Overview
- Real-time campaign performance metrics
- AI-powered insights and recommendations
- Interactive data visualizations
- Quick access to key metrics and KPIs

### 2. AI Action Center
- Smart alerts and notifications
- Automated campaign optimization suggestions
- Performance insights and recommendations
- AI-driven action items for campaign improvement

### 3. Campaign Management
- Campaign performance tracking
- Influencer collaboration management
- Content scheduling and approval
- ROI tracking and analytics

### 4. Top Influencers
- Influencer performance metrics
- Engagement rate analysis
- Audience demographics
- Collaboration history

### 5. User Interface
- Modern, responsive design
- Dark mode support
- Intuitive navigation
- Real-time updates and notifications

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Radix UI
  - Heroicons
  - Lucide React
- **Design System**: Custom internal design system with reusable components
  - Button, Card, Typography, Input, Select, Modal, Badge
  - Consistent theming and styling
  - Accessibility-first components
  - Comprehensive documentation
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Code Quality**: ESLint, TypeScript

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd dashboard-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/         # React components
│   ├── Layout.tsx     # Main layout component
│   ├── AIActionCenter.tsx  # AI-powered action center
│   ├── TopInfluencers.tsx  # Influencer management
│   └── CampaignPerformance.tsx  # Campaign analytics
├── design-system/     # Internal design system
│   ├── components/    # Reusable UI components
│   ├── styles/        # Theme and styling utilities
│   └── docs/         # Component documentation
├── assets/            # Static assets
├── main.tsx          # Application entry point
└── App.tsx           # Root component
```

## Features in Detail

### AI Action Center
- Smart alerts for campaign optimization
- Automated influencer engagement tracking
- Performance-based recommendations
- Campaign relaunch suggestions
- Automated reminder system

### Campaign Performance
- Real-time performance metrics
- Engagement analytics
- ROI tracking
- Campaign comparison tools
- Historical data analysis

### Top Influencers
- Performance ranking
- Engagement metrics
- Audience insights
- Collaboration history
- Campaign success rate

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
