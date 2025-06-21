# Itinerarly - Travel Planning Made Simple

## Overview
Itinerarly is a modern travel planning application built with Next.js 13+, React, and TypeScript. It helps users plan and organize their trips effortlessly with an interactive map interface and intuitive planning tools.

## Features
- Interactive India map visualization using react-simple-maps
- Modern, responsive UI with Tailwind CSS
- Server-side rendering with Next.js
- Type-safe development with TypeScript
- AI-powered travel insights using Google's Gemini API
- Interactive state and city selection
- Dynamic travel information display

## Tech Stack
- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: react-simple-maps
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Testing**: Jest & React Testing Library

## Getting Started

## Special mention

Huge shoutout to [Subhash9325](https://github.com/Subhash9325/GeoJson-Data-of-Indian-States/blob/master/Indian_States) for compiling the data of Indian states and geography 

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Gemini API key

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/itinerarly-FE.git
cd itinerarly-FE
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_Gemini_API=your_gemini_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
itinerarly-FE/
├── app/               # Next.js app directory
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/        # Reusable components
├── lib/              # Utility functions and API handlers
├── styles/           # Global styles
├── public/           # Static assets
├── __tests__/        # Test files
└── types/            # TypeScript type definitions
```

## Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## Environment Variables
The following environment variables are required:

| Variable | Description | Required |
|----------|-------------|----------|
| NEXT_PUBLIC_Gemini_API | Google Gemini API Key | Yes |

To obtain a Gemini API key:
1. Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create or sign in to your Google account
3. Generate an API key
4. Copy the key to your `.env.local` file

## Testing
The project uses Jest and React Testing Library for testing. To run tests:
```bash
npm test
```

For watch mode:
```bash
npm run test:watch
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting
If you encounter rate limiting with the Gemini API:
- The application automatically switches between models
- Check your API quota in the Google AI Studio
- Ensure your API key is correctly set in `.env.local`

## License
This project is licensed under the MIT License - see the LICENSE file for details.