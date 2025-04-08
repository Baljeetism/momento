import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperuserProtectedRoute from "./Utils/SuperuserProtectedRoute";
import { publicRoutes,superuserProtected } from "./Routes";
import Home from "./Components/Navbar/Home";


const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route element={<SuperuserProtectedRoute />}>
          {superuserProtected.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};


export default App;
