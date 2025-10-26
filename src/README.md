# B2B Lead Generation & Conversion System

An AI-powered B2B lead generation and conversion system designed to identify, contact, and convert key decision-makers at global companies in gym wear, sportswear, and martial arts apparel into long-term business clients.

## 🌐 Live Demo

**Production Site**: https://b2b-lead-generation.com

## 🚀 Features

- **Lead Management**: Centralized database of contacts with detailed company information
- **Campaign Manager**: Create and manage automated email campaigns with AI personalization
- **Response Handler**: Track and manage responses with automated follow-up sequences
- **Analytics Dashboard**: Real-time metrics, conversion tracking, and performance insights
- **AI Integration**: Quality scoring, lead prioritization, and email personalization
- **Multi-Source Data**: Import from Amazon, Alibaba, Google Maps, WhatsApp, LinkedIn

## 📊 Dashboard Components

### 1. Lead Management
- Search and filter leads by industry, status, country
- Import/export capabilities
- Detailed contact information with LinkedIn profiles
- Quality scoring (AI-powered)
- Status tracking (New, Contacted, Interested, Quote Requested, Order Placed)

### 2. Campaign Manager
- Create targeted email campaigns
- AI-powered email template generation
- Scheduling and automation
- Track campaign performance
- A/B testing capabilities

### 3. Response Handler
- Automatic response categorization
- Follow-up sequence automation
- Email thread tracking
- RFQ (Request for Quote) management

### 4. Analytics
- Conversion funnel visualization
- Response rate tracking
- Read receipt monitoring
- Geographic distribution charts
- Industry breakdown analysis
- Revenue forecasting

### 5. Settings
- Email account configuration (SMTP/Gmail)
- AI provider integration (OpenAI, Anthropic)
- Data source connections (Amazon, Alibaba, LinkedIn APIs)
- Notification preferences
- Security settings

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Tailwind CSS 4.0
- **UI Components**: Shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel / Netlify

## 🏁 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/b2b-lead-generation.git
cd b2b-lead-generation
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- Custom server

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── components/
│   ├── Dashboard.tsx      # Main dashboard with metrics
│   ├── LeadManagement.tsx # Lead database management
│   ├── CampaignManager.tsx # Email campaign creation
│   ├── ResponseHandler.tsx # Response tracking
│   ├── Analytics.tsx      # Analytics and charts
│   ├── Settings.tsx       # System settings
│   └── ui/               # Reusable UI components
├── styles/
│   └── globals.css       # Global styles and Tailwind config
└── guidelines/
    └── Guidelines.md     # Development guidelines
```

## 🎯 Current Lead Data

The system currently includes 20 B2B leads across various industries:
- Apparel & Fashion
- Information Technology & Services
- Sports & Recreation
- Retail
- Management Consulting
- Staffing & Recruiting

## 🔮 Future Enhancements

- [ ] Supabase integration for persistent data storage
- [ ] Real-time collaboration features
- [ ] Advanced AI email generation
- [ ] WhatsApp integration
- [ ] LinkedIn automation
- [ ] Google Sheets sync
- [ ] Multi-user support with roles
- [ ] Advanced reporting and exports
- [ ] Mobile application

## 📝 License

This project is proprietary software.

## 🤝 Contributing

Contact the project owner for contribution guidelines.

## 📧 Support

For support, email: support@b2b-lead-generation.com

---

**Built with ❤️ for B2B Sales Teams**
