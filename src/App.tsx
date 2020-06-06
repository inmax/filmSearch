import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ContentTop from "./components/ContentTop";
// import ItemFilm from "components/ItemFilm"
import "./app.scss";

// Written as a function declaration
function App() {
  return (
    <>
      <Layout
        header={<ContentTop />}
        content={<Home />}
      />
    </>)
}
export default App;