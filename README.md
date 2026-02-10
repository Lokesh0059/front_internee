# Google Workspace Landing Page

A modern, responsive landing page for Google Workspace built with Next.js and CSS.

## Features

- ✨ Responsive design that works on all devices
- 🎯 Live countdown timer
- 💻 Google Cloud Partner badge
- 🎨 Beautiful gradient styling
- 🔘 Interactive buttons and hover effects
- 📱 Mobile-optimized layout

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
┣ app/
┃ ┣ layout.tsx      # Root layout component
┃ ┣ page.tsx        # Main page component with countdown timer
┃ ┣ page.css        # Page-specific styles
┃ ┗ globals.css     # Global styles
┣ public/           # Static assets
┣ .gitignore        # Git ignore rules
┣ package.json      # Project dependencies
┗ tsconfig.json     # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with gradients and animations
- **React 18** - UI library

## Customization

### Colors

You can easily customize the color scheme by modifying the CSS gradient values in `app/page.css`:

- Google Colors: `#34a853` (green), `#4285f4` (blue), `#ea4335` (red)
- Pink/Accent: `#ff4081` to `#ff6b9d`

### Content

Edit the text, discounts, and button labels directly in `app/page.tsx`

### Timer

Modify the timer logic in the `useEffect` hook in `app/page.tsx` to change the countdown behavior.

## License

This project is open source and available for educational and commercial use.