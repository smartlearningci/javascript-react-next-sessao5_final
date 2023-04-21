import React from "react";

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import InicioView from "../views/InicioView";
import BlogPostView from "../views/BlogPostView";
import SobreView from "../views/SobreView";

function BlogRoutes(props) {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<InicioView />}></Route>
        <Route path="/inicio" element={<InicioView />}></Route>
        <Route path="/blog" element={<BlogPostView />}></Route>
        <Route path="/sobre" element={<SobreView />}></Route>
        <Route path="/blog/:id/:seoTitle" element={<Child />}></Route>
      </Routes>
    </Router>
  );

}
function Child() {
  let { id, seoTitle } = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>SeoTitle: {seoTitle}</h1>
    </div>
  );
}
export default BlogRoutes;