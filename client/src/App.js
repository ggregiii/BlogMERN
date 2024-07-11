import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route index eleement={

    }>
    </Routes>
    <main>
      <Header/>
      
        <Post />
        <Post />
        <Post />
      
    </main>
  );
}

export default App;
