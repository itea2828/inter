import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RegisterScreen from './screens/Register/RegisterScreen';
import HomeScreen from './screens/Home/HomeScreen';
import { selectIsAuthenticated } from './slices/persSlice';
import NotFound from "./screens/Not/NotFound";

function App() {

  const routerR = createBrowserRouter([
    {
      path: "/register/:whois",
      element: <RegisterScreen />,
    },
    { path: '*', 
      element: <NotFound />
    }

  ]);

  const routerH = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    { path: '*', 
      element: <NotFound />
    }

  ]);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  console.log('isAuthenticated', isAuthenticated)
  
  return (
    <>
      { isAuthenticated ?
      <RouterProvider router={routerH} />
      :
      <RouterProvider router={routerR} />
      }
    </>
      
  );
}

export default App;
