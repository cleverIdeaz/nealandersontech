# Deployment Guide - Neal Anderson Portfolio

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy from Git (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Netlify will auto-detect the settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Option 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder to the deploy area
   - Your site will be live instantly!

### Option 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy**:
   ```bash
   netlify login
   netlify deploy --prod --dir=.next
   ```

## 🔧 Configuration

### Environment Variables (Optional)

If you need environment variables for contact form or other features:

1. In Netlify dashboard, go to Site settings > Environment variables
2. Add any required variables
3. Redeploy your site

### Custom Domain

1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## 📝 Pre-Deployment Checklist

- [ ] Update personal information in components
- [ ] Add your actual resume PDF to `public/resume.pdf`
- [ ] Update social media links
- [ ] Add your actual project URLs
- [ ] Test the contact form
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check dark/light mode toggle

## 🎨 Customization

### Personal Information

Update these files with your details:

- `src/components/hero.tsx` - Name, tagline, CTA buttons
- `src/components/about.tsx` - Bio, social links, headshot
- `src/components/projects.tsx` - Your projects
- `src/components/experience.tsx` - Work history
- `src/components/skills.tsx` - Your skills
- `src/components/contact.tsx` - Contact info

### Styling

- Colors: `src/app/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.js`

## 🚀 Performance

The site is optimized for:
- Static generation (fast loading)
- Image optimization
- Code splitting
- SEO optimization
- Mobile-first responsive design

## 📱 Mobile Testing

Test on various devices:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop browsers

## 🔍 SEO

The site includes:
- Meta tags for social sharing
- Open Graph tags
- Structured data
- Semantic HTML
- Fast loading times

## 🛠️ Maintenance

### Regular Updates

1. **Content Updates**: Update projects, experience, skills
2. **Blog Posts**: Add new posts to showcase work
3. **Dependencies**: Keep packages updated
4. **Performance**: Monitor Core Web Vitals

### Adding New Features

1. Create new components in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Test locally with `npm run dev`
4. Build and deploy

## 📞 Support

If you encounter issues:

1. Check the console for errors
2. Verify all imports are correct
3. Ensure all dependencies are installed
4. Test the build locally first

## 🎉 Success!

Your portfolio is now live and ready to showcase your work!

Visit your Netlify URL to see your portfolio in action.
