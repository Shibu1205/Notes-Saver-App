import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";  // Import Home component
import Paste from "./component/Paste";  // Import Paste component
import ViewPaste from "./component/ViewPaste";  // Import ViewPaste component
import Navbar from "./component/Navbar";  // Import Navbar component
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
