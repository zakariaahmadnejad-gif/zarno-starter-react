# Zarno Starter React Project

This repository provides a starting point for the **Zarno** web application.
It is a hand‑crafted skeleton built with **React**, **React Router** and **Tailwind CSS**.
The goal is to implement the design and flows defined in the design spec for
Zarno, including RTL support, dark/light themes, and a luxurious UI inspired by
purple and gold tones.

## Features

* **RTL Layout** — The HTML and CSS are configured to display content in
  right‑to‑left format with Persian text.
* **Tailwind Design Tokens** — Colours, radii, shadows and blur amounts are
  customised in `tailwind.config.js` to match the Zarno brand.
* **Component Library** — Common UI building blocks such as buttons, cards,
  inputs, badges, accordions and modals are encapsulated in the `src/components`
  directory. They use the design tokens defined in Tailwind.
* **Page Templates** — The `src/pages` folder contains skeleton pages for all
  areas of the product: Home, Market, Wallet, Dashboard, KYC, Settings, FAQ,
  Blog, individual Post pages, About, Contact, Auth and a Not Found page.
  Each file includes placeholder text in Persian and follows the sections
  described in the design specification.
* **Navigation** — A simple navbar and footer wrap the application. Routing is
  handled via `react-router-dom` (version 6).

> **Note**: This starter does not include any API integration or state management.
> It is intended to serve as a visual and structural guide. You will need to
> install dependencies and wire up real data sources yourself.

## Getting Started

1. Install dependencies (requires Node.js 16 or later):

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173/`. You should see the Zarno
   landing page with the defined sections.

4. To build for production:

   ```bash
   npm run build
   ```

## Customisation

* **Colours and Tokens**: To adjust colours, radii or shadows, update the
  `theme.extend` section of `tailwind.config.js`.
* **Fonts**: The default font family references an external variable
  `--font-iran`. You can load your preferred Persian font in `index.html` or
  via CSS and assign it to this variable.
* **Dark/Light Modes**: Tailwind’s `darkMode: 'class'` option is enabled.
  Apply a `dark` class to the `<html>` or `<body>` element to switch themes.
* **Adding Pages**: Create additional React components in `src/pages` and add
  routes in `src/App.jsx`.

## License

This starter is provided as a template and does not include any licensing
restrictions. Use and modify it freely in your own projects.