import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import root from "./router/root";

function App() {
  return <>
    <RouterProvider router={root}>
    </RouterProvider>
    <ToastContainer hideProgressBar={true} position="bottom-center" />
  </>;
}

export default App;
