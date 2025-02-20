
// import { Routes, Route } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Charollais from "./pages/Charolais";
import Joiningadvice from "./pages/Joiningadvice";
import Saleshistory from "./pages/Saleshistory";
import Ramsales from "./pages/Ramsales";
import Whitesuffolks from "./pages/Whitesuffolks";
import AboutusHistory from './pages/AboutPages/AboutusHistory';
import AboutusHealth from './pages/AboutPages/AboutusHealth';
import AboutusVaccination from './pages/AboutPages/AboutusVaccination';
import AboutusBreeding from './pages/AboutPages/AboutusBreeding';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="mx-auto">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus/" element={<Aboutus />} />
          <Route path="/history" element={<AboutusHistory />} />
          <Route path="/health" element={<AboutusHealth />} />
          <Route path="/vaccination" element={<AboutusVaccination />} />
          <Route path="/breeding" element={<AboutusBreeding />} />
          <Route path="/charollais" element={<Charollais />} />
          <Route path="/joiningadvice" element={<Joiningadvice />} />
          <Route path="/salehistory" element={<Saleshistory />} />
          <Route path="/ramsales" element={<Ramsales />} />
          <Route path="/whitesuffolks" element={<Whitesuffolks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  )
};