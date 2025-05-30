# Soccer Match Tracker ⚽

A live, interactive dashboard to browse upcoming soccer fixtures, filter by league, and toggle light/dark mode.

---

## 🏁 Getting Started

1. Clone the repo  
   ```bash
   git clone <repo-url> c:\Users\HP\Music\project
   cd c:\Users\HP\Music\project
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Create a `.env` in the project root:  
   ```
   FOOTBALL_API_KEY=your_api_token_here
   ```
4. Start backend & frontend in separate shells:  
   ```bash
   npm run server   # Backend API → http://localhost:3001
   npm run dev      # Frontend      → http://localhost:5173
   ```

---

## 🚀 Available Scripts

- `npm run dev`    — Launches Vite dev server  
- `npm run server` — Starts Express API  
- `npm run build`  — Bundles frontend for production  
- `npm run lint`   — Runs ESLint checks

---

## 🎨 Features

- ⚽ Live upcoming matches with date grouping  
- 🏆 League filter dropdown  
- 🌗 Light/dark theme toggle  
- ⏳ Smooth loading & fade-in animations  
- 🔄 Retry on API errors  

---

## 👀 Usage

1. Open [http://localhost:5173](http://localhost:5173)  
2. Select a league from the 🏆 dropdown  
3. Browse fixtures grouped by date  
4. Toggle theme (🌙/☀️) in the header  

Enjoy tracking your favorite leagues!  
