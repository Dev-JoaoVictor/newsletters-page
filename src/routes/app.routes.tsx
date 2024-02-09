import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Sucess } from "../page/sucess";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sucess',
    element: <Sucess />
  }
])

