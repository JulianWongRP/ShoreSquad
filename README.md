# 🌊 ShoreSquad - Beach Cleanup Community App

![ShoreSquad Logo](./assets/logo.svg)

## 🎯 One-Line Pitch
Rally your crew, track weather, and hit the next beach cleanup with our dope map app!

## 🌟 Why It Matters
ShoreSquad creates value by mobilizing young people to clean beaches, using weather and maps for easy planning and social features to make eco-action fun and connected.

## ✨ Features

### 🗺️ Interactive Mapping
- **Real-time Event Locations**: Find beach cleanup events near you
- **Google Maps Integration**: Embedded maps showing next cleanup location with pin
- **Geolocation Support**: Automatic location detection
- **Event Status Tracking**: Active, upcoming, and completed cleanups
- **Custom Markers**: Visual indicators for different event types
- **Get Directions**: One-click navigation to cleanup locations

### 🌤️ Weather Integration
- **Real-time Weather Data**: Current conditions for planning
- **UV Index & Wind Speed**: Safety information for outdoor events
- **Weather Alerts**: Stay informed about changing conditions

### 👥 Social Crew Features
- **Create & Join Events**: Start your own cleanup or join existing ones
- **Crew Management**: Build your environmental action team
- **Points & Gamification**: Track collective impact and achievements
- **Social Sharing**: Spread awareness through integrated sharing

### 📱 Progressive Web App (PWA)
- **Mobile-First Design**: Optimized for smartphone usage
- **Offline Capability**: Core features work without internet
- **App-Like Experience**: Install on home screen
- **Push Notifications**: Stay updated on events and crew activity

## 🎨 Design Philosophy

### Color Palette
- **Ocean Blue (#0077be)**: Primary brand color representing the ocean
- **Coral Orange (#ff6b35)**: Action/CTA color for energy and urgency
- **Sea Green (#20b2aa)**: Success/eco color for completed actions
- **Sandy Beige (#f5f5dc)**: Background/neutral for warmth
- **Deep Teal (#004d40)**: Text/contrast for readability

### UX Principles
- **Mobile-First**: Designed for young users on smartphones
- **High Contrast**: Accessible design for all users
- **Touch-Friendly**: 44px+ touch targets for easy interaction
- **Clear Hierarchy**: Intuitive information flow
- **Immediate Feedback**: Loading states and success messages

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Modern web browser with geolocation support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shoresquad/beach-cleanup-app.git
   cd beach-cleanup-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Alternative: Quick Start with Live Server
```bash
npm start
```

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: ES6+ features, no framework dependencies
- **Leaflet.js**: Interactive mapping functionality

### Features
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: PWA installation capabilities
- **Geolocation API**: User location detection
- **Fetch API**: Modern HTTP requests
- **Local Storage**: User preferences and offline data

### Development Tools
- **Live Server**: Hot reload development server
- **CSS Variables**: Maintainable theming system
- **ES6 Modules**: Organized code structure

## 📁 Project Structure

```
ShoreSquad/
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
├── README.md              # This file
├── assets/                # Static assets
│   ├── logo.svg           # Main logo
│   ├── favicon.svg        # Favicon
│   └── images/            # Additional images
├── css/
│   └── styles.css         # Main stylesheet
└── js/
    └── app.js             # Main JavaScript application
```

## 🌐 Browser Support

ShoreSquad supports all modern browsers:
- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### PWA Features Support
- Service Workers
- Web App Manifest
- Geolocation API
- Fetch API
- CSS Grid & Flexbox

## 🎯 Usage Guide

### For Event Organizers
1. **Create Event**: Click "Create Event" and fill in details
2. **Set Location**: Use the map to pinpoint cleanup location
3. **Invite Crew**: Share event with your environmental action team
4. **Track Progress**: Monitor participants and completion status

### For Participants
1. **Find Events**: Browse the map or event list
2. **Check Weather**: Review conditions before heading out
3. **Join Event**: Click "Join Event" to participate
4. **Build Crew**: Connect with like-minded individuals

### For Crew Leaders
1. **Manage Team**: Invite friends to join your crew
2. **Track Impact**: Monitor collective points and achievements
3. **Plan Together**: Coordinate multiple cleanup events
4. **Share Success**: Celebrate completed cleanups

## 🔧 Configuration

### Weather API Setup
1. Get an API key from OpenWeatherMap (free tier available)
2. Replace `demo_key` in `js/app.js` with your actual key:
   ```javascript
   this.weatherApiKey = 'your_actual_api_key_here';
   ```

### Customization
- **Colors**: Modify CSS variables in `:root` selector
- **Map Center**: Update default coordinates in `initMap()`
- **Event Types**: Add new categories in the events system

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `./` (or `dist/` after build setup)

### Vercel
```bash
vercel --prod
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow mobile-first responsive design
- Maintain accessibility standards (WCAG 2.1 AA)
- Use semantic HTML and ARIA labels
- Write performant, vanilla JavaScript
- Test across multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌍 Environmental Impact

ShoreSquad is designed to make a real environmental impact:
- **Community Building**: Connect environmental activists
- **Education**: Raise awareness about ocean pollution
- **Action**: Facilitate actual beach cleanup events
- **Measurement**: Track collective environmental impact

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/shoresquad/beach-cleanup-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/shoresquad/beach-cleanup-app/discussions)
- **Email**: contact@shoresquad.app
- **Twitter**: [@ShoreSquadApp](https://twitter.com/ShoreSquadApp)

## 🙏 Acknowledgments

- Leaflet.js for excellent mapping capabilities
- OpenWeatherMap for weather data
- The environmental community for inspiration
- All beach cleanup volunteers worldwide

---

**Made with 💚 for our oceans** | [Visit ShoreSquad](https://shoresquad.app)

## Color Palette
- **Ocean Blue**: #0077be (Primary)
- **Sand Beige**: #f4e1c1 (Secondary)
- **Seafoam Green**: #a8e6cf (Accent)
- **Coral Pink**: #ff6f61 (Highlight)
- **Sunshine Yellow**: #ffeb3b (Call to Action)

## Technologies Used
- HTML5
- CSS3
- JavaScript
- APIs for weather data
- Mapping libraries (e.g., Leaflet or Google Maps)

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ShoreSquad.git
   ```
2. Navigate to the project directory:
   ```
   cd ShoreSquad
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage Guidelines
- Open `index.html` in your browser to view the application.
- Use the interactive map to find and plan beach cleanup events.
- Check the weather feature to ensure optimal conditions for your cleanup.

## Contributing
We welcome contributions! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.