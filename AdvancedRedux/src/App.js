import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const isCartShown = useSelector((state) => state.cart.isShown);
  const cartItems = useSelector((state) => state.cart.items);
  const [notificationState, setNotificationState] = useState("empty");

  useEffect(() => {
    if (isInitial === true) {
      isInitial = false;
      return;
    }

    const sendCartData = async () => {
      const response = await fetch(
        "https://customhookpractice-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cartItems) }
      );

      console.log("response!", response);
      if (!response.ok) {
        setNotificationState("error");
        throw new Error("Sending cart data failed!!!");
      }
      setNotificationState("success");
      const responseData = await response.json();
    };
    sendCartData().catch((error) => {
      console.log("Error");
    });

    setNotificationState("continue")

  }, [cartItems]);

  return (
    <Fragment>
      <Notification status={notificationState} title={notificationState} />
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
