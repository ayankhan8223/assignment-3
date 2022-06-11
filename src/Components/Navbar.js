import React from "react";
import { Button, Typography } from "antd";

import "./Navbar.css";
function Navbar() {
  const { Title, Text } = Typography;

  return (
    <div>
      <div className="navbar">
        <Title
          style={{
            margin: 0,
            fontWeight: 600,
            color: "#023047",
            letterSpacing: 1,
          }}
        >
          ATools
          <Text
            style={{
              color: "#fb8500",
            }}
          >
            .
          </Text>
        </Title>
        <div className="buttons">
          <Button
            type="text"
            style={{
              background: "#023047",
              color: "#ffff",
              marginRight: "20px",
              width: "170px",
            }}
            size={"large"}
          >
            Start From Trial
          </Button>
          <Button
            type="text"
            style={{ background: "#fb8500", color: "#ffff", width: "170px" }}
            size={"large"}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
