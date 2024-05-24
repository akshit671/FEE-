import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Loginpage';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
