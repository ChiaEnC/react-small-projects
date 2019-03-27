import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Portfolio from "../components/PortfolioPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import Contact from "../components/Contact";
import Home from "../components/HomePage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route
          path="/portfolio/:id"
          component={PortfolioItemPage}
          exact={true}
        />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
