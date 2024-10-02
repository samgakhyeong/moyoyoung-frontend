import {
  RouterProvider
} from "react-router-dom";
import { PostProvider } from "./components/allBoard/PostContext";
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
           <BoardDetail/>
      </PostProvider>
    </RouterProvider>
  );
}

export default App;
