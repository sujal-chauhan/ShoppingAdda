<p align="center">
  <img src="./app/favicon.ico" alt="Shopping Adda Logo" width="120"/>
</p>

# 🛍️ Shopping Adda  
_A modern, full-stack e-commerce platform with sleek design, headless CMS, and secure payments._

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe)
![Sanity](https://img.shields.io/badge/Sanity.io-FF3C00?style=for-the-badge&logo=sanity)
![Clerk](https://img.shields.io/badge/Clerk-111827?style=for-the-badge&logo=clerk)

---

## 🚀 Features

- ✅ **Modern UI/UX** – Built with Tailwind CSS + Framer Motion  
- ✅ **Headless CMS** – Powered by Sanity.io  
- ✅ **Authentication** – Secure sign in/sign up with Clerk  
- ✅ **Shopping Cart** – Real-time cart management with Zustand  
- ✅ **Payment Processing** – Stripe integration for checkout  
- ✅ **Responsive Design** – Works across devices  

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript  
- **Styling**: Tailwind CSS, Framer Motion  
- **Backend**: Next.js API Routes  
- **Database / CMS**: Sanity.io  
- **Authentication**: Clerk  
- **Payments**: Stripe  
- **State Management**: Zustand  
- **Forms**: React Hook Form  
- **Icons**: Lucide React  

---

## 📦 Prerequisites

- Node.js `18+`  
- npm or yarn  
- Sanity.io account  
- Stripe account  
- Clerk account  

---

## 🚀 Getting Started

1️⃣ Clone the repository  

    git clone https://github.com/sujal-chauhan/ShoppingAdda.git
    cd shopping-adda

2️⃣ Install dependencies  

    npm install
    # or
    yarn

3️⃣ Create `.env.local` in root and add:  

    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    SANITY_API_READ_TOKEN=your_sanity_read_token

4️⃣ Run development server  

    npm run dev
    # or
    yarn dev

👉 Open [http://localhost:3000](http://localhost:3000)  

---

## 📂 Project Structure

    shopping-adda/
    ├── app/                    # App router
    │   ├── (store)/            # Store routes
    │   ├── api/                # API routes
    │   ├── studio/             # Sanity Studio
    │   └── draft-mode/         # Draft handlers
    ├── components/             # Reusable components
    │   ├── ui/                 # UI elements
    │   ├── AddToBasketButton.tsx
    │   ├── Header.tsx
    │   └── ProductGrid.tsx
    ├── lib/                    # Utility functions
    ├── sanity/                 # Schemas & queries
    ├── store/                  # Zustand state
    └── public/                 # Static files

---

## 🌟 Key Features

- 🛒 **Product Grid** – Modern grid with hover animations  
- 🛍️ **Shopping Cart** – Real-time cart with quantity management  
- 💳 **Checkout** – Stripe-powered secure payment flow  
- 🔑 **Authentication** – Clerk integration (sign up / login)  
- 📦 **Order History** – Track previous orders  
- 🔍 **Search & Filters** – Easy product discovery  

---

## 🛒 E-commerce Highlights

- Product categories & filtering  
- Cart persistence across sessions  
- Promo code support  
- Order tracking  
- Responsive product pages  

---

## 🛠 Development Scripts

    npm run dev       # Start dev server
    npm run build     # Build for production
    npm start         # Run production server
    npm run lint      # Run ESLint
    npm run typegen   # Generate Sanity types

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) – Framework  
- [Sanity.io](https://www.sanity.io/) – Headless CMS  
- [Stripe](https://stripe.com/) – Payments  
- [Clerk](https://clerk.com/) – Authentication  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  

---

⚡ Crafted with code, coffee & creativity - [Sujal Chauhan](https://github.com/sujal-chauhan)  
