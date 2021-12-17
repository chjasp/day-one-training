import logo from './logo.svg';
// import './App.css';
import Center from './pages/Center'
import Report from './pages/Report'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Here comes routing functionality */}
      <Router>
        {/* Take a look at URL */}
        <Routes>
          {/* Match a path */}
          <Route path="/center" element={<Center />} />
          {/* <Route path="/reportsf" element={<ReportsNFilters />} /> */}
          <Route path="/" element={<Report />} />
        </Routes>

      </Router>
      </header>
    </div>
  );
}

export default App;
