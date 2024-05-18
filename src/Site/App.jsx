import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "../JSFiles/Constants";
import Roulette from "../Sites/Roulette";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="Roulette" />} />
        <Route path={ROUTES.Roulette} element={<Roulette />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
