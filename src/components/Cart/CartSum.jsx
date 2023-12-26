import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

export default function CartSum() {
  return (
    <>
      <Dropdown item text="My Cart">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={Link} to="/cart">Go to Cart</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </>
  );
}
