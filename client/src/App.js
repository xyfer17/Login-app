import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Reset, Username, PageNotFound, Recovery, Password, Profile, Register } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>

  },
  {
    path: '/register',
    element: <Register />

  },
  {
    path: '/reset',
    element: <Reset />

  },
  {
    path: '/password',
    element: <Password />

  },
  {
    path: '/recovery',
    element: <Recovery />

  }, 
  {
    path: '/profile',
    element: <Profile />

  }, 
  {
    path: '*',
    element: <PageNotFound />

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
