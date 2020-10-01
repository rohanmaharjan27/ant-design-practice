import React from "react";
import "./App.less";
import BasicGrid from "./components/BasicGrid";
import BlogForm from "./components/BlogForm";
import Home from "./components/Home";
import ImageUpload from "./components/ImageUpload";
import Imageuploadantd from "./components/ImageUploadAntD";
import ImageUploadButtons from "./components/ImageUploadButtons";
import Imageuploadpractice from "./components/ImageUploadPractice";
import Infytrip from "./components/InfyTrip";
import PicturesWall from "./components/PicturesWall";
import ProductTable from "./components/ProductTable";
import ResponsiveGrid from "./components/ResponsiveGrid";
import IndexHome from "./pages/homepage/IndexHome";

function App() {
  return (
    <div className="App">
      {/* <BlogForm /> */}
      {/* <Home /> */}
      {/* <ResponsiveGrid /> */}
      {/* <BasicGrid /> */}
      {/* <ProductTable /> */}
      <IndexHome />
      {/* <ImageUpload /> */}
      {/* <ImageUploadButtons /> */}

      {/* <ProductTable /> */}
      {/* <PicturesWall /> */}
      {/* <Imageuploadantd />
      <Imageuploadpractice /> */}
    </div>
  );
}

export default App;
