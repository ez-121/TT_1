import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';

import Home from '../src/pages/home.jsx';
import About from '../src/pages/about.jsx';
import NotFound from "./pages/Notfound.jsx";
import Courses from "./pages/courses.jsx"
import {Link} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
