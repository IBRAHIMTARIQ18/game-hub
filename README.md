# 🎮 GameHub App — Game Discovery Platform

A modern and responsive game discovery web application built with React, TypeScript, and Chakra UI. GameDeck Pro allows users to explore, search, filter, and interact with a vast collection of games using real-time data from the RAWG API.

---

## 🚀 Live Demo

🔗 **Live Website:** (https://game-hub-roan-seven.vercel.app/)

---

## ✨ Features

- 🔍 Real-time game search
- 🎮 Browse games by platform (PlayStation, Xbox, PC, etc.)
- 🧩 Filter games by genres
- 📊 Sort games (Popularity, Rating, Release Date)
- 🌙 Dark mode support (Chakra UI)
- ❤️ Add / Remove favorites (interactive wishlist)
- 🪟 Game details modal with:
  - Game Name
  - Game image
  - Rating
  - Release date
- ⚡ Smooth animations using Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ⏳ Skeleton loaders for better UX
- ♾️ Infinite scrolling for seamless browsing

---

## 🛠️ Tech Stack

- **ReactJS**
- **TypeScript**
- **Chakra UI**
- **Vite**
- **Axios**
- **Framer Motion**
- **RAWG API**

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── GameModal.tsx
│   ├── NavBar.tsx
│   ├── PlatformSelector.tsx
│   ├── SortSelector.tsx
│   └── GenresList.tsx
│
├── hooks/
│   ├── useGames.ts
│   └── useGenres.ts
│
├── services/
│   └── api-client.ts
│
├── App.tsx
├── main.tsx
└── index.css

```

---

## Installation & Setup

Clone the repository:

```bash
git clone <your-repo-link>
```

Move into the project folder:

```bash
cd gamhub
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The project will run locally on:

```bash
http://localhost:5173
```

---

## Author

**M. Ibrahim Tariq**
