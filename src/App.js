import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./page/LandingPage";
import LoginPage from "./page/LoginPage";
import DocCenterPage from "./page/DocCenterPage";
import CampaignPage from "./page/CampaignPage";
import BrokerComPage from "./page/CMS/BrokerComPage";
import CategoriesPage from "./page/CMS/CategoriesPage";
import EventCalendarPage from "./page/CMS/EventCalendarPage";
import QuickLinksPage from "./page/CMS/QuickLinksPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/Campaign" element={<CampaignPage />} />
        <Route path="/DocCenter" element={<DocCenterPage />} />
        <Route path="/BrokerCom" element={<BrokerComPage />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/EventCalendar" element={<EventCalendarPage />} />
        <Route path="/QuickLinks" element={<QuickLinksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
