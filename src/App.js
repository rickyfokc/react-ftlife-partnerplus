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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/CampaignPage" element={<CampaignPage />} />
        <Route path="/DocCenterPage" element={<DocCenterPage />} />
        <Route path="/BrokerComPage" element={<BrokerComPage />} />
        <Route path="/CategoriesPage" element={<CategoriesPage />} />
        <Route path="/EventCalendarPage" element={<EventCalendarPage />} />
        <Route path="/QuickLinksPage" element={<QuickLinksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
