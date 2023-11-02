import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/Notfound";


//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
  <div className="max-w-screen-md max-auto pt-20">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/articles-list" element={<ArticlesList/>}/>
      <Route path="/article/:name" element={<Article/>}/>
      <Route path="*" element={<NotFound />}/>
     </Routes>
        </div>
        </Router>
 );
}

export default App;
