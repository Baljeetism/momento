import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
import { publicRoutes, protectedRoutes } from "./Routes";


const App = () => {
  return (
    <Router>
      <Routes>

        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
