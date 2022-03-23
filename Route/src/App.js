import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductsPage from "./pages/ProductsPage";
import WelcomePage from "./pages/WelcomePage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Route path="/" exact={true}>
          <Redirect to="/welcome" />
        </Route>
        <Route path={"/welcome"} exact={true}>
          <WelcomePage />
        </Route>
        <Route path={"/products"} exact={true}>
          <ProductsPage />
        </Route>
        <Route path={"/products/:productId"}>
          <ProductDetailPage />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
