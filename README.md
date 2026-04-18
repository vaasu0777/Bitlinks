<div align="center">
  <img src="https://bitlinks-3rjr.vercel.app/BitLinks.png" alt="BitLinks Logo" width="120" />

  <h1>BitLinks</h1>

  <p><strong>The best URL shortener in the market.</strong><br/>
  A fast, secure, and modern URL shortening service — transform long URLs into clean, shareable links in seconds.</p>

  <a href="https://bitlinks-3rjr.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  &nbsp;
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  &nbsp;
  <img src="https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  &nbsp;
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />

</div>

---

## ✨ Features

- 🔗 **Instant URL Shortening** — Paste any long URL and get a clean short link in one click
- 👤 **User Authentication** — Secure login via NextAuth to manage your links
- 📊 **Link Analytics** — Track clicks and monitor where your traffic is coming from
- 🎨 **Custom Short URLs** — Make your links memorable and brand-relevant
- 🔒 **Secure & Reliable** — Built with security in mind; your links are safe from compromise
- ⚡ **Blazing Fast** — Powered by Next.js 16 with server-side rendering for optimal performance
- 📱 **Responsive Design** — Works seamlessly across all devices and screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Linting/Formatting** | [Biome](https://biomejs.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- A [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/vaasu0777/Bitlinks.git
cd Bitlinks
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
# MongoDB connection string
MONGODB_URI=your_mongodb_connection_string

# NextAuth configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# (Optional) OAuth provider credentials if applicable
# GITHUB_ID=your_github_oauth_app_id
# GITHUB_SECRET=your_github_oauth_app_secret
```

> 💡 You can generate a strong `NEXTAUTH_SECRET` by running:
> ```bash
> openssl rand -base64 32
> ```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

---

## 📁 Project Structure

```
Bitlinks/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router pages & layouts
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── login/       # Authentication page
│   │   ├── shorten/     # URL shortening page
│   │   └── page.js      # Home / landing page
│   ├── components/      # Reusable UI components
│   └── lib/             # Utility functions, DB connection
├── .env.local           # Environment variables (not committed)
├── biome.json           # Biome linter/formatter config
├── jsconfig.json        # JS path aliases
├── next.config.mjs      # Next.js configuration
├── package.json         # Project metadata & scripts
├── postcss.config.mjs   # PostCSS config for Tailwind
└── README.md
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server at `localhost:3000` |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run Biome linter to check code quality |
| `npm run format` | Auto-format all files with Biome |

---

## 🌐 Pages Overview

| Route | Description |
|---|---|
| `/` | Landing page with hero section |
| `/shorten` | Main URL shortening interface |
| `/about` | About the service and its features |
| `/contact` | Contact form |
| `/login` | User authentication |
| `/[shortCode]` | Redirect handler for shortened URLs |

---

## ☁️ Deployment

BitLinks is deployed on **Vercel** for optimal Next.js performance.

To deploy your own instance:

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Add the environment variables from `.env.local` in the Vercel dashboard under **Settings → Environment Variables**.
4. Click **Deploy** — Vercel handles the rest!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vaasu0777/Bitlinks)

---

## 🤝 Contributing

Contributions are always welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a new branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open a Pull Request** on GitHub

Please make sure your code passes linting before submitting:

```bash
npm run lint
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Vaasu Gagneja**

Built with 🔥 · [GitHub](https://github.com/vaasu0777) · [Live Site](https://bitlinks-3rjr.vercel.app/)

</div>

---

<div align="center">
  <sub>© 2026 BitLinks™ — All Rights Reserved.</sub>
</div>
