# Deployment Guide for B2B Lead Generation System

This guide will help you deploy your application to `https://b2b-lead-generation.com`

## Prerequisites

1. **Purchase your domain**: Buy `b2b-lead-generation.com` from a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. **Node.js**: Install Node.js (v20 or higher) from https://nodejs.org

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Install Dependencies Locally
```bash
npm install
```

### Step 2: Test Locally
```bash
npm run dev
```
Visit http://localhost:3000 to ensure everything works.

### Step 3: Deploy to Vercel

#### Method A: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Method B: Using Vercel Dashboard
1. Go to https://vercel.com
2. Sign up or login
3. Click "Add New Project"
4. Import your code repository (or upload files)
5. Vercel will auto-detect the framework
6. Click "Deploy"

### Step 4: Connect Your Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `b2b-lead-generation.com`
4. Add `www.b2b-lead-generation.com` (optional)
5. Follow Vercel's DNS configuration instructions
6. Update your domain's DNS records at your registrar:
   - **A Record**: Point to Vercel's IP (76.76.21.21)
   - **CNAME Record** (www): Point to `cname.vercel-dns.com`

**DNS propagation can take 24-48 hours**

---

## Option 2: Deploy to Netlify

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Deploy to Netlify

#### Method A: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Method B: Using Netlify Dashboard
1. Go to https://netlify.com
2. Sign up or login
3. Drag and drop your project folder (after running `npm run build`)
4. Or connect your Git repository

### Step 3: Connect Custom Domain

1. In Netlify dashboard, go to "Domain Settings"
2. Click "Add custom domain"
3. Enter `b2b-lead-generation.com`
4. Update DNS at your domain registrar:
   - **A Record**: Point to Netlify's load balancer IP
   - Or use **CNAME**: Point to your-site.netlify.app

---

## Option 3: Deploy to Your Own Server

### Step 1: Build the Application
```bash
npm install
npm run build
```

This creates a `dist` folder with production files.

### Step 2: Upload to Your Server

Upload the `dist` folder contents to your web server (via FTP, SFTP, or SSH).

### Step 3: Configure Web Server

#### For Nginx:
```nginx
server {
    listen 80;
    server_name b2b-lead-generation.com www.b2b-lead-generation.com;
    root /var/www/b2b-lead-generation;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # SSL configuration (recommended)
    listen 443 ssl;
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
}
```

#### For Apache (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Point Domain to Server

Update DNS records at your domain registrar:
- **A Record**: Point `b2b-lead-generation.com` to your server's IP address
- **CNAME Record**: Point `www` to `b2b-lead-generation.com`

### Step 5: Setup SSL Certificate (Important!)

Use Let's Encrypt for free SSL:
```bash
sudo certbot --nginx -d b2b-lead-generation.com -d www.b2b-lead-generation.com
```

---

## Environment Variables (Future Use)

When you integrate real APIs, create a `.env` file:

```env
VITE_API_URL=https://api.b2b-lead-generation.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

**Never commit `.env` to Git!** Add it to `.gitignore`.

---

## Post-Deployment Checklist

- [ ] Domain is accessible at https://b2b-lead-generation.com
- [ ] SSL certificate is installed (HTTPS working)
- [ ] All pages load correctly
- [ ] Search functionality works
- [ ] Filters work properly
- [ ] Responsive design works on mobile
- [ ] Analytics tracking (add Google Analytics if needed)
- [ ] Set up monitoring (UptimeRobot, Pingdom, etc.)

---

## Troubleshooting

### Issue: "404 Not Found" on refresh
**Solution**: Ensure your server is configured for SPA routing (see nginx/apache config above)

### Issue: CSS not loading
**Solution**: Check the base URL in `vite.config.ts` and ensure all assets are properly referenced

### Issue: Domain not resolving
**Solution**: 
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for DNS to fully propagate
- Verify DNS records are correct at your registrar

### Issue: HTTPS not working
**Solution**: Install SSL certificate using Let's Encrypt or your hosting provider's SSL

---

## Support & Maintenance

### Updating the Application
```bash
# Make changes to code
npm run build
# Upload new dist folder to server
```

### Monitoring
- Set up Sentry for error tracking
- Use Google Analytics for user analytics
- Monitor uptime with UptimeRobot

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

---

**Your application is now ready to deploy to https://b2b-lead-generation.com!**
