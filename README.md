# Foodie Restaurant App

A modern restaurant web application built with Next.js App Router, featuring a dynamic menu page, reservation navigation, and a simple shopping cart system using React Context API. The app uses a server-rendered menu page for data fetching and client components for cart interactions, which follows the recommended Next.js server/client component pattern.[cite:262][cite:597]

## Features

- Dynamic menu page with food data fetched from an external API.[cite:262]
- Add to cart button with instant UI feedback such as changing text to `Added` and disabling the button when the item already exists in the cart.[cite:684][cite:695]
- Cart page that displays selected dishes with image, name, and price, plus remove-from-cart functionality.[cite:698][cite:706]
- Reusable `EmptyState` component for empty cart or empty data situations.[cite:596]
- Active navigation styling for current pages using `usePathname()` in Next.js.[cite:645]

## Project Structure

```bash
src/app/
├── about/
├── assets/
├── blog/
├── components/
│   └── AddToCartButton.jsx
├── contact/
├── dashboard/
├── fake/
├── menu/
│   └── page.jsx
├── shared/
│   └── EmptyState.jsx
├── context/
│   └── CartContext.jsx
├── cart/
│   └── page.jsx
├── error.jsx
├── favicon.ico
├── globals.css
├── layout.js
└── page.js
```

## Technologies Used

| Technology         | Purpose                                                               |
| ------------------ | --------------------------------------------------------------------- |
| Next.js App Router | File-based routing, server and client components.[cite:262][cite:658] |
| React Context API  | Global cart state management.[cite:597][cite:692]                     |
| Tailwind CSS       | Styling and responsive UI.                                            |
| react-icons        | UI icons for cart, phone, arrows, and ratings.                        |
| Next/Image         | Optimized image rendering in menu and cart pages.[cite:262]           |

## Cart Functionality

The cart system is implemented with a custom `CartContext` that exposes `cartItems`, `addToCart`, and `removeFromCart`. Context is a common pattern for app-wide state sharing in Next.js and React when multiple components need access to the same cart data.[cite:597][cite:692]

### Add to Cart

`AddToCartButton.jsx` is a client component because it uses the `useCart()` hook and handles click events. In Next.js App Router, hooks such as `useContext` must run inside client components, while the menu page can stay as a server component for data fetching.[cite:262][cite:624]

### Remove from Cart

The cart page reads `cartItems` from context and removes items with `removeFromCart(id)`. A common React approach for removal is filtering the previous array and keeping only items whose IDs do not match the target item.[cite:673][cite:706]

## Empty State

The reusable `EmptyState` component is used when the cart has no items or when no menu data is available. This pattern improves UX by giving users a clear message and a follow-up action instead of showing a blank screen.[cite:596][cite:701]

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in the browser:

```bash
http://localhost:3000
```

## Important Notes

- Keep `useCart()` inside client components only; calling a client hook from a server component causes a Next.js error.[cite:624][cite:615]
- Keep route files as `page.jsx` or `page.js` inside route folders because App Router depends on that file convention.[cite:645][cite:658]
- Import `useCart` from the context file, not from a route file such as `page.jsx`, because hooks and shared state should live in reusable modules.[cite:597][cite:660]

## Future Improvements

- Add quantity increment and decrement support.
- Persist cart data with localStorage for refresh-safe carts.
- Add toast notifications when items are added or removed.
- Add cart count badge in the navbar.
- Add checkout flow and order submission.

## Summary

This project is a clean Next.js restaurant application with menu browsing, cart interaction, active navigation, and reusable UI patterns. Its structure follows the App Router model by separating server-rendered pages from client-side interactive components.[cite:262][cite:597]
