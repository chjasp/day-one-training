import logo from "./logo.svg";
import "./App.css";
import Center from "./pages/Center";
import Reports from "./pages/Reports";
import IntegratedReports from "./pages/IntegratedReports";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ReportsNFilters from "./pages/ReportsNFilters";

function App() {
  return (
    <div className="App">
      {/* Here comes routing functionality */}
      <Router>
        {/* Take a look at URL */}
        <Routes>
          {/* Match a path */}
          <Route path="/center" element={<Center />} />
          <Route path="/reportsf" element={<ReportsNFilters />} />
          <Route path="/" element={<IntegratedReports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
