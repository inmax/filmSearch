import React, { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import ContentTop from "./components/ContentTop";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import "./app.scss";

const Home = lazy(() => import('./pages/Home'));
const InitSession = lazy(() => import('./pages/InitSession'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Layout
              header={<ContentTop />}
              content={<Home />}
            />
          </Route>

          <Route path="/initsession" >
            <Layout
              header={<ContentTop />}
              content={<InitSession />}
            />
          </Route>
          <Route path="*">
            <InitSession />
          </Route>
        </Switch>
      </Suspense>
    </ BrowserRouter>);
}
export default App;