import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "../Login/SignedOut";
import SignedIn from "../Login/SignedIn";
import { Link } from "react-router-dom";
import CartSum from "../Cart/CartSum";

export default function Navbar() {
  const [isAuth, setAuth] = useState(false);
  
  function handleSignOut(params) {
    setAuth(false);
    
  }

  function handleSingIn(params) {
    setAuth(true);
  }

  return (
    <Container textAlign="center">
      <Menu size="mini" inverted>
        <Menu.Item name="home" as={Link} to="/" />
        <Menu.Item name="Products"  as={Link} to="/products" />

        <Menu.Menu position="right">
          <CartSum />

          {isAuth ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut signIn={handleSingIn} />
          )}
        </Menu.Menu>
      </Menu>
    </Container>
  );
}
