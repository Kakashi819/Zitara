import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <div>This is about page</div>
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);
  return (
    <RouterProvider router={router}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>this is about page</div>} />
      <Route path="/login" element={<Login />} />
    </RouterProvider>
  );
}

export default App;
