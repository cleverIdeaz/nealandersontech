# Neal Anderson – Vibe Coder Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with creative coder vibes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations and transitions
- **Sections**:
  - Hero section with call-to-action buttons
  - About section with bio and social links
  - Projects showcase with tech stack tags
  - Work experience timeline
  - Skills categorized by expertise
  - Blog/WIP section for ongoing experiments
  - Contact form with email functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nealanderson/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Netlify

### Option 1: Deploy from Git (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the Next.js configuration
4. Deploy!

### Option 2: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `.next` folder
3. Upload the contents of `.next` to Netlify

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod --dir=.next
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/hero.tsx` - Name, tagline, and CTA buttons
- `src/components/about.tsx` - Bio, social links, and headshot
- `src/components/projects.tsx` - Your projects and descriptions
- `src/components/experience.tsx` - Work experience timeline
- `src/components/skills.tsx` - Skills and expertise
- `src/components/contact.tsx` - Contact information

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Component-specific styles are in individual component files
- Tailwind configuration is in `tailwind.config.js`

### Content

- Add your resume PDF to `public/resume.pdf`
- Update social media links in the components
- Add your actual project URLs and GitHub links

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Flexible grid layouts for all screen sizes
- Optimized typography and spacing
- Touch-friendly interactive elements

## 🎭 Animations

Framer Motion is used throughout for:

- Page load animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth transitions between states

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Neal Anderson - [@nealanderson](https://github.com/nealanderson) - neal@nealanderson.tech

Project Link: [https://github.com/nealanderson/portfolio](https://github.com/nealanderson/portfolio)