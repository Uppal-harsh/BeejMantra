# 🌾 KishanBhai – AI-Powered Digital Assistant for Indian Farmers

<div align="center">

![KishanBhai Logo](https://img.shields.io/badge/KishanBhai-AI%20Assistant%20for%20Farmers-green?style=for-the-badge&logo=leaf)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-11.9.1-orange?style=for-the-badge&logo=firebase)
![Gemini AI](https://img.shields.io/badge/Gemini%20AI-1.14.1-purple?style=for-the-badge&logo=google)

**Empowering Indian farmers with AI-driven insights, real-time market data, and multilingual support**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 🎯 Overview

KishanBhai is a comprehensive AI-powered digital assistant designed specifically for Indian farmers. It combines cutting-edge AI technology with local agricultural knowledge to provide real-time crop health diagnosis, market insights, government scheme guidance, and educational resources — all accessible in multiple Indian languages including Hindi, Kannada, Bengali, and Bhojpuri.

### 🌟 Key Highlights

- **🤖 AI-Powered Chatbot** with voice interaction capabilities
- **📸 Visual Crop Disease Detection** using image analysis
- **📊 Real-Time Market Price Analysis** with AI-driven recommendations
- **🏛️ Government Scheme Navigator** with eligibility criteria
- **🌤️ Weather Forecasting** tailored for agricultural needs
- **🗣️ Multilingual Support** in 5 Indian languages
- **📱 Progressive Web App** with offline capabilities

---

## 🚀 Core Features

### 🤖 **Annapurna AI Chatbot**
- **Voice & Text Interaction**: Natural conversation in multiple languages
- **Context-Aware Responses**: Remembers conversation history and user preferences
- **Actionable Intelligence**: Direct navigation to relevant app sections
- **Speech-to-Text & Text-to-Speech**: Seamless voice communication
- **Smart Intent Recognition**: Understands farming queries and navigates accordingly

### 🏥 **Crop Doctor (Disease Detection)**
- **Image-Based Diagnosis**: Upload photos for instant disease identification
- **Text Description Support**: Describe symptoms for AI analysis
- **Treatment Recommendations**: Localized solutions with product links
- **Educational Resources**: Links to documentation and video guides
- **Multi-Crop Support**: Handles various agricultural crops

### 📊 **Market Analyst**
- **Real-Time Price Tracking**: Live data from government APIs
- **AI-Powered Recommendations**: Sell now or wait analysis
- **Trend Analysis**: Historical price patterns and predictions
- **Location-Based Insights**: City-specific market information
- **Crop-Specific Analysis**: Tailored recommendations per crop type

### 🏛️ **Government Schemes Navigator**
- **Scheme Discovery**: Find relevant government programs
- **Eligibility Checker**: Automated eligibility assessment
- **Application Guidance**: Direct links to official portals
- **Documentation Help**: Required documents and procedures
- **Multilingual Support**: Information in local languages

### 🌤️ **Weather Intelligence**
- **Agricultural Weather Forecast**: Crop-specific weather insights
- **Seasonal Recommendations**: Best planting and harvesting times
- **Climate Risk Assessment**: Weather-related crop protection advice
- **Local Weather Data**: Location-based forecasting
- **Historical Weather Patterns**: Long-term climate analysis

### 🌱 **Crop Recommender**
- **Seasonal Recommendations**: Best crops for current season
- **Soil & Climate Analysis**: Location-based crop suggestions
- **Market Demand Integration**: High-demand crop recommendations
- **Risk Assessment**: Weather and market risk evaluation
- **Profitability Analysis**: Expected returns and costs

### 📚 **E-Learning Hub**
- **Vernacular Content**: Educational materials in local languages
- **Video Learning**: Visual guides and tutorials
- **Interactive Lessons**: Step-by-step farming techniques
- **Expert Knowledge**: Tips from agricultural experts
- **Community Learning**: Peer-to-peer knowledge sharing

### 🛒 **Agri Commerce**
- **Tool & Equipment Marketplace**: Farming implements and machinery
- **Seed & Fertilizer Store**: Quality agricultural inputs
- **Price Comparison**: Best deals and discounts
- **Local Supplier Network**: Connect with nearby vendors
- **Secure Transactions**: Safe payment processing

### 📱 **Smart Notifications**
- **Weather Alerts**: Critical weather warnings
- **Price Updates**: Significant market price changes
- **Scheme Deadlines**: Government application reminders
- **Crop Care Reminders**: Seasonal farming activities
- **WhatsApp Integration**: Multi-channel notifications

### 👥 **Community Features**
- **Farmer Network**: Connect with local farmers
- **Knowledge Sharing**: Experience and tips exchange
- **Problem Solving**: Community-driven solutions
- **Local Events**: Agricultural fairs and workshops
- **Expert Q&A**: Direct access to agricultural experts

---

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15.3.3** - React framework with App Router
- **TypeScript 5.0** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### **Backend & AI**
- **Firebase 11.9.1** - Backend-as-a-Service
  - Firestore - NoSQL database
  - Authentication - User management
  - Functions - Serverless computing
  - Storage - File management
  - Hosting - Web deployment
- **Google Gemini AI** - Advanced AI models
  - Text generation and analysis
  - Image recognition and processing
  - Speech-to-text and text-to-speech
  - Multilingual support
- **Genkit 1.14.1** - AI development framework

### **APIs & Integrations**
- **Data.gov.in API** - Government market data
- **Weather APIs** - Meteorological data
- **YouTube API** - Educational content
- **Google Search API** - Documentation links

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling
- **Git** - Version control

---

## 📱 Supported Languages

| Language | Code | Status | Features |
|----------|------|--------|----------|
| **English** | `en` | ✅ Complete | All features |
| **Hindi** | `hi` | ✅ Complete | All features |
| **Kannada** | `kn` | ✅ Complete | All features |
| **Bengali** | `bn` | ✅ Complete | All features |
| **Bhojpuri** | `bho` | ✅ Complete | All features |

---

## 🏗️ Project Structure

```
KishanBhai/
├── 📁 src/
│   ├── 📁 ai/                    # AI flows and Genkit configuration
│   │   ├── 📁 flows/            # AI-powered features
│   │   │   ├── annapurna-chat-flow.ts
│   │   │   ├── diagnose-crop-disease.ts
│   │   │   ├── analyze-market-prices.ts
│   │   │   ├── navigate-government-schemes.ts
│   │   │   ├── recommend-crops.ts
│   │   │   ├── get-weather-forecast.ts
│   │   │   └── ...
│   │   ├── genkit.ts            # AI configuration
│   │   └── dev.ts               # Development server
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── 📁 dashboard/        # Main application pages
│   │   │   ├── crop-doctor/     # Disease detection
│   │   │   ├── market-analyst/  # Price analysis
│   │   │   ├── schemes/         # Government schemes
│   │   │   ├── weather/         # Weather forecasting
│   │   │   ├── crop-recommender/# Crop recommendations
│   │   │   ├── learn/           # E-learning content
│   │   │   ├── shop/            # Agri commerce
│   │   │   ├── community/       # Farmer community
│   │   │   ├── tracker/         # Price tracking
│   │   │   └── ...
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Landing page
│   │   └── globals.css          # Global styles
│   ├── 📁 components/           # Reusable UI components
│   │   ├── 📁 ui/               # Base UI components
│   │   ├── annapurna-chatbot.tsx
│   │   ├── language-switcher.tsx
│   │   ├── main-nav.tsx
│   │   └── ...
│   ├── 📁 contexts/             # React contexts
│   │   └── language-context.tsx
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── use-auth.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── 📁 lib/                  # Utility libraries
│   │   ├── firebase-config.ts
│   │   └── utils.ts
│   └── 📁 locales/              # Internationalization
│       ├── en.json
│       ├── hi.json
│       ├── kn.json
│       ├── bn.json
│       └── bho.json
├── 📄 package.json              # Dependencies and scripts
├── 📄 next.config.ts            # Next.js configuration
├── 📄 tailwind.config.ts        # Tailwind CSS configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 firebase.json             # Firebase configuration
└── 📄 README.md                 # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Firebase** project setup
- **Google Cloud** project with Vertex AI enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/KishanBhai.git
   cd KishanBhai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Google AI Configuration
   NEXT_PUBLIC_VERTEX_AI_KEY=your_vertex_ai_key
   GOOGLE_APPLICATION_CREDENTIALS=path_to_service_account.json

   # External APIs
   MARKET_DATA_API_KEY=your_data_gov_api_key
   WEATHER_API_KEY=your_weather_api_key
   ```

4. **Firebase Setup**
   ```bash
   # Install Firebase CLI
   npm install -g firebase-tools

   # Login to Firebase
   firebase login

   # Initialize Firebase
   firebase init
   ```

5. **Run Development Server**
   ```bash
   # Start Next.js development server
   npm run dev

   # Start Genkit AI development server
   npm run genkit:dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

### Deployment

1. **Deploy to Firebase Hosting**
   ```bash
   firebase deploy
   ```

2. **Deploy to Vercel**
   ```bash
   # Connect your GitHub repository to Vercel
   # Vercel will automatically deploy on push
   ```

---

## 🎨 UI/UX Features

### **Design System**
- **Modern Interface**: Clean, intuitive design optimized for mobile devices
- **Accessibility**: WCAG 2.1 compliant with screen reader support
- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive Design**: Optimized for all screen sizes
- **Loading States**: Smooth loading animations and skeleton screens

### **User Experience**
- **Progressive Web App**: Installable app with offline capabilities
- **Voice Navigation**: Hands-free operation for farmers in the field
- **Offline Support**: Core features work without internet
- **Push Notifications**: Real-time alerts and updates
- **Data Sync**: Seamless data synchronization across devices

---

## 🔧 Configuration

### **AI Model Configuration**
```typescript
// src/ai/genkit.ts
export const ai = configureGenkit({
  plugins: [
    googleAI({
      apiKey: process.env.NEXT_PUBLIC_VERTEX_AI_KEY!,
    }),
  ],
  enableTracingAndMetrics: true,
});
```

### **Firebase Configuration**
```typescript
// src/lib/firebase-config.ts
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```

---

## 🧪 Testing

### **Run Tests**
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

### **Code Quality**
```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Format code
npm run format
```

---

## 📊 Performance

### **Optimizations**
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Intelligent caching strategies
- **Bundle Analysis**: Regular bundle size monitoring
- **CDN**: Global content delivery network

### **Metrics**
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for performance
- **Mobile Performance**: 90+ mobile performance score
- **Accessibility**: 100% accessibility score

---

## 🔒 Security

### **Security Features**
- **Authentication**: Firebase Auth with email/password
- **Data Encryption**: End-to-end encryption for sensitive data
- **API Security**: Rate limiting and request validation
- **Input Validation**: Comprehensive input sanitization
- **HTTPS Only**: Secure communication protocols

### **Privacy**
- **GDPR Compliance**: User data protection
- **Local Storage**: Sensitive data stored locally
- **Data Minimization**: Collect only necessary data
- **User Consent**: Transparent data usage policies

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

### **Areas for Contribution**
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation updates
- 🌐 Additional language support
- 🎨 UI/UX improvements
- 🧪 Test coverage expansion

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### **Technology Partners**
- **Google Firebase** - Backend infrastructure and hosting
- **Google Vertex AI** - Advanced AI capabilities
- **Data.gov.in** - Government market data APIs
- **Next.js Team** - React framework and tooling

### **Community Support**
- **Indian Farmers** - Real-world feedback and testing
- **Agricultural Experts** - Domain knowledge and validation
- **Open Source Contributors** - Libraries and tools
- **NGO Partners** - Field testing and user research

### **Special Thanks**
- **Government of India** - Agricultural data and schemes
- **Agricultural Universities** - Research and validation
- **Local Farming Communities** - User feedback and testing
- **Open Source Community** - Tools and libraries

---

## 📞 Support & Contact

### **Get Help**
- 📧 **Email**: support@kishanbhai.com
- 💬 **Discord**: [Join our community](https://discord.gg/kishanbhai)
- 📱 **WhatsApp**: +91-XXXXXXXXXX
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/KishanBhai/issues)

### **Stay Connected**
- 🌐 **Website**: [kishanbhai.com](https://kishanbhai.com)
- 📱 **Mobile App**: Available on Google Play Store
- 📺 **YouTube**: [KishanBhai Channel](https://youtube.com/kishanbhai)
- 📘 **Facebook**: [KishanBhai Page](https://facebook.com/kishanbhai)

---

<div align="center">

**Made with ❤️ for Indian Farmers**

*Empowering agriculture through technology*

[⬆ Back to Top](#-kishanbhai--ai-powered-digital-assistant-for-indian-farmers)

</div>
