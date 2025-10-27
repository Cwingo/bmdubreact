import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

// pages
import HomePage from "./pages/HomePage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import SubmitPage from "./pages/SubmitPage.jsx";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import PartsPage from "./pages/PartsPage.jsx";
import ShopsPage from "./pages/ShopsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
