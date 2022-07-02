import { Routes, Route } from 'react-router-dom';
import LayoutWithSidebar from './components/layout/LayoutWithSidebar';
import ProtectedRoute from "./config/ProtectedRoute";
import About from './pages/about/About';
import Login from './pages/auth/Login';
import Dashboard from "./pages/dashboard/Dashboard";
import Error from './pages/error/Error';


function App() {

  const protectedRoutes = [
    { path: '/', Component: Dashboard },
    { path: '/about', Component: About }
  ]

  return (
    <Routes>
      {
        protectedRoutes.map(({ Component, path }, index ) => (
          <Route key={index} element={<ProtectedRoute isAllowed={true} />}>
            <Route path={path} element={
              <LayoutWithSidebar>
                <Component />
              </LayoutWithSidebar>
            } />
          </Route>
        ))
      }
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
