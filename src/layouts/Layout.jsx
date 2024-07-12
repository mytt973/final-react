import {Root} from "@/layouts";
import { Home,Futurama,About,NotFound,Doglist,Exo,Exo2 } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContexts/ThemeContext";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/a-propos",
        element:<About/>
      },
      {
        path:"/test",
        element:<Doglist/>
      }, 
      {
        path:"/futurama",
        element:<Futurama/>
      },
      {
        path:"/exo",
        element:<Exo/>
      },
      {
        path:"/product",
        element:<Exo2/>
      }
    ],
    errorElement: <NotFound/>
  },
  {
  path:"/*",
  element:<NotFound/>,
  errorElement:<NotFound/>
  }

]);
//to in layout
const Layout = () => {
  
  return(
    <>
    
    <ThemeProvider>
      <RouterProvider router={router}/>      
    </ThemeProvider>
        
    </>
  )
}

export default Layout;
