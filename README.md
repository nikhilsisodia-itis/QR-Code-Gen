# QR Code Generator

A modern, responsive React application for generating QR codes with multiple input support and flexible display modes. Built with Vite for fast development and optimized builds.

## ✨ Features

- **Multiple Input Support**: Add and manage multiple inputs simultaneously
- **Dual Generation Modes**:
  - **Individual QR Codes**: Generate separate QR codes for each input
  - **Combined List**: Create a single QR code containing all inputs in a formatted list
- **Dark/Light Theme**: Toggle between light and dark themes with a simple button
- **URL Auto-formatting**: Automatically adds `https://` protocol to URLs when needed
- **Download Functionality**: Download generated QR codes as PNG images
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Preview**: See exactly what users will see when they scan combined QR codes

## 🚀 Tech Stack

- **Frontend**: React 19.1.0 with functional components and hooks
- **Build Tool**: Vite 6.3.5 for fast development and optimized production builds
- **QR Generation**: qrcode.react library for high-quality QR code rendering
- **Routing**: React Router DOM for navigation (future expansion ready)
- **Styling**: CSS custom properties with theme support
- **Linting**: ESLint with React-specific rules and hooks
- **Deployment**: Docker with Nginx for production deployment

## 📁 Project Structure

```
qr-code/
├── public/
│   ├── _redirects          # Netlify redirects configuration
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Theme toggle header
│   │   ├── InputField.jsx # Dynamic input management
│   │   ├── QRDisplay.jsx  # QR code rendering and download
│   │   └── SelectMode.jsx # Mode selection modal
│   ├── assets/
│   │   └── react.svg      # React logo
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles and theme variables
│   └── main.jsx          # Application entry point
├── Dockerfile            # Multi-stage Docker build
├── nginx.conf           # Nginx configuration for production
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🛠 Installation & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qr-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run serve
   ```

## 🐳 Docker Deployment

The project includes a multi-stage Dockerfile for production deployment:

```bash
# Build the Docker image
docker build -t qr-generator .

# Run the container
docker run -p 80:80 qr-generator
```

The application will be served via Nginx on port 80.

## 🎯 Usage

1. **Add Inputs**: Enter URLs or text in the input fields. Click "➕ Add" to add more inputs.

2. **Generate QR Codes**: Click "⚙️ Generate QR" to process your inputs.

3. **Select Mode**: Choose between:
   - **📱 Individual QR Codes**: Creates separate QR codes for each input
   - **📋 Combined List**: Creates one QR code with all inputs formatted as a numbered list

4. **Download**: Click "⬇️ Download" to save QR codes as PNG images.

5. **Theme Toggle**: Use the 🌙/☀️ button to switch between dark and light themes.

## 🔧 Configuration

### Theme Customization
Themes are managed via CSS custom properties in `src/index.css`:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --bg-color: #1e1e1e;
  --text-color: #ffffff;
}
```

### QR Code Settings
QR code generation can be customized in `QRDisplay.jsx`:
- Size: Currently set to 250px
- Error correction level: 'M' (Medium)
- Margin: Included for better scanning

## 📱 Mobile Optimization

- Responsive design that works on all screen sizes
- Touch-friendly interface elements
- Optimized QR code sizes for mobile scanning
- Long-press functionality hints for mobile users

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- QR code customization (colors, logos)
- Batch export functionality
- QR code scanning capability
- Link analytics and tracking
- Custom URL shortening integration
- CSV import/export functionality
