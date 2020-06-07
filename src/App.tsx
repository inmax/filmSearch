import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ContentTop from "./components/ContentTop";
import "./app.scss";


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