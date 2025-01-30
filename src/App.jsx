import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-day-picker/style.css";
import router from "./Router/Route/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-right" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
