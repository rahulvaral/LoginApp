import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Resgister";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
