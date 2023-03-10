import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./Pages/Introduction";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/800.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
