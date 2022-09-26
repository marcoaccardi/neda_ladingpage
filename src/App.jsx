import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.scss";

import NonDiscrimination from "./pages/NonDiscrimination";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route
          exact
          path='/nondiscrimination'
          element={<NonDiscrimination />}
        />
      </Routes>
    </Router>
  );
}

export default App;
