# Studio Nan - Interior Design Portfolio

A modern, responsive portfolio website for Studio Nan interior design, featuring the Never Too Small project showcase.

## Features

- Responsive design optimized for all devices
- Video background hero section
- Comprehensive project showcase with multiple room sections
- Contact form with email integration
- Modern UI with Japandi-Scandinavian aesthetic

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a new repository on GitHub**
2. **Push this code to your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

4. **The site will automatically deploy when you push to main branch**

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

- `/client/src/` - React application source code
- `/attached_assets/` - Images and media files
- `/.github/workflows/` - GitHub Actions deployment configuration

## Contact Form

The contact form uses mailto links to open the user's default email client with pre-filled content. This ensures the website works as a static site without requiring a backend server.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Radix UI components
- React Hook Form
- Zod validation