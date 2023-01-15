import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Route</div>

  },
  {
    path: '/register',
    element: <div>Register Route</div>

  }
])


function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>

  );
}

export default App;
