# Tatiya CPA PC — Website

A recreation of [tatiyacpa.com](https://www.tatiyacpa.com) built as a static site for deployment on **Cloudflare Pages**.

## Project structure

```
.
├── index.html              # Home
├── about-us.html           # About Us
├── services.html           # Services
├── why-us.html             # Why Us
├── mission.html            # Mission
├── links.html              # Useful Links
├── contact-us.html         # Contact Us
├── 404.html                # Not-found page
├── _headers                # Cloudflare Pages headers (security + caching)
├── _redirects              # Cloudflare Pages redirects + 404 fallback
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/logo.svg, favicon.svg
```

No build step is required. Cloudflare Pages serves the files as-is.

## Local preview

Any static server works. For example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or with Node:

```bash
npx serve .
```

## Deploy to Cloudflare Pages

### 1. Create a GitHub account (skip if you already have one)

1. Go to <https://github.com/signup>.
2. Choose a username, email, and password.
3. Verify your email.

### 2. Create a new GitHub repository

1. Sign in to GitHub and click **New repository** (top right ➜ **+** ➜ *New repository*).
2. Owner: your account. Repository name suggestion: `tatiyacpa`.
3. Visibility: **Public** (or Private — Cloudflare Pages supports both).
4. **Do not** initialize with a README, .gitignore, or license (this repo already has files).
5. Click **Create repository**.
6. Follow the "push an existing repository from the command line" instructions:

   ```bash
   git remote add origin git@github.com:<your-username>/tatiyacpa.git
   git branch -M main
   git push -u origin main
   ```

### 3. Create a Cloudflare account (skip if you already have one)

1. Go to <https://dash.cloudflare.com/sign-up>.
2. Enter your email and a password, then verify your email.
3. (Optional) Add a payment method only if you plan to use paid features. The free Pages plan is sufficient for this site.

### 4. Connect Cloudflare Pages to the GitHub repo

1. In the Cloudflare dashboard, go to **Workers & Pages** ➜ **Create application** ➜ **Pages** tab ➜ **Connect to Git**.
2. Authorize Cloudflare to access your GitHub account and select the `tatiyacpa` repo.
3. Set up the build:
   - **Production branch**: `main`
   - **Framework preset**: *None*
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (the repository root)
4. Click **Save and Deploy**.
5. After ~1 minute, Cloudflare will give you a URL like `https://tatiyacpa.pages.dev`.

### 5. (Optional) Add a custom domain

Once the site is live on `pages.dev`:

1. In your Cloudflare Pages project, go to **Custom domains** ➜ **Set up a custom domain**.
2. Enter the domain (e.g. `tatiyacpa.com` or `www.tatiyacpa.com`).
3. Cloudflare will guide you to add the required DNS records. If the domain is already on Cloudflare DNS, this is one click. Otherwise, update the registrar's nameservers to Cloudflare or add the CNAME records they provide.
4. SSL is provisioned automatically.

## Customization tips

- Logo: replace `assets/img/logo.svg` (or swap to a PNG) and update the `<img>` references.
- Brand colors: edit the navy/teal values in `assets/css/styles.css` (search for `#0a2c66` and `#1aa3b2`).
- Contact form: the contact form on `contact-us.html` posts to a placeholder Formspree endpoint. Replace `https://formspree.io/f/your-form-id` with your own (free at <https://formspree.io/>) or wire it up to Cloudflare Pages Functions / a Worker.

## License

Content is for the Tatiya CPA PC firm. Site code provided as-is for the project.
