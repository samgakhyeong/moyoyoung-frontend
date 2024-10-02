import { PostProvider } from "./components/allBoard/PostContext";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import root from "./router/root";
import BoardMain from "./components/allBoard/BoardMain";
import BoardInput from "./components/allBoard/BoardInput";
import BoardDetail from "./components/allBoard/BoardDetail";

const App = () => {
  return (
    <RouterProvider router={root}>
      <PostProvider>
        <BoardMain />
        <BoardInput />
        <BoardDetail />
      </PostProvider>
      <ToastContainer hideProgressBar={true} position="bottom-center" />
    </RouterProvider>
  );
};
export default App;
